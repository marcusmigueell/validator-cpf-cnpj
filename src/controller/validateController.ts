import { Request, Response } from "express"
import { countCharacter, existCharacter, format } from "../utils"
import ValidateService from "../services/validateService"

export default class ValidateController {
    async handle(req: Request, res: Response) {

        const { identifier } = req.params
        
        if(existCharacter(identifier))
            return res.status(400).json({ message: "There is an invalid character in the param!" })

        if(countCharacter(identifier))
            return res.status(400).json({ message: "The number of characters is invalid!" })

        var result = new ValidateService().validate(identifier)

        if(!result)
            return res.status(400).json({ message: `${identifier.length == 11 ? 'CPF' : 'CNPJ'} ${format(identifier)} is invalid!` })

        return res.status(200).json({ message: `${identifier.length == 11 ? 'CPF' : 'CNPJ'} ${format(identifier)} is valid!` })
    }
}