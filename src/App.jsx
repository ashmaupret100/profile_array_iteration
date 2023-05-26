import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import getEachElement from "./getEachElement";

function App() {
  let profiles = [
    {
      name: "Alice",
      age: 25,
      hobbies: ["Reading", "Gardening", "Cooking"],
      bio: "Alice is a passionate learner who enjoys exploring new technologies.",
    },
    {
      name: "Bob",
      age: 27,
      hobbies: ["Playing guitar", "Hiking", "Photography"],
      bio: "Bob is a creative individual who loves expressing himself through music and capturing moments with his camera.",
    },
    {
      name: "Charlie",
      age: 23,
      hobbies: ["Painting", "Writing", "Soccer"],
      bio: "Charlie is an artist at heart, always seeking inspiration from various forms of art.",
    },
    {
      name: "David",
      age: 29,
      hobbies: ["Swimming", "Traveling", "Programming"],
      bio: "David is an adventurer who is passionate about coding and exploring the world at the same time.",
    },
  ];
  let each_profile = profiles.map(getEachElement);
  return (
    <>
      <div className="nav">
        <a href="Home">Home</a>
        <a href="Our Team">Our Team</a>
        <a href="Hire Team">Hire Team</a>
        <input type="text" placeholder="Search profile" />
      </div>
      <div className="main">{each_profile}</div>

      <div className="footer">Copywrite@2023</div>
    </>
  );
}

export default App;
