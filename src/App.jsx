import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ListPage from './pages/ListPage'
import PersonalPage from './pages/PersonalPage'
import GroupPage from './pages/GroupPage'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage />}
          />
          <Route
            path="/list"
            element={<ListPage />}
          />
          <Route
            path="/personal"
            element={<PersonalPage />}
          />
          <Route
            path="/group"
            element={<GroupPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
