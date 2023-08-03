import request from "supertest"
import { app } from "../src/app"

describe("Route validation", () => {
    it("Route validation passing valid CPF", async () => {
        const response = await request(app).get("/api/Validate/33614352005")
        expect(response.statusCode).toEqual(200)
        expect(response.body).toStrictEqual({ message: "CPF 336.143.520-05 is valid!"})
    })

    it("Route validation passing invalid CPF", async () => {
        const response = await request(app).get("/api/Validate/27042586063")
        expect(response.statusCode).toEqual(400)
        expect(response.body).toStrictEqual({ message: "CPF 270.425.860-63 is invalid!"})
    })

    it("Route validation passing invalid character to CPF", async () => {
        const response = await request(app).get("/api/Validate/90496a19030")
        expect(response.statusCode).toEqual(400)
        expect(response.body).toStrictEqual({ message: "There is an invalid character in the param!"})
    })

    it("Route validation passing invalid amount to CPF", async () => {
        const response = await request(app).get("/api/Validate/904964190301")
        expect(response.statusCode).toEqual(400)
        expect(response.body).toStrictEqual({ message: "The number of characters is invalid!"})
    })

    it("Route validation passing valid CNPJ", async () => {
        const response = await request(app).get("/api/Validate/03849946000115")
        expect(response.statusCode).toEqual(200)
        expect(response.body).toStrictEqual({ message: "CNPJ 03.849.946/0001-15 is valid!"})
    })

    it("Route validation passing invalid CNPJ", async () => {
        const response = await request(app).get("/api/Validate/17621805000181")
        expect(response.statusCode).toEqual(400)
        expect(response.body).toStrictEqual({ message: "CNPJ 17.621.805/0001-81 is invalid!"})
    })

    it("Route validation passing invalid character to CNPJ", async () => {
        const response = await request(app).get("/api/Validate/93b97511000195")
        expect(response.statusCode).toEqual(400)
        expect(response.body).toStrictEqual({ message: "There is an invalid character in the param!"})
    })

    it("Route validation passing invalid amount to CNPJ", async () => {
        const response = await request(app).get("/api/Validate/074535484000173")
        expect(response.statusCode).toEqual(400)
        expect(response.body).toStrictEqual({ message: "The number of characters is invalid!"}) 
    })
})