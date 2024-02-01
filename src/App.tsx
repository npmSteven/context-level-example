import './App.css'
import { Level } from './components/Level'
import { LevelProvider } from './contexts/LevelContext'

function App() {
  return (
    <LevelProvider>
      <Level />
    </LevelProvider>  
  )
}

export default App
