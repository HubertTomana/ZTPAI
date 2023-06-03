import Login from "./views/Login";
import Registration from "./views/Registration";
import Recipes from "./views/Recipes";
import Profile from "./views/Profile";
import AddRecipe from "./views/AddRecipe";
import {Route, Routes, Navigate} from 'react-router-dom';
function App() {

  const token = sessionStorage.getItem('token');
  const isAuthenticated = token !== null;

  return (
      <Routes>
        <Route 
          path="/" 
          element={<Login/>} > </Route>
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login/> : <Navigate to = "/recipes" /> } > </Route>
        <Route 
          path="/registration" 
          element={<Registration/>} > </Route>
        <Route 
          path="/recipes" 
          element={isAuthenticated ? <Recipes/> : <Navigate to="/login" />} > </Route>
        <Route 
          path="/profile" 
          element={isAuthenticated ? <Profile/> : <Navigate to="/login" />} > </Route>
        <Route 
          path="/addRecipe" 
          element={isAuthenticated ? <AddRecipe/> : <Navigate to="/login" />} > </Route>
      </Routes>
  );
}

export default App;
