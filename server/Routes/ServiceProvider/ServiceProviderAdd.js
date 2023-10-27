import { Router } from "express";
const router = Router();
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
      if (chackotpexist) {
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
          console.log(req.body.email, OTP);
          await serviceproviderOtp.insertMany([
            { email: req.body.email, otp: OTP },
          ]);
          console.log(await serviceproviderOtp.find());
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
    });
  } else {
    res.send("Wrong OTP");
  }
});

export default router;
