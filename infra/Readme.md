# Инфраструктура

Директория содержит все компоненты для сборки, деплоя и оркестрации фронтенда.

```
infra/
├── ansible/        # Автоматизированный деплой через Ansible
├── Docker/         # Dockerfile для сборки образа
├── Helm/           # Helm-чарт для деплоя в Kubernetes
├── nginx/          # Конфигурация nginx внутри контейнера
└── scripts/        # Вспомогательные скрипты
```

---

## Деплой фронтенда (Ansible)

Автоматизированный деплой: сборка, загрузка на сервер и перезапуск контейнеров.

**Требования:**
- `ansible` установлен локально
- `rsync` установлен локально и на сервере
- SSH-алиас `iteo` настроен в `~/.ssh/config`

**Запуск:**
```bash
cd infra/ansible
ansible-playbook -i inventory.ini deploy-front.yml
```

**Что происходит при запуске:**
1. `npm run build` — сборка проекта локально
2. Загрузка папки `dist/` на сервер в `/app/dist` (через rsync)
3. Удаление старой версии фронтенда `/app/iteo/front`
4. Переименование `/app/dist` → `/app/iteo/front`
5. `docker compose restart` из `/app/iteo/iteo-back/`

---

## Docker-образ

Многоэтапная сборка: Node.js собирает проект, nginx раздаёт статику.

**Этапы сборки (`infra/Docker/Dockerfile`):**
1. `node:20-alpine` — `npm ci` + `npm run build`
2. `nginx:1.25-alpine` — копирует `dist/` и кастомный `nginx.conf`

**Сборка и публикация:**
```bash
cd infra/scripts
bash build.sh
```

Что делает скрипт:
1. Собирает образ `iteo-2026:latest` из `infra/Docker/Dockerfile`
2. Тегирует как `registry.iteo.pro/iteo-2026:latest`
3. Пушит в реестр `registry.iteo.pro`

---

## Nginx

Конфигурация в `infra/nginx/nginx.conf` встраивается в образ.

- Порт: `80`
- SPA-режим: все маршруты отдают `index.html`
- Gzip: включён для CSS, JS, JSON, SVG

---

## Helm-чарт (Kubernetes)

Чарт для деплоя в кластер Kubernetes.

```
infra/Helm/
├── Chart.yaml          # Метаданные чарта (name: iteo-2026, version: 0.1.0)
├── values.yaml         # Переменные (пусто — используются дефолты шаблонов)
└── templates/
    ├── deployment.yaml # Deployment: 1 реплика, образ registry.iteo.pro/iteo-2026:latest
    ├── svc.yaml        # Service: NodePort, порт 80
    └── ingress.yaml    # Ingress: test-4.iteo.pro, TLS через cert-manager (letsencrypt-prod)
```

**Ресурсы контейнера:**
- Requests: `50m` CPU, `64Mi` RAM
- Limits: `400m` CPU, `512Mi` RAM

**Запуск:**
```bash
helm upgrade --install iteo-2026 infra/Helm/ -n <namespace>
```
