const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀")
})

app.post("/analyze", (req, res) => {

  const { url } = req.body

  console.log("URL recebida:", url)

  res.json({
    success: true,
    message: "Análise iniciada com sucesso",
    url,
  })

})

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000")
})