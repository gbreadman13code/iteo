import { Link } from 'react-router-dom';
import { services } from '@/entities/service/model/data';
import { ROUTES } from '@/shared/config/routes';
import './ServicesPage.scss';

const ServicesPage = () => {
  return (
    <div className="page services-page">
      <h1>Услуги</h1>
      <div className="services-page__list">
        {services.map((service) => (
          <Link 
            key={service.id} 
            to={ROUTES.SERVICE_DETAILS.replace(':id', service.id)}
            className="services-page__item"
          >
            <h2 className="services-page__item-title">{service.title}</h2>
            <p className="services-page__item-desc">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
