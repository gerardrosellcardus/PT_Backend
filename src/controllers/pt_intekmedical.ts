import express from "express";
import { usersFile } from "../helpers/const";
const fs = require('fs');

export const showUsers = async (req: express.Request, res: express.Response) => {
    try {
        let users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
        return res.status(200).json(users).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};