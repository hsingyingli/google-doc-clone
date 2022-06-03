import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import 'dotenv/config'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  }, 
  password: {
    type: String,
    require: true,
    unique: true,
    minlength: 8,
    trum: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error("Password can not contain password")
      }
    }
  },
  tokens: [
    {
      token: {
        type: String,
        require: true
      }
    }
  ]
})

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
}


userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {_id: user._id.toString()}, 
    process.env.ACCESS_TOKEN_SECRET, 
    {expiresIn: '7d'},
  )
  user.tokens = user.tokens.concat({token});


  return token;
}

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(
      user.password,
      parseInt(process.env.HASH_SALT),
    );
  }
  next();
});

userSchema.statics.findByCredentials = async function(name, password) {
  const user = await User.findOne({name});

  if (user === null) {
    throw new Error()
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error()
  }
  return user
}

const User = mongoose.model('users', userSchema, 'users')

export default User;
