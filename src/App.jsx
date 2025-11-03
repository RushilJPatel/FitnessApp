import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Classes from './pages/Classes'
import Trainers from './pages/Trainers'
import Schedule from './pages/Schedule'
import Membership from './pages/Membership'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
