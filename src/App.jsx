import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route
            path="home"
            element={<HomePage />}
          />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
