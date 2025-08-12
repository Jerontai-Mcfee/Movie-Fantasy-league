import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LeagueDashboard from './pages/LeagueDashboard'
import DraftRoom from './pages/DraftRoom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/league/:id" element={<LeagueDashboard />} />
      <Route path="/draft/:leagueId" element={<DraftRoom />} />
    </Routes>
  )
}

export default App