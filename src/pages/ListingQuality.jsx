import { Link } from "react-router-dom"

export default function ListingQuality() {
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

        {/* Input */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row">

          <input
            type="text"
            placeholder="https://www.airbnb.com/rooms/..."
            className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-950 px-6 py-5 text-lg outline-none focus:border-indigo-500"
          />

          <button className="rounded-2xl bg-white px-8 py-5 font-semibold text-black hover:opacity-90 transition">
            Analisar Anúncio
          </button>

        </div>
      </div>

      {/* Resultado */}
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

      {/* Insights */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 lg:col-span-2">

          <h3 className="text-3xl font-bold">
            Insights da IA
          </h3>

          <div className="mt-8 space-y-5">

            <InsightCard
              title="Título pouco emocional"
              description="Adicionar benefícios emocionais no título pode aumentar taxa de clique."
            />

            <InsightCard
              title="Foto de capa"
              description="A imagem principal não destaca os diferenciais do imóvel."
            />

            <InsightCard
              title="Amenities faltantes"
              description="Informar Wi-Fi rápido e espaço de trabalho pode melhorar conversão."
            />

          </div>

        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="text-3xl font-bold">
            Recomendações
          </h3>

          <div className="mt-8 space-y-4 text-zinc-400">

            <p>
              ✔ Melhorar foto principal
            </p>

            <p>
              ✔ Adicionar diferenciais no título
            </p>

            <p>
              ✔ Destacar self check-in
            </p>

            <p>
              ✔ Melhorar descrição emocional
            </p>

          </div>

        </div>

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

function InsightCard({ title, description }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

      <h4 className="text-xl font-semibold">
        {title}
      </h4>

      <p className="mt-3 leading-7 text-zinc-400">
        {description}
      </p>

    </div>
  )
}