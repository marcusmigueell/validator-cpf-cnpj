import { isCNPJ } from "../src/utils/index"

describe("Function Validation isCNPJ", () => {

    it("First test with valid CNPJ", async () => {
        const identifier: string = "33572695000135"
        const validate = isCNPJ(identifier)

        expect(validate).toBe(true)
    })

    it("Second test with valid CNPJ", async () => {
        const identifier: string = "54385097000127"
        const validate = isCNPJ(identifier)

        expect(validate).toBe(true)
    })

    it("First test with invalid CNPJ", async () => {
        const identifier: string = "33572795000135"
        const validate = isCNPJ(identifier)

        expect(validate).toBe(false)
    })

    it("Second test with invalid CNPJ", async () => {
        const identifier: string = "54385087000127"
        const validate = isCNPJ(identifier)

        expect(validate).toBe(false)
    })
})