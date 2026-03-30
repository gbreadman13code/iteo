import './ContactsPage.scss';

import { useEffect, useRef, useState } from 'react';
import vkIcon from './assets/vk.png';
import ContactsAppendix from './ContactsAppendix';

const MOBILE_BREAKPOINT = 1200;

const MAP_CENTER = [56.015020, 92.854024] as const;

const getZoom = () => {
  const w = window.innerWidth;
  if (w >= 3840) return 19;
  if (w >= 3200) return 18;
  if (w >= 2800) return 18;
  if (w >= 2300) return 18;
  if (w >= 1700) return 18;
  return 19;
};

const ContactsPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

      if (mapInstanceRef.current) {
        mapInstanceRef.current.setZoom(getZoom(), { duration: 300 });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const ymaps = (window as any).ymaps;
    if (!ymaps) return;

    ymaps.ready(() => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const map = new ymaps.Map(mapRef.current, {
        center: MAP_CENTER,
        zoom: getZoom(),
        controls: ['zoomControl'],
      });

      const placemark = new ymaps.Placemark(MAP_CENTER, {
        balloonContent: 'ООО «ИТЕО»<br>ул. Красной Армии, 10к3, офис 302',
        iconCaption: "ИТЕО",
        balloonContentHeader: "ИТЕО" 
      });
      map.geoObjects.add(placemark);

      // Стрелка сверху-слева (L-образная: вниз, затем вправо к офису)
      const arrowTopLeft1 = new ymaps.Polyline(
        [
          [56.015183, 92.853568], // начало — сверху
          [56.014937, 92.853607], // вниз
          [56.014923, 92.853609], // вправо к офису
          [56.014925, 92.853675], // вправо к офису
          [56.014953, 92.853670], // вправо к офису
          [56.014942, 92.853664], // вправо к офису
          // [56.014881058156604, 92.85355956823506], // вправо к офису
        ],
        {},
        {
          strokeColor: '#FF0000',
          strokeWidth: 3,
          strokeOpacity: 0.8,
          hasArrow: true,
        }
      );
            const arrowTopLeft2 = new ymaps.Polyline(
        [
          [56.014943, 92.853680],
          [56.014953, 92.853670], // начало — сверху
        ],
        {},
        {
          strokeColor: '#FF0000',
          strokeWidth: 3,
          strokeOpacity: 0.8,
          hasArrow: true,
        }
      );
      map.geoObjects.add(arrowTopLeft1);
      map.geoObjects.add(arrowTopLeft2);

      const arrowBottomRight1 = new ymaps.Polyline(
        [
          [56.014677, 92.855017],
          [56.014974, 92.854251],
          [56.014964, 92.854259],
        ],
        {},
        {
          strokeColor: '#FF0000',
          strokeWidth: 3,
          strokeOpacity: 0.8,
          hasArrow: true,
        }
      );
      const arrowBottomRight2 = new ymaps.Polyline(
        [
          [56.014974, 92.854251],
          [56.014973, 92.854274],
        ],
        {},
        {
          strokeColor: '#FF0000',
          strokeWidth: 3,
          strokeOpacity: 0.8,
          hasArrow: true,
        }
      );
      map.geoObjects.add(arrowBottomRight1);
      map.geoObjects.add(arrowBottomRight2);

      mapInstanceRef.current = map;
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="page contacts-page">
      <div className="contacts-page__content">
        <div className="contacts-page__section contacts-page__section--legal">
          <p className="contacts-page__company-name">
            Общество с ограниченной ответственностью <br /> «ИТЕО» Интерактивные решения <br /> (ООО «ИТЕО»)
          </p>
          <div className="contacts-page__legal-details">
            <p><b>ОГРН</b> 1142468052979</p>
            <p><b>ИНН</b> 2466276329 <b>КПП</b> 246601001</p>
            <p className='legal-details-main'><b>Основной вид экономической деятельности</b><br/> 62.01 Разработка компьютерного программного обеспечения</p>
          </div>
        </div>

        <div className="contacts-page__section contacts-page__section--address">
          <p>
            г. Красноярск,
            <br />
            ул. Красной Армии,
            <br />
            дом 10, корпус 3, офис 302
          </p>
        </div>

        <div className="contacts-page__section contacts-page__section--contacts">
          <a href="mailto:info@iteo.pro" className="contacts-page__link">
            info@iteo.pro
          </a>
          <div className="contacts-page__contacts-row">
            <a href="tel:+79138396909" className="contacts-page__link contacts-page__link--phone">
              +7 913 839 6909
            </a>
            {isMobile && (
              <a href="https://vk.com/iteo_krsk" target="_blank" className="vk-link">
                <img src={vkIcon} alt="VK" className='vk_logo'/>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="contacts-page__map-container">
        <div ref={mapRef} className="contacts-page__map" />
      </div>

      <ContactsAppendix />
    </div>
  );
};

export default ContactsPage;
