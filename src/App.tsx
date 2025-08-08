import Home from './pages/Home/Home.tsx';
import { MoviesProvider } from './context/MoviesContext/MoviesContext.tsx';
import './App.css'

function App() {

  return (
    <MoviesProvider>
        <Home />
    </MoviesProvider>
  )
}

export default App
