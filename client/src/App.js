import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import { onLoginStatusChange, me } from "./modules/authManager";
import { Spinner } from "reactstrap";


// console.log("REMINDER TO MYSELF: New videos show up as posted by (user2) no matter if user1 posts it.")

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [userProfile, setUserProfile] = useState(null);
console.log("REMINDER TO MYSELF: New videos show up as posted by (user2) no matter if user1 posts it.")
  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      me().then(setUserProfile);
    } else {
      setUserProfile(null);
    }
  }, [isLoggedIn]);

  if (isLoggedIn === null) {
    // Until we know whether or not the user is logged in or not, just show a spinner
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} userProfile={userProfile} />
        <ApplicationViews isLoggedIn={isLoggedIn}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

