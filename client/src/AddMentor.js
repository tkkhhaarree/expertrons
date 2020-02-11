import React, { Component } from "react";
import axios from "axios";

class AddMentor extends Component {
   constructor() {
      super();
      this.state = {
         name: "",
         email: ""
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
         name: this.state.name,
         email: this.state.email
      };

      const config = {
         headers: {
            "Content-Type": "application/json"
         }
      };

      axios.post("http://localhost:5000/mentor", body, config).then(res => {
         if (res) {
            window.open("/", "_self");
         } else {
            document.getElementById("error").innerHTML =
               "error in adding mentor.";
         }
      });
   }

   render() {
      return (
         <div>
            <form noValidate onSubmit={this.onSubmit}>
               Add Mentor here:
               <br />
               Name:
               <input
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.onChange}
               />
               <br />
               Email:
               <input
                  name="email"
                  id="email"
                  value={this.state.email}
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

export default AddMentor;
