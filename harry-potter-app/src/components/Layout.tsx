import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">{children}
        <Outlet />
      </main>
      <Footer />
    </div>

  );
}
