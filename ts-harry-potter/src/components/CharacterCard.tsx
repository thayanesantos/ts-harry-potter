
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
    <div className="w-[27rem] md:w-[23rem] sm:w-[24rem] xs:w-[25rem] overflow-hidden rounded-xl flex flex-col">
      <div className={`flex rounded-xl items-center ${houseColorClass}`}>
        <img
          className="w-1/2 md:w-[10rem] sm:w-[10rem] h-[12rem] md:h-[10rem] border-4 rounded-xl"
          src={character.image}
          alt={character.name}
        />
        <div className="flex flex-col items-start justify-between mx-auto py-1">
          <h2 className="card-title uppercase text-left font-bold mb-2 ml-2">{character.name}</h2>
          <p className="card-subtitle ml-2">{character.house || 'No house assigned'}</p>
          <div className="flex flex-row my-5">
            <Link to={`/ts-harry-potter/characters/${character.id}`} className="font-medium text-white hover:border-black bg-slate-800 flex card-link border-1 border px-2 py-1 rounded mx-1">
              View details
            </Link>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={onToggleFavorite}
            />

          </div>
        </div>
      </div>
    </div>
  );
}