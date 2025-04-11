// import { Link, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getAllCharacters } from "../services/harryPotterAPI";
// import { Character } from "../types/character";

// function normalizeName(name: string) {
//   return name.toLowerCase().replace(/\s+/g, '-');
// }

// export default function CharacterDetails() {
//   const { id } = useParams<{ id: string }>();
//   const [character, setCharacter] = useState<Character | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchCharacter() {
//       try {
//         const data = await getAllCharacters();
//         const found = data.find((char: Character) => normalizeName(char.name) === id);
//         setCharacter(found || null);
//       } catch (error) {
//         console.error("Error loading character details:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchCharacter();
//   }, [id]);

//   if (loading) return <p>Loading details...</p>;
//   if (!character) return <p>Character not found.</p>;

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <Link
//         to="/characters"
//         className="inline-block mb-4 text-blue-600 hover:underline"
//       >
//         ← Back to Characters
//       </Link>
//       <h1 className="text-2xl font-bold mb-4">{character.name}</h1>
//       <img src={character.image} alt={character.name} className="w-full h-64 object-cover rounded mb-4" />
//       <ul className="space-y-2 text-sm">
//         <li><strong>House:</strong> {character.house || 'N/A'}</li>
//         <li><strong>Species:</strong> {character.species}</li>
//         <li><strong>Gender:</strong> {character.gender}</li>
//         <li><strong>Date of Birth:</strong> {character.dateOfBirth || 'Unknown'}</li>
//         <li><strong>Ancestry:</strong> {character.ancestry || 'Unknown'}</li>
//         <li><strong>Patronus:</strong> {character.patronus || 'Unknown'}</li>
//         <li><strong>Actor:</strong> {character.actor || 'Unknown'}</li>
//       </ul>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useCharacterDetails } from "../hooks/character/useCharacterDetails";

export default function CharacterDetails() {
  const { character, loading } = useCharacterDetails();

  if (loading) return <p>Loading details...</p>;
  if (!character) return <p>Character not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <Link to="/characters" className="inline-block mb-4 text-blue-600 hover:underline">
        ← Back to Characters
      </Link>
      <h1 className="text-2xl font-bold mb-4">{character.name}</h1>
      <img src={character.image} alt={character.name} className="w-full h-64 object-cover rounded mb-4" />
      <ul className="space-y-2 text-sm">
        <li><strong>House:</strong> {character.house || 'N/A'}</li>
        <li><strong>Species:</strong> {character.species}</li>
        <li><strong>Gender:</strong> {character.gender}</li>
        <li><strong>Date of Birth:</strong> {character.dateOfBirth || 'Unknown'}</li>
        <li><strong>Ancestry:</strong> {character.ancestry || 'Unknown'}</li>
        <li><strong>Patronus:</strong> {character.patronus || 'Unknown'}</li>
        <li><strong>Actor:</strong> {character.actor || 'Unknown'}</li>
      </ul>
    </div>
  );
}
