import Login from "./views/Login";
import Registration from "./views/Registration";
import Recipes from "./views/Recipes";
import Profile from "./views/Profile";
import AddRecipe from "./views/AddRecipe";
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/registration" element={<Registration/>}/>
        <Route exact path="/recipes" element={<Recipes/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/addRecipe" element={<AddRecipe/>}/>
      </Routes>
  );
}

export default App;
