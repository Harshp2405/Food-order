import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Sidebar } from "./Components/Sidebar";
import { Add } from "./Pages/Add";
import { List } from "./Pages/List";
import { Order } from "./Pages/Order";
import { User } from "./Pages/User";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <div className="appcontent">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/list" element={<List/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
          <Route path="/user" element={<User/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
