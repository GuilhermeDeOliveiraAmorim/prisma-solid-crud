import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateUserAddressController {
    async handle(request: Request, response: Response) {
        const { id_user, id_address } = request.body;

        const userAddress = await prismaClient.userAddress.create({
            data: {
                id_user: id_user,
                id_address: id_address,
            },
        });

        return response.json(userAddress);
    }
}
