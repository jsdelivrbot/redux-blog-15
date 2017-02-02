const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});


// Note: unable to use arrow functions, does not hash password
// On Save hook, encrypt password
userSchema.pre('save', function (next) {
  // Get access to user  model
  const user = this;

  // Generate salt then run callback
  bcrypt.genSalt(10, function (err, salt) {
    if (err) { return next(err); }

    // Hash our password using the salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) { return next(err); }

      // Overwrite plain text password with hashed password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = (candidatePassword, callback) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  })
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;