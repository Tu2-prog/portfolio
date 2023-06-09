import "./App.css"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {TimeLine} from "./views/TimeLine";
import { Home } from "./views/Home";
import { Contact } from "./views/Contact";
import { Projects } from "./views/Projects";

export default function App(){
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cv" element={<TimeLine/>}></Route>
        <Route path="contact_me" element={<Contact/>}></Route>
        <Route path="projects" element={<Projects/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}
