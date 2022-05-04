const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  username: { type: String },
  email: { type: String, required: true, unique: true, index: { unique: true } },
  password: { type: String },
  workspaces: { type: Array, default: [] },
  activity: { type: Array, default: [] },
  isGoogle: { type: Boolean, default: false },
  googleId: { type: String, default: null },
});

userSchema.pre("save", function (next) {
  if (!this.password || !this.isModified("password")) return next();

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next();
    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword =  async function (password) {
  const hashedPassword = this.password;

  const match = await bcrypt.compare(password, hashedPassword);


    if(match) {
        return true
    }
    else{
      return false
    }
  
};

const User = mongoose.model("User", userSchema);

module.exports = User;
