import express, { Router } from "express";
const router = Router();
import cookies from "cookie-parser";
const app = express();
app.use(cookies());
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer"; // email config
import serviceproviderOtp from "../../models/serviceproviderOtp.js";
import serviceprovider from "../../models/serviceproviderSchema.js";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
router.post("/sendotp", async (req, res) => {
  const chackotpexist = await serviceproviderOtp.find({
    email: req.body.email,
  });
  const OTP = Math.floor(100000 + Math.random() * 900000);
  const mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: "Sending Eamil For Otp Validation",
    text: `OTP:- ${OTP}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      // Handle the error.
    } else {
      if (chackotpexist.length !== 0) {
        const a = async () => {
          await serviceproviderOtp.updateOne(
            { _id: chackotpexist._id },
            { otp: OTP }
          );
          res.send("otp send");
        };
        a();
      } else {
        const b = async () => {
          await serviceproviderOtp.insertMany([
            { email: req.body.email, otp: OTP },
          ]);
          res.send("otp send");
        };
        b();
      }
    }
  });
});
router.post("/verifyotp", async (req, res) => {
  const foundotp = await serviceproviderOtp.findOne({
    email: req.body.formState.email,
  });
  if (foundotp.otp === req.body.otp) {
<<<<<<< HEAD
    const token = await preuser.generateAuthtoken();
    const { name, adress, phoneno, email, password, locations, categories } =
      req.body.formState;
    const data = {
      name,
      adress,
      phoneno,
      email,
      password,
      locations,
      categories,
      token,
      profilephoto: "",
    };
    await serviceprovider.insertMany([data]);

    res.status(200).json({
      message: "User Login Succesfully Done",
      serviceproviderToken: token,
=======
    var token = jwt.sign(
      { email: req.body.formstate.email },
      process.env.JWTKEY
    );
    bcrypt.hash(req.body.formState.password, 15, async function (err, hash) {
      await serviceprovider.insertMany([
        {
          name: req.body.formState.name,
          address: req.body.formState.adress,
          phoneno: req.body.formState.phoneno,
          email: req.body.formState.email,
          password: hash,
          locations: req.body.formState.locations,
          categories: req.body.formState.categories,
          token: token,
        },
      ]);
>>>>>>> 5423e8c2c3cfd009c064f9c80befcd626f951bb0
    });
    const options = {
      httpOnly: true,
      expires: new Date(Date.now() + 36000000),
    };
    res.cookie("serviceproviderToken", token, options);
    res.status(200).send("success");
  } else {
    res.send("Wrong OTP");
  }
});

export default router;
