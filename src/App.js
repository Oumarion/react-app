import React from "react";
import "./App.css";

function App() {
  const pets = [
    {
      name: "Dolly",
      type: "cat",
      description: "Dolly is funny and loves to be around people.",
      skills: ["fetch", "play dead", "roll over"],
      image: "http://res.cloudinary.com/atapas/image/upload/v160",
    },
    {
      name: "Molly",
      type: "cat",
      description: "Molly is a sweet and cuddly cat stretch a lot.",
      skills: ["play dead", "meow", "purr"],
      image: "http://res.cloudinary.com/atapas/image/upload/v160",
    },
  ];
  return (
    <div className="App">
      <h1>My Pets</h1>
      <ul className="container">
        {pets.map((pet, index) => {
          return (
            <li key={index}>
              <h1>{pet.name}</h1>
              <p>{pet.description}</p>
              <image
                src={pet.image}
                alt={pet.name}
                width="200px"
                height="200px"
              />

              <ul className="skills">
                {pet.skills.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// <button onClick={App}>Take a shot</button>;

// function Football() {
//   const shoot = () => {
//     alert("Take a shot");
//   };
//   return <button onClick={shoot}>Take a shot</button>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Football);


// Arrow Function: Sending the event object manually:
// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//     /*
//   'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//   }

//   return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);

export default App;
``