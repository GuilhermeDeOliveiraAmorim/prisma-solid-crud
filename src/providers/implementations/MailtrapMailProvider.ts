import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer-smtp-transport";
import Mail from "nodemailer/lib/mailer";

class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: String("smtp.mailtrap.io"),
            port: 2525,
            auth: {
                user: "64b7335142b711",
                pass: "eb290a4017bc7b",
            },
        } as SMTPTransport.SmtpOptions);
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body,
        });
    }
}

export { MailtrapMailProvider };
