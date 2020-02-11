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

const MentorData = props => {
   const [mentorinfo, setmentorinfo] = useState();
   async function fetchData() {
      const config = {
         headers: {
            "Content-Type": "application/json"
         }
      };
      const body = JSON.stringify({
         name: props.match.params.mentorname
      });
      const res = await axios.post(
         "http://localhost:5000/mentor/one",
         body,
         config
      );
      const mentordata = res.data.mentor;

      setmentorinfo(mentordata);
   }
   useEffect(() => {
      fetchData();
   }, []);

   if (mentorinfo != null) {
      return (
         <div>
            Name: {mentorinfo.name}
            <br />
            Email: {mentorinfo.email}
            <br />
            Tasks:
            <ul>
               {mentorinfo.tasks.map(m => {
                  return <li>{m}</li>;
               })}
            </ul>
            <Link to={mentorinfo.name + "/addtask"}>Add new task.</Link>
         </div>
      );
   } else {
      return "Loading";
   }
};

export default MentorData;
