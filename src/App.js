import { Route, Routes } from "react-router-dom";
import AddItem from "./component/pages/AddItem";
import ViewItem from "./component/pages/ViewItem";
import ViewCart from "./component/pages/ViewCart";
import "./App.css";
import Header from "./component/Header";
import HomeScreen from "./component/HomeScreen";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/add-item" exact element={<AddItem />} />
          <Route path="/view-item" exact element={<ViewItem/>} />
          <Route path="/view-cart" exact element={<ViewCart/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
