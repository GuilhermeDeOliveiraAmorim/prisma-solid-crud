import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindAllUsersController {
    async handle(request: Request, response: Response) {
        const user = await prismaClient.user.findMany({
            include: {
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
