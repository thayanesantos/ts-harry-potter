import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useFilteredCharacters } from "../hooks/character/useFilteredCharacters";
import { FilterButtons } from "../components/FilterButtons";
// import { Character } from "../types/character";
import { CharacterCard } from "../components/CharacterCard";


export default function CharactersPage() {

  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const [filter, setFilter] = useState<'all' | 'students' | 'staff' | 'favorites'>('all');

  const { characters, loading } = useFilteredCharacters(filter, favorites);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Characters</h1>
      <p>Here you'll find all characters, students, and staff.</p>
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      {loading ? (
        <p>Loading characters...</p>
      ) : (
          <div className="flex flex-wrap">
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
    </div>
  );
}