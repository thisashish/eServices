const UserModel = require("../models/userSchema");
const admin = require("firebase-admin");

exports.signup = async (req, res) => {
  const idToken = req.body.idToken;

  try {
    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    const user = await UserModel.findOne({ uid: decodedToken.uid });

    if (!user) {
        // If the user doesn't exist, create a new user in your database
        const newUser = new UserModel({
          uid: decodedToken.uid,
          email: decodedToken.email, // You can add more fields as needed
          // ...other user data
        });
  
        await newUser.save();
      }
  
  

    // Create or retrieve user in your database with decodedToken.uid
    // Implement user creation or retrieval logic here

    // Respond with a success message or user data
    res.status(200).json({ message: "Signup successful", user: { id: uid,  email:email }  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Signup failed" });
  }
};

exports.login = async (req, res) => {
  const idToken = req.body.idToken;

  try {
    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // Retrieve user from your database using decodedToken.uid
    // Implement user retrieval logic here

    // Respond with a success message or user data
    res.status(200).json({ message: "Login successful", user: { id: uid,  email: email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
};

exports.logout = (req, res) => {
  // Implement logout logic here

  // Respond with a success message
  res.status(200).json({ message: "Logout successful" });
};
