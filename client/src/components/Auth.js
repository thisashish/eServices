// Auth.js
// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// Auth.js
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app'; // Import firebase/app (compat version)
import 'firebase/compat/auth'; // Import firebase/auth (compat version)
import './css/Auth.css';

const Auth = () => {
  const [user, setUser] = useState(null);

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional


  useEffect(() => {
    // Initialize Firebase with the configuration obtained from Firebase Console
    const firebaseConfig = {
        apiKey: "AIzaSyCufC-gaBBCcsuUjPk6fy3hPdj12rg4w8o",
        authDomain: "clone-b83c8.firebaseapp.com",
        projectId: "clone-b83c8",
        storageBucket: "clone-b83c8.appspot.com",
        messagingSenderId: "1013939311180",
        appId: "1:1013939311180:web:eec864135798d8e32edae9",
        measurementId: "G-15QDFN74TZ"
      };

    firebase.initializeApp(firebaseConfig);

    // Set up Firebase Auth State Listener
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleSignOut} className="google-sign-in-button">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="google-sign-in-button-container">
          <button onClick={handleSignInWithGoogle} className="google-sign-in-button">
            Sign In with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
