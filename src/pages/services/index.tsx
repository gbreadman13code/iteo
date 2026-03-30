import { services } from '@/entities/service/model/data';
import './ServicesPage.scss';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="services-page__grid">
        {services.map((service) => (
          <div key={service.id} className="services-page__card">
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="services-page__card-img"
              />
            )}
            <div className="services-page__card-content">
              <div className="services-page__card-body">
                <h2 className="services-page__card-title">{service.title}</h2>
                {service.description && (
                  <p className="services-page__card-desc">{service.description}</p>
                )}
              </div>
              {service.price && (
                <span className="services-page__card-price">{service.price}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
