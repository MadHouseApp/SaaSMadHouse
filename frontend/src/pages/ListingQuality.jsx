import { Link } from "react-router-dom"
import { useState } from "react"

export default function ListingQuality() {

  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleAnalyze = async () => {

    console.log("BOTÃO CLICADO")

    if (!url) {
      alert("Cole um link do Airbnb")
      return
    }

    try {

      setLoading(true)

      console.log("ENVIANDO PARA BACKEND...")

      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
        }),
      })

      console.log("RESPOSTA RECEBIDA")

      const data = await response.json()

      console.log("DADOS:", data)

      setResult(data)

    } catch (error) {

      console.error("ERRO FRONT:", error)

      alert("Erro ao analisar anúncio")

    } finally {

      setLoading(false)

    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-10 text-white">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-5xl font-bold">
            IA Qualidade de Anúncio
          </h1>

          <p className="mt-3 text-zinc-400">
            Analise anúncios Airbnb utilizando inteligência artificial.
          </p>
        </div>

        <Link
          to="/dashboard"
          className="rounded-2xl border border-zinc-700 px-5 py-3 hover:bg-zinc-900 transition"
        >
          Voltar Dashboard
        </Link>

      </div>

      {/* Box principal */}
      <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

        <h2 className="text-3xl font-bold">
          Cole o link do anúncio
        </h2>

        <p className="mt-3 text-zinc-400">
          Nossa IA irá analisar título, descrição, fotos, amenities e potencial de conversão.
        </p>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row">

          <input
            type="text"
            placeholder="https://www.airbnb.com/rooms/..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-950 px-6 py-5 text-lg outline-none focus:border-indigo-500"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="rounded-2xl bg-white px-8 py-5 font-semibold text-black hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Analisando..." : "Analisar Anúncio"}
          </button>

        </div>

      </div>

      {/* Resultado Backend */}
      {result && (

        <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

          <h2 className="text-3xl font-bold">
            Resultado da API
          </h2>

          <div className="mt-8 space-y-6">

            <div>
              <p className="text-zinc-500">
                Título capturado:
              </p>

              <p className="mt-2 text-lg">
                {result?.data?.title || "Título não encontrado"}
              </p>
            </div>

            <div>
              <p className="text-zinc-500">
                Status:
              </p>

              <p className="mt-2 text-lg">
                {result.success ? "Análise concluída" : "Erro"}
              </p>
            </div>

          </div>

        </div>

      )}

      {/* Resultado Mock */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <ScoreCard
          title="Score Geral"
          value="87"
          subtitle="Excelente performance"
        />

        <ScoreCard
          title="Título"
          value="92"
          subtitle="SEO muito forte"
        />

        <ScoreCard
          title="Fotos"
          value="78"
          subtitle="Pode melhorar"
        />

        <ScoreCard
          title="Descrição"
          value="84"
          subtitle="Boa conversão"
        />

      </div>

    </div>
  )
}

function ScoreCard({ title, value, subtitle }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h3 className="mt-4 text-5xl font-bold">
        {value}
      </h3>

      <p className="mt-3 text-zinc-500">
        {subtitle}
      </p>

    </div>
  )
}