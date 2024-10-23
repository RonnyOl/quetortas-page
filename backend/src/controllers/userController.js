import { userRepository } from "../services/userService.js";
import jwt from 'jsonwebtoken'


export class UserController {
    static async register(req, res) {
        const { username, password } = req.body;
        console.log(req.body)
        try {
            const id = await userRepository.register({ username, password })

            res.json({ id })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    static async login(req, res) {
        const { username, password } = req.body;
        try {
            const user = await userRepository.login({ username, password })
            const token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1h' })
        
            res.cookie('access_token', token,{
                httpOnly: false,
            })
            res.json({ user });
            
        } catch (error) {
            res.status(500).json({ error:error.message })
        }
    }

    static async profile(req, res) {
        const token = req.cookies.access_token
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' })
        }

        try {
            const data = jwt.verify(token, process.env.SECRET_KEY)
            res.json(data)
        } catch (error) {
            res.status(401).json({ message: 'access no authorized' })
        }
    }

}