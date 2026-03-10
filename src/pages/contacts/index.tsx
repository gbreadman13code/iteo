import './ContactsPage.scss';

import { useEffect, useState } from 'react';
import vkIcon from './assets/vk.png';
import ContactsAppendix from './ContactsAppendix';

const MOBILE_BREAKPOINT = 1200;

const ContactsPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        {isMobile ? (
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab49c49a06fed35ed2aa670949919d56ee84381faf3fad4ebc49abc2f58c5da48&amp;source=constructor" width="100%" height="472" frameBorder="0"></iframe>
        ) : (
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab49c49a06fed35ed2aa670949919d56ee84381faf3fad4ebc49abc2f58c5da48&amp;source=constructor" width="100%" height="472" frameBorder="0"></iframe>
        )}
      </div>

      <ContactsAppendix />
    </div>
  );
};

export default ContactsPage;
