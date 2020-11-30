import React from 'react';
import myImage from "./pic.jpg";
import './App.css';
import ProfileComponent from "./profile/ProfileComponent"


const name = "Fayssel Gattoufi";
function App() {
  const handleName =  () => {
    alert(`${name}`)
  } ;
  return (
    <>
    <div className="App-header">
      <ProfileComponent
      fullName={name}
      bio="I'm a full stack js student"
      profession="Java Swing/fx Developer, Project Manager "
      nameAlert={handleName}
    >
      <div>
        <img src={myImage} alt="pic" width="200px" height="250px"/>
      </div>
    </ProfileComponent>
    </div>
    </>
  );
}

export default App;
