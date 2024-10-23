import { User } from "../models/userModel.js";
import { validateUser } from "../schema/userSchema.js";
import bdcrypt from 'bcrypt'

export class userRepository {
    static async register({ username, password }) {

        const validateFlag = validateUser({ username, password })
        if (!validateFlag.success) throw new Error(validateFlag.error.message)

        const user = await User.findOne({ username })

        if (user) throw new Error("User already exists")

        const hashedPassword = await bdcrypt.hash(password, 10)

        const newUser = await User.create({ username, password: hashedPassword })

        return newUser

    }
    
    static async login({ username, password }) {
        const validateFlag = validateUser({ username, password })

        if (!validateFlag.success) throw new Error(validateFlag.error.message)

        const user = await User.findOne({ username })

        if (!user) throw new Error("User not found")

        const isvalid = await bdcrypt.compare(password, user.password)

        if (!isvalid) throw new Error("Invalid password")
        const { password: _, ...userWithoutPassword } = user._doc

        return userWithoutPassword
    }
}