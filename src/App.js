import logo from "./logo.svg";
import "./App.css";
import Homepage from "./todolist/home/homedesign";
import { Createpage } from "./todolist/create/createpage";
import { Route, Routes } from "react-router-dom";
import { Updatepage } from "./todolist/update/updatepage";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Createpage />} path="create" />
        <Route element={<Updatepage />} path="update/:id" />
      </Routes>
    </div>
  );
}

export default App;
