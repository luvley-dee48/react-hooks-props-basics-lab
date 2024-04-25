import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);


function App() {

  return (
    <div>
    <NavBar />
    <Home name={user.name} color={user.color} city={user.city}/>
    <About bio={user.bio}  linkedin={user.links.linkedin} />
    
  </div>
//     <div className="App">
//     <NavBar />
//     <Home name={name} city={city} color={color} />  {/* Pass props to Home */}
//     <About bio={bio}> {/* Pass bio prop to About */}
//       {/* About can render Links with passed down links */}
//       <Links github={github} linkedin={linkedin} />
//     </About>
//   </div>
);
}
export default App;
