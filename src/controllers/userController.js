const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response

//-----Part==01

const createUser = async function (req, res) {
  
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};
 
//------Part==02

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
    res.send({ status: true, data: token });
};

//------Part==03

const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if(!userDetails)
    return res.send({ status: false, msg: "There are no such user exists" });
    res.send({ status: true, data: userDetails });
};

//-------Part==04

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{age:25}});
  res,send({ status: "updated user", data: updatedUser});
};

//-------Part==05

let deleteUser = async function(req, res) {

  let userId = req.params.userId;
  let user = await userModel.findOneAndUpdate({ _id: userId }, {$set:{isDeleted:true}});
  res.send({ status: "deleted", data: user });
};

const postMessage = async function (req, res) {
  let message = req.body.message
  let user = await userModel.findById(req.params.userId)
  if(!user) return res.send({status: false, msg: 'No such user exists'})
  
  let updatedPosts = user.posts
  
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})


  return res.send({status: true, data: updatedUser})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser;
module.exports.postMessage=postMessage;