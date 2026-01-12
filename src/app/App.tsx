import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import ProjectsPage from '@/pages/projects';
import ProjectDetailsPage from '@/pages/project-details';
import ServicesPage from '@/pages/services';
import ServiceDetailsPage from '@/pages/service-details';
import ContactsPage from '@/pages/contacts';
import './app.scss'; // Optional local styles if needed

import { BaseLayout } from '@/widgets/layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
          <Route path={ROUTES.PROJECT_DETAILS} element={<ProjectDetailsPage />} />
          <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
          <Route path={ROUTES.SERVICE_DETAILS} element={<ServiceDetailsPage />} />
          <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
