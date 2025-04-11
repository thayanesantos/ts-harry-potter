import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { generateId } from "../utils/generateId";

export default function Favorites() {
  const { favorites } = useFavorites();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Your Favorite Characters</h1>

      {favorites.length === 0 ? (
        <p>You haven't added characters to your favorites yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {favorites.map((character, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h2 className="font-semibold">{character.name}</h2>
              <p className="text-sm text-gray-600">{character.house}</p>
              <Link to={`/characters/${generateId(character.name)}`} className="text-blue-600 underline">
                View details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}