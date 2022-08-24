import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindAllUsersController {
    async handle(request: Request, response: Response) {
        const user = await prismaClient.user.findMany({
            include: {
                UserAddress: true,
            },
        });

        return response.json(user);
    }
}
