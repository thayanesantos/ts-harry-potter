import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type House = 'Gryffindor' | 'Slytherin' | 'Hufflepuff' | 'Ravenclaw' | null;

interface HouseContextType {
  favoriteHouse: House;
  setFavoriteHouse: (house: House) => void;
}

const HouseContext = createContext<HouseContextType | undefined>(undefined);

export const HouseProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteHouse, setFavoriteHouseState] = useState<House>(null);

  useEffect(() => {
    const saved = localStorage.getItem('favoriteHouse') as House;
    if (saved) setFavoriteHouseState(saved);
  }, []);

  const setFavoriteHouse = (house: House) => {
    localStorage.setItem('favoriteHouse', house ?? '');
    setFavoriteHouseState(house);
  };

  return (
    <HouseContext.Provider value={{ favoriteHouse, setFavoriteHouse }}>
      {children}
    </HouseContext.Provider>
  );
};

export const useHouse = () => {
  const context = useContext(HouseContext);
  if (!context) {
    throw new Error("useHouse must be used within a HouseProvider");
  }
  return context;
};
