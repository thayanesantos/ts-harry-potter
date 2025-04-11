import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FavoritesProvider } from './context/FavoritesContext.tsx'
import { HouseProvider } from './hooks/useHouseFavorite.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesProvider>
      <HouseProvider>
        <App />
      </HouseProvider>
    </FavoritesProvider>
  </StrictMode>,
)
