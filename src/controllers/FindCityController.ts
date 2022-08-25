import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindCityController {
    async handle(request: Request, response: Response) {
        const { search } = request.params;

        const city = await prismaClient.city.findMany({
            where: {
                name: {
                    contains: search,
                },
            },
        });

        return response.json(city);
    }
}
