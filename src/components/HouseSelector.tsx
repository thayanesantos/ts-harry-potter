import { useHouse } from "../hooks/useHouseFavorite";

const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'] as const;

export default function HouseSelector() {
  const { setFavoriteHouse } = useHouse();

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {houses.map((house) => (
        <button
          key={house}
          onClick={() => setFavoriteHouse(house)}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          {house}
        </button>
      ))}
    </div>
  );
}
