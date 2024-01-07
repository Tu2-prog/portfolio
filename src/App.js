import "./App.css"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {TimeLine} from "./views/TimeLine";
import { Home } from "./views/Home";
import { Contact } from "./views/Contact";
import { Projects } from "./views/Projects";
import { SKills } from "./views/Skills";
import { AppReviewCrawler } from "./views/projects/AppReviewCrawler";
import { PersonalProjects } from "./views/projects/PersonalProjects";
import { ClickQT } from "./views/projects/ClickQT";
import { SpammyFilter } from "./views/projects/SpammyFilter";
import { Evoter } from "./views/projects/VotingApp";

export default function App(){
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cv" element={<TimeLine/>}></Route>
        <Route path="contact_me" element={<Contact/>}></Route>
        <Route path="projects" element={<Projects/>}></Route>
        <Route path="skill_set" element={<SKills/>}></Route>
        <Route path="projects/app_review_crawler" element={<AppReviewCrawler/>}></Route>
        <Route path="projects/personal" element={<PersonalProjects/>}></Route>
        <Route path="projects/clickqt" element={<ClickQT/>}></Route>
        <Route path="projects/spammy" element={<SpammyFilter/>}></Route>
        <Route path="projects/evoter" element={<Evoter/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}
