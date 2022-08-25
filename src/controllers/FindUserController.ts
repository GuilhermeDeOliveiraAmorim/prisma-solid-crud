import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const user = await prismaClient.user.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                password: true,
                UserAddress: {
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
                },
            },
        });

        return response.json(user);
    }
}
