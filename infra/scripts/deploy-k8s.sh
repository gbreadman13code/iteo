#!/bin/bash
cd "$(dirname "$0")/../.."
ansible-playbook -i infra/ansible/inventory.ini infra/ansible/deploy-k8s.yml
