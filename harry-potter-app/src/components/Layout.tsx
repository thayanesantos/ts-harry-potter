import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-purple-700 p-4">
        <nav className="flex ">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/characters" className="hover:underline">Characters</Link>
          <Link to="/favorites" className="hover:underline">Favorites</Link>
        </nav>
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-100 text-center text-sm p-2">
        © 2025 Mischief Managed App
      </footer>
    </div>
  );
}
