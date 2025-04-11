// src/components/FavoriteButton.tsx

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
}

export function FavoriteButton({ isFavorite, onToggle }: FavoriteButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`text-sm px-2 py-1 rounded transition ${
        isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
      }`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '★' : '☆'}
    </button>
  );
}
