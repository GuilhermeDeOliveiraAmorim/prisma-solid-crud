import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindUserAddressController {
    async handle(request: Request, response: Response) {
        const { id_user } = request.params;

        const user_address = await prismaClient.userAddress.findMany({
            where: {
                id_user,
            },
            select: {
                address: {
                    select: {
                        id: true,
                        street: true,
                        street_number: true,
                        zip_code: true,
                        city: true,
                        state: true,
                        country: true,
                    },
                },
            },
        });

        return response.json(user_address);
    }
}
