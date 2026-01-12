import "./ContactsPage.scss";

const ContactsPage = () => {
  return (
    <div className="page contacts-page">
      <div className="contacts-page__header-spacer" />

      <div className="contacts-page__content">
        <div className="contacts-page__section contacts-page__section--legal">
          <p className="contacts-page__company-name">
            Общество с ограниченной ответственностью «ИТЕО»
            <br />
            Интерактивные решения (ООО «ИТЕО»)
          </p>
          <div className="contacts-page__legal-details">
            <p>ОГРН 1142468052979</p>
            <p>ИНН 2466276329 КПП 246601001</p>
          </div>
        </div>

        <div className="contacts-page__section contacts-page__section--address">
          <p>
            г. Красноярск,
            <br />
            ул. Красной Армии,
            <br />
            дом 10, корп. 3, офис 302
          </p>
        </div>

        <div className="contacts-page__section contacts-page__section--contacts">
          <a href="mailto:info@iteo.pro" className="contacts-page__link">
            info@iteo.pro
          </a>
          <a
            href="tel:+79138396909"
            className="contacts-page__link contacts-page__link--phone"
          >
            +7 913 839 6909
          </a>
        </div>

        <div className="contacts-page__map-container">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab49c49a06fed35ed2aa670949919d56ee84381faf3fad4ebc49abc2f58c5da48&amp;source=constructor"
            width="100%"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      <div className="contacts-page__appendix">
        <div className="contacts-page__appendix-content">
          <h4 className="contacts-page__appendix-title">ПРИЛОЖЕНИЕ</h4>
          <div className="contacts-page__documents-list">
            <a href="#" className="contacts-page__document">
              <div className="contacts-page__document-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                    fill="#999999"
                  />
                  <path d="M14 2V8H20" fill="#CCCCCC" />
                  <path
                    d="M16 18H8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 14H8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="contacts-page__document-name">
                Виды деятельности
                <br />
                в области информационных
                <br />
                технологий.docx
              </span>
            </a>

            <a href="#" className="contacts-page__document">
              <div className="contacts-page__document-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                    fill="#999999"
                  />
                  <path d="M14 2V8H20" fill="#CCCCCC" />
                  <path
                    d="M16 18H8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 14H8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="contacts-page__document-name">
                Виды деятельности
                <br />
                в области информационных
                <br />
                технологий.docx
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
