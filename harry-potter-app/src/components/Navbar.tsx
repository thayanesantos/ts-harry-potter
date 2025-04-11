import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-widest text-gold">Hogwarts App</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li><Link to="/" className="hover:text-white transition">Home</Link></li>
        <li><Link to="/characters" className="hover:text-white transition">Characters</Link></li>
        <li><Link to="/favorites" className="hover:text-white transition">Favorites</Link></li>
      </ul>
    </nav>
  );
}
