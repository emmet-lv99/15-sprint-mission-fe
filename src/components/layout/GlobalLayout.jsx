import AppProviders from '@/providers/AppProviders';
import Footer from './Footer';
import Navigation from './Navigation';

function GlobalLayout({ children }) {
  return (
    <AppProviders>
      <Navigation />
      {children}
      <Footer />
    </AppProviders>
  );
}

export default GlobalLayout;
