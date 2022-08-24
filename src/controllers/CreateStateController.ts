import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateStateController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const state = await prismaClient.state.create({
            data: {
                name,
            },
        });

        return response.json(state);
    }
}
