import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Favorites from "./pages/Favorites";
import CharacterDetails from "./pages/CharacterDetails";
import NotFound from "./pages/NotFound";
import './index.css'

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="characters" element={<Characters />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="characters/:id" element={<CharacterDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
