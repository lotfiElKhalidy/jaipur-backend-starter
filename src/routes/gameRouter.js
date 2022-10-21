import express from "express"
import * as gameService from "../services/gameService"
import * as databaseService from "../database"

const router = express.Router()

// Listen to POST /games
router.post("/", function (req, res) {
  if (!req.body.name) {
    return res.status(400).send("Missing name parameter")
  }
  const newGame = gameService.createGame(req.body.name)
  res.status(201).json({ id: newGame.id, name: newGame.name })
})

// Get /games
router.get("/", function (req, res) {
  const listGame = databaseService.getGames()
  res.status(200).json(listGame)
})

export default router
