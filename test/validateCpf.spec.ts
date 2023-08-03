import { isCPF } from "../src/utils"

describe("Function Validation ValidateCPF", () => {

    it("First test with valid CPF", async () => {
        const identifier: string = "33614352005"
        const validate = isCPF(identifier)

        expect(validate).toBe(true)
    })

    it("Second test with valid CPF", async () => {
        const identifier: string = "90496419030"
        const validate = isCPF(identifier)

        expect(validate).toBe(true)
    })

    it("First test with invalid CPF", async () => {
        const identifier: string = "27042586063"
        const validate = isCPF(identifier)

        expect(validate).toBe(false)
    })

    it("Second test with invalid CPF", async () => {
        const identifier: string = "59120676070"
        const validate = isCPF(identifier)

        expect(validate).toBe(false)
    })
})