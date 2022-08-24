import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateCityController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const city = await prismaClient.city.create({
            data: {
                name,
            },
        });

        return response.json(city);
    }
}
