import { isCNPJ, isCPF } from "../utils"

export default class ValidateService {
    validate(data: string): boolean {
        
        if(data.length === 14)
            return isCNPJ(data)
        else
            return isCPF(data)
    }
}