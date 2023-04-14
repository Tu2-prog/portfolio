import "./App.css"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {TimeLine} from "./views/TimeLine";
import { Home } from "./views/Home";

export default function App(){
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TimeLine />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="timeline" element={<TimeLine/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}
