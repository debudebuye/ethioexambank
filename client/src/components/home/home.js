// Home.js
import React from "react";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/firebase"; // Import the sign-out function

const Home = () => {
  const { userLoggedIn } = useAuth();

  const handleSignOut = async () => {
    await doSignOut();
    // After signing out, you can manually navigate to the login page
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {userLoggedIn ? (
        <div>
          <p>You're logged in as: {userLoggedIn.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
};

export default Home;
