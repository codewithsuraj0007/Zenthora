import bcrypt from "bcryptjs";
import expressError from "./expressError.js";

const hashPass = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
if (!hashedPassword) {
    throw new expressError("Password hashing failed", 400);
  }
  return hashedPassword;
};

export default hashPass;