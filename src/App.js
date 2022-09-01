import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
