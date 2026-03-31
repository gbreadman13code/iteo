import './ContactsAppendix.scss';

import itActivitiesDoc from '@/assets/docs/it_activities.docx';
import trademarkCertDoc from '@/assets/docs/trademark_certificate.pdf';
import techStackDoc from '@/assets/docs/tech_stack.docx';
import logo from '@/assets/contactsLogo.png';

const DocumentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#999999" />
    <path d="M14 2V8H20" fill="#CCCCCC" />
    <path d="M16 18H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 14H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const documents = [
  {
    href: techStackDoc,
    name: 'Технологический стек разработки интерактивных решений',
    ext: '.docx',
  },
  {
    href: itActivitiesDoc,
    name: 'Виды деятельности<br/>в области информационных технологий',
    ext: '.docx',
  },
  {
    href: trademarkCertDoc,
    name: 'Свидетельство<br/>на товарный знак',
    ext: '.pdf',
  },
];

const ContactsAppendix = () => {
  return (
    <div className="contacts-appendix">
      <div className="contacts-appendix__wrapper">
        <div className="contacts-appendix__content">
          <h4 className="contacts-appendix__title">ПРИЛОЖЕНИЕ</h4>
          <div className="contacts-appendix__documents-list">
            {documents.map((doc, index) => (
              <a key={index} href={doc.href} target="_blank" className="contacts-appendix__document">
                <div className="contacts-appendix__document-icon">
                  <DocumentIcon />
                </div>
                <span className="contacts-appendix__document-name" dangerouslySetInnerHTML={{__html: doc.name}} />
              </a>
            ))}
          </div>
        </div>
        <div className="contacts-appendix__logo">
          <img src={logo} alt="ITEO" />
          <p>
            Товарный знак зарегистрирован. <br />
            №1100861, №1075775, №1074627
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactsAppendix;
