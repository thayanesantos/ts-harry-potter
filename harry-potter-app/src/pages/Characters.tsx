import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useFilteredCharacters } from "../hooks/character/useFilteredCharacters";
import { FilterButtons } from "../components/FilterButtons";
import { CharacterCard } from "../components/CharacterCard";


export default function CharactersPage() {

  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const [filter, setFilter] = useState<'all' | 'students' | 'staff' | 'favorites'>('all');

  const { characters, loading } = useFilteredCharacters(filter, favorites);

  return (
    <>
      <div className="p-5 bg-gray-200 flex flex-col justify-between md:flex-row">
        <div className="mb-2">
          <h1 className="text-2xl font-bold">Characters</h1>
          <p>Here you'll find all characters, students, and staff.</p>
        </div>
        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      </div>
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <div className="flex flex-wrap gap-4 m-4 justify-evenly">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={isFavorite(character.name)}
              onToggleFavorite={() => toggleFavorite(character)}
            />
          ))}
        </div>
      )}
    </>
  );
}