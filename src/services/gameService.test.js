import * as gameService from "./gameService"

describe("Game service", () => {
    test("should put camels from hand to herd", () => {
        
    })

    test("should draw cards", () => {
        const deck = ["diamonds", "gold", "camel", "silver", "spice"]
        const cardsLeft = gameService.drawCards(deck, 3)
        expect(cardsLeft).toStrictEqual(["diamonds", "gold", "camel"])
        expect(cardsLeft.length).toEqual(3)
    })

    test("should init a deck", () => {
        const deck = gameService.initDeck()
        expect(deck.length).toBe(55 - 3)
        expect(deck.filter(card => card === "diamonds").length).toEqual(6)
        expect(deck.filter(card => card === "gold").length).toEqual(6)
        expect(deck.filter(card => card === "silver").length).toEqual(6)
        expect(deck.filter(card => card === "cloth").length).toEqual(8)
        expect(deck.filter(card => card === "spice").length).toEqual(8)
        expect(deck.filter(card => card === "leather").length).toEqual(10)
        expect(deck.filter(card => card === "camel").length).toEqual(11-3)
    })
})
