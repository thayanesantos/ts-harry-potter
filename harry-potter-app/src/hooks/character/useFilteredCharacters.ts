import { useEffect, useState } from "react";
// import { getAllCharacters, getStudents, getStaff } from "@/services/harryPotterAPI";
// import { generateIdFromName } from "@/utils/generateIdFromName";
import { getAllCharacters, getStudents, getStaff } from "../../services/harryPotterAPI";
import { generateId } from "../../utils/generateId";
import { Character } from "../../types/character";

type FilterType = 'all' | 'students' | 'staff' | 'favorites';

export const useFilteredCharacters = (filter: FilterType, favorites: Character[]) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCharactersByFilter = async (): Promise<Character[]> => {
    switch (filter) {
      case 'students':
        return await getStudents();
      case 'staff':
        return await getStaff();
      case 'favorites': {
        const allCharacters = await getAllCharacters();
        return allCharacters.filter((char: { name: string; }) =>
          favorites.some((fav) => fav.name === char.name)
        );
      }
      case 'all':
      default:
        return await getAllCharacters();
    }
  };

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      try {
        const data = await fetchCharactersByFilter();
        const charactersWithId = data.map((char) => ({
          ...char,
          id: generateId(char.name),
        }));
        setCharacters(charactersWithId);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [filter, favorites]);

  return { characters, loading };
};
