import request from "supertest"
import app from "../app"
import lodash from "lodash"
import * as db from "../database"

// Prevent writing tests game to filesystem using src/database/__mocks__/index.js implementation
jest.mock("../database")

// Prevent shuffle for tests
jest.mock("lodash")
lodash.shuffle.mockImplementation(x => x)

afterEach(() => {
    db.clear()
})

describe("Game router", () => {
    test("should create a game", async () => {
        const response = await request(app).post("/games").send({ name: "test" })
        expect(response.status).toEqual(201)
        
    })

    test("should return 400 if name not provided", async () => {
        const response = await request(app).post("/games").send({})
        // TODO
    })
  
    test("should return 400 if name is empty", async () => {
        const response = await request(app).post("/games").send({ name: "" })
        // TODO
    })
})