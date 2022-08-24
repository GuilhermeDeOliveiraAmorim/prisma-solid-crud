import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const user = await prismaClient.user.findFirst({
            where: {
                id,
            },
            include: {
                UserAddress: true,
            },
        });

        return response.json(user);
    }
}
