import MentorList from "./MentorList";
import MentorData from "./MentorData";
import AddTask from "./AddTask";
import AddMentor from "./AddMentor";
import React from "react";
import "./App.css";
import {
   BrowserRouter as Router,
   Route,
   Link,
   Redirect,
   Switch
} from "react-router-dom";

function App() {
   return (
      <Router>
         <Route exact path="/" component={MentorList} />
         <section>
            <Switch>
               <Route path="/addmentor" component={AddMentor} />
               <Route path="/:mentorname/addtask" component={AddTask} />
               <Route path="/:mentorname/" component={MentorData} />
            </Switch>
         </section>
      </Router>
   );
}

export default App;
