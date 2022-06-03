import User from '../models/user.js';

export const getUser = async (req, res) => {
  res.send(req.user);
};

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    await user.save();
    res.status(201).send({user, token});
  } catch (error) {
    res.status(401).send({error: 'error'});
  }
};

export const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.send({status: 'success'});
  } catch (error) {
    res.send({status: 'fail'});
  }
};

export const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'password'];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    res.send({error: 'fail2'});
  }

  try {
    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });
    await req.user.save();
    res.send({status: 'success'});
  } catch (error) {
    res.send({error});
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.name, req.body.password);
    const token = await user.generateAuthToken();
    await user.save();
    res.cookie('jwt', token, {httpOnly:true, sameSite: 'None', secure:true, maxAge: 24*60*60*60*1000})
    res.send({user, token});
  } catch (error) {
    res.send({status: 'fail'});
  }
};

export const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return req.token !== token.token;
    });
    await req.user.save();
    res.send({status: 'success'});
  } catch (error) {
    res.send({status: 'fail'});
  }
};

export const logoutAllUser = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send({status: 'success'});
  } catch (error) {
    res.send({status: 'fail'});
  }
};
