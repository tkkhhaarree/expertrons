import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
   BrowserRouter as Router,
   Route,
   Link,
   Redirect,
   Switch
} from "react-router-dom";

const MentorList = () => {
   const [mentors, setMentors] = useState();
   async function fetchData() {
      const config = {
         headers: {
            "Content-Type": "application/json"
         }
      };
      const res = await axios.get("http://localhost:5000/mentor", config);
      const mentordata = res.data.mentor_list;
      const listitems = mentordata.map(m => {
         return (
            <li>
               <Link to={m.name}>{m.name}</Link>
            </li>
         );
      });
      setMentors(listitems);
   }

   useEffect(() => {
      fetchData();
   }, []);

   if (mentors != null) {
      return (
         <div>
            <h3>Mentors list:</h3>
            <ul>{mentors}</ul>
            <Link to="/addmentor">Add new mentor</Link>
         </div>
      );
   } else {
      return "Loading";
   }
};

export default MentorList;
