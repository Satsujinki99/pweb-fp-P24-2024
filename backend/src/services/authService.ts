import User from "../models/user";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

class AuthService {
  async login(authData: {
    username: string;
    password: string;
  }): Promise<{ user: { username: string; role: string }; token: string }> {
    const user = await User.findOne({ username: authData.username });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(
      authData.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Incorrect password");
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    return { user: { username: user.username, role: user.role }, token };
  }
}

export default new AuthService();
