import { useHouse } from "../hooks/useHouseFavorite";

const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'] as const;

export default function HouseSelector() {
  const { favoriteHouse, setFavoriteHouse } = useHouse();

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {houses.map((house) => (
        <button
          key={house}
          onClick={() => setFavoriteHouse(house)}
          className={`px-4 py-2 rounded ${favoriteHouse === house ? 'bg-yellow-500 text-white' : 'bg-gray-200'
            }`}
        >
          {house}
        </button>
      ))}
    </div>
  );
}
