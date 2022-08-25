import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindCitiesController {
    async handle(request: Request, response: Response) {
        const city = await prismaClient.city.findMany({});

        return response.json(city);
    }
}
