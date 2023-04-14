import "./App.css"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {TimeLine} from "./views/TimeLine";

export default function App(){
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TimeLine />}></Route>
        <Route path="timeline" element={<TimeLine/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}
