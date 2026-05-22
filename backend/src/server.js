const express = require("express")
const cors = require("cors")

const { scrapeAirbnb } = require("./services/scraper/airbnb")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀")
})

app.post("/analyze", async (req, res) => {

  try {

    const { url } = req.body

    console.log("URL recebida:", url)

    const result = await scrapeAirbnb(url)

    console.log("RESULTADO:", result)

    res.json({
      success: true,
      data: result,
    })

  } catch (error) {

    console.error("ERRO:")
    console.error(error)

    res.status(500).json({
      success: false,
      error: "Erro ao analisar anúncio",
    })

  }

})

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000")
})

setInterval(() => {}, 1000)