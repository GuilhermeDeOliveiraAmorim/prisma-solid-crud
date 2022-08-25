import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateAddressController {
    async handle(request: Request, response: Response) {
        const {
            street,
            zip_code,
            id_city,
            id_country,
            id_state,
            street_number,
        } = request.body;

        const address = await prismaClient.address.create({
            data: {
                street: street,
                zip_code: zip_code,
                id_city: id_city,
                id_country: id_country,
                id_state: id_state,
                street_number: street_number,
            },
        });

        return response.json(address);
    }
}
