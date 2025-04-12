import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCharacters } from "../../services/harryPotterAPI";
import { Character } from "../../types/character";

function normalizeName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function useCharacterDetails() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const data = await getAllCharacters();
        const found = data.find((char: Character) => normalizeName(char.name) === id);
        setCharacter(found || null);
      } catch (error) {
        console.error("Error loading character details:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCharacter();
  }, [id]);

  return { character, loading };
}
