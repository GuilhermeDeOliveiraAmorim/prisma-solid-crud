import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateAddressController {
    async handle(request: Request, response: Response) {
        const { street, city, state, zip_code } = request.body;

        const address = await prismaClient.address.create({
            data: {
                street,
                city,
                state,
                zip_code,
            },
        });

        return response.json(address);
    }
}
