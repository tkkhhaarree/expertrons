import React, { Component } from "react";
import axios from "axios";

class AddTask extends Component {
   constructor() {
      super();
      this.state = {
         task: ""
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }
   onSubmit(e) {
      e.preventDefault();
      const body = {
         name: this.props.match.params.mentorname,
         task: this.state.task
      };

      const config = {
         headers: {
            "Content-Type": "application/json"
         }
      };

      axios
         .post("http://localhost:5000/mentor/addtask", body, config)
         .then(res => {
            if (res) {
               window.open("/", "_self");
            } else {
               document.getElementById("error").innerHTML =
                  "error in adding task.";
            }
         });
   }

   render() {
      return (
         <div>
            <form noValidate onSubmit={this.onSubmit}>
               Add task here:
               <input
                  name="task"
                  id="task"
                  value={this.state.task}
                  onChange={this.onChange}
               />
               <br />
               <button type="submit">Add</button>
            </form>
            <p id="error"></p>
         </div>
      );
   }
}

export default AddTask;
