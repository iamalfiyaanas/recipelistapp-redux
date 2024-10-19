import { Route, Routes } from 'react-router-dom'
import './App.css'
import SearchRecipes from './pages/SearchRecipes'
import RecipeList from './pages/RecipeList'
import RecipeDetail from './pages/RecipeDetail'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
    
    <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/:id/recipe" element={<RecipeDetail />} />
        <Route path="/search" element={<SearchRecipes />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
