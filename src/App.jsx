import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ListPage from './pages/ListPage'
import PersonalPage from './pages/PersonalPage'
import GroupPage from './pages/GroupPage'
import './App.css'
import LoginProgressPage from './pages/LoginProgressPage'
import CreateGroupModal from './components/Modal/CreateGroupModal/CreateGroupModal'
import ToDoPage from './pages/ToDoPage'

function App() {
  return (
    <div>
      <CreateGroupModal />
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />
        <Route
          path="/loginProgressPage"
          element={<LoginProgressPage />}
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
          path="/group/:code"
          element={<GroupPage />}
        />
        <Route
          path="/group/:code/todo"
          element={<ToDoPage />}
        />
      </Routes>
    </div>
  )
}
function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default Root
