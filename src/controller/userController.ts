import {Request, Response} from "express";

class UserController {
    public async findUsers(req: Request, res: Response) {
        return res.json("Victor Roman");
    }

    public async createUser(req: Request, res: Response) {
        return res.json("Usuário buscado do banco: Victor Roman");
    }
}

export default new UserController();