import { useParams, Navigate } from 'react-router-dom';
import { services } from '@/entities/service/model/data';
import { ROUTES } from '@/shared/config/routes';
import './ServiceDetailsPage.scss';

const ServiceDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <Navigate to={ROUTES.SERVICES} replace />;
  }

  return (
    <div className="page service-details-page">
      <h1>{service.title}</h1>
      <div className="service-content">
        <p className="description">{service.description}</p>
        
        {/* Placeholder for service specific content */}
        <div className="placeholder-block">
            <span>Подробное описание услуги и этапов работы</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
