import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateCountryController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const country = await prismaClient.country.create({
            data: {
                name,
            },
        });

        return response.json(country);
    }
}
