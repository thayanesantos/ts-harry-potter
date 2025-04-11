
import { Link } from 'react-router-dom';
import { FavoriteButton } from './FavoriteButton';
import { getHouseColor } from '../utils/getHouseColor';

interface Character {
  id: string;
  name: string;
  image: string;
  house: string;
}

interface CharacterCardProps {
  character: Character;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function CharacterCard({ character, isFavorite, onToggleFavorite }: CharacterCardProps) {
  const houseColorClass = getHouseColor(character.house);
  return (
    <div className="bg-gray mx-auto w-[28rem] overflow-hidden rounded-xl">
      <div className={`bg-gray-100 flex border-indigo-500 rounded-xl ${houseColorClass}`}>
        <img
          className="w-1/3 h-[12rem] border-4 border-indigo-500 rounded-xl"
          src={character.image}
          alt={character.name}
        />
        <div className="bg-gray-100 flex flex-col items-center">
            <h2 className="card-title uppercase">{character.name}</h2>
            <p className="card-subtitle">{character.house || 'No house assigned'}</p>
            <Link to={`/characters/${character.id}`} className="flex card-link">
              View details
            </Link>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={onToggleFavorite}
            />
        </div>
      </div>
    </div>
  );
}