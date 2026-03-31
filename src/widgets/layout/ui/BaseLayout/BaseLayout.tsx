import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header/ui/Header/Header';
import { ContactsAppendix } from '@/widgets/contacts-appendix';
import './BaseLayout.scss';

export const BaseLayout = () => {
  return (
    <div className="base-layout">
      <Header />
      <main className="base-layout__main">
        <Outlet />
      </main>
      <ContactsAppendix />
    </div>
  );
};
