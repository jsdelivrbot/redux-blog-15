const User = require('../models/user');

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(email, password);
  // See if a user with a given email exists
  User.findOne({email}, (err, existingUser) => {
    if (err) return next(err);

    // If a user with email does exist, return error
    if (existingUser) res.status(422).send({ error: 'Email is in use' });

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save((err) => {
      if (err) return next(err);

      // Respond to request indicating the user was created
      res.json(user);
    });
    
  });

}