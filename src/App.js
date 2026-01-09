import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<LoginPage/>}/>
        <Route path="/register"element={<Register/>}/>
        <Route path="/dashboard"element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
