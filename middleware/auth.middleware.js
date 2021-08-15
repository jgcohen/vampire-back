import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

export const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "orihulk17", async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        let user = await UserModel.findById(decodedToken.user._id);

        res.locals.user = user;
        console.log("User id = "+decodedToken.user._id);
        
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

export const requiereAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "orihulk17", async (err, decodedToken) => {
      if (err) {
          console.log(err)
      }else{
          console.log("User id = "+decodedToken.user._id)
      }
    });
  }else {
      console.log('No Token')
  }
};
