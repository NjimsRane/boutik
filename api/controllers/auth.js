import { json } from "express";
import { db } from "../connect.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register = (req, res) => {

    const q = "SELECT * FROM users WHERE name = ?";
    db.query(q, [req.body.name], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409), json("User already exist!");

        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(name, email , password) VALUES(?)";
        const values = [req.body.name, req.body.email, hashedPassword];

        db.query(q, [values], (err, data) => {
            if (err) throw err;
            return res.status(200).json('User has been created!');
        });
    });

};

const login = (req, res) => {
    const q = "SELECT * FROM users WHERE email =?";

    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        const comparePassword = bcryptjs.compareSync(req.body.password, data[0].password);
        if (!comparePassword) return res.status(400).json("Wrong password or User name");

        const token = jwt.sign({ id: data[0].id }, 'secretKey');
        const { password, ...others } = data[0];

        res.cookie('accessToken', token, {
            httpOnly: true
        }).status(200).json(others);
    });
};

const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User has beeen logged out");
};




export { register, login, logout };