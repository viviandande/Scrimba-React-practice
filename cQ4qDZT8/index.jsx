import React from 'react';
import ReactDOM from 'react-dom/client';

//write JSX to create an element that has the following properties
// -a <ul> element with an id of about-me
// -inside the unordered list, three <li> elements with class of about-me item that display text about this user
const user = {
name: "Ian",
position: "Lead Instructor",
hometown: "Suttons Bay, MI"
}

//const element = (<p> Replace Me With Your Code</p>)
const element = (
  <ul id = "about-me">
    <li className = "about-me-item">Name: {user.name}</li>
    <li className = "about-me-item">Position: {user.position}</li>
    <li className = "about-me-item">Hometown: {user.hometown}</li>
  </ul>
)



ReactDOM.createRoot(document.getElementById('root')).render(element);