import * as gameService from "./gameService"

describe("Game service", () => {
    test("should put camels from hand to herd", () => {
        const game = {
            _players: [
                { hand: ["camel", "camel", "gold"], camelsCount: 0, score: 0 },
                { hand: ["gold", "silver", "spice"], camelsCount: 0, score: 0 },
            ]
        }
        gameService.putCamelsFromHandToHerd(game)
        expect(game._players[0].hand).toEqual(["gold"])
        expect(game._players[1].hand).toEqual(["gold", "silver", "spice"])
        expect(game._players[0].camelsCount).toEqual(2)
        expect(game._players[1].camelsCount).toEqual(0)
    })

    test("should draw cards", () => {
        const deck = ["diamonds", "gold", "camel", "silver", "spice"]
        const drawnCards = gameService.drawCards(deck, 3)
        expect(drawnCards).toStrictEqual(["diamonds", "gold", "camel"])
        expect(drawnCards.length).toEqual(3)
    })

    test("should draw cards --primitive", () => {
        const deck = ["gold", "gold", "gold"]
        let drawnCards = gameService.drawCards(deck, 1)
        expect(drawnCards).toEqual(["gold"])
        expect(deck).toEqual(["gold", "gold"])
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


/* 
import * as gameService from "./gameService"

describe("Game service", () => {
  test("should init a deck", () => {
    const defaultDeck = gameService.initDeck()
    expect(defaultDeck.length).toBe(52)
    expect(defaultDeck.filter((card) => card === "diamonds").length).toBe(6)
    // etc
  })

  test("should draw cards", () => {
    const deck = ["camel", "diamonds", "gold"]
    const drawnCard = gameService.drawCards(deck, 1)
    expect(deck.length).toBe(2)
    expect(drawnCard).toStrictEqual(["camel"])
  })

  test("should put camels from hand to herd", () => {
    const game = {
      _players: [
        { hand: ["camel", "gold"], camelsCount: 0 },
        { hand: ["gold", "gold"], camelsCount: 0 },
      ],
    }
    gameService.putCamelsFromHandToHerd(game)
    expect(game._players[0].hand.length).toBe(1)
    expect(game._players[0].hand).toStrictEqual(["gold"])
    expect(game._players[0].camelsCount).toBe(1)

    expect(game._players[1].hand.length).toBe(2)
    expect(game._players[1].hand).toStrictEqual(["gold", "gold"])
    expect(game._players[1].camelsCount).toBe(0)
  })
})
*/