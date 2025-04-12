import { createContext, useContext, useState, ReactNode } from 'react';
import { Character } from '../types/character';


interface FavoritesContextType {
  favorites: Character[];
  toggleFavorite: (character: Character) => void;
  isFavorite: (name: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const toggleFavorite = (character: Character) => {
    const exists = favorites.some(fav => fav.name === character.name);
    if (exists) {
      setFavorites(favorites.filter(fav => fav.name !== character.name));
    } else {
      setFavorites([...favorites, character]);
    }
  };

  const isFavorite = (name: string) => {
    return favorites.some(fav => fav.name === name);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites needs into FavoritesProvider');
  }
  return context;
};
