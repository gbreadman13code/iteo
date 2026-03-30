import { services } from '@/entities/service/model/data';
import './ServicesPage.scss';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="services-page__grid">
        {services.map((service) => (
          <div key={service.id} className="services-page__card">
            <h2 className="services-page__card-title">{service.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
