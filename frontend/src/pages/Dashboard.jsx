import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">

      {/* Sidebar */}
      <aside className="w-72 border-r border-zinc-800 bg-zinc-900/50 p-6">

        <div>
          <h1 className="text-2xl font-bold">
            Stay Intelligence
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Plataforma IA para Short Stay
          </p>
        </div>

        {/* Menu */}
        <nav className="mt-10 space-y-3">

          <Link
            to="/dashboard"
            className="block rounded-2xl bg-zinc-800 px-4 py-3 font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/dashboard/listing-quality"
            className="block rounded-2xl px-4 py-3 text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
          >
            IA Qualidade de Anúncio
          </Link>

          <button className="block w-full rounded-2xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-800 hover:text-white transition">
            Concierge IA
          </button>

          <button className="block w-full rounded-2xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-800 hover:text-white transition">
            Pricing Inteligente
          </button>

          <button className="block w-full rounded-2xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-800 hover:text-white transition">
            Analytics
          </button>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-10">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">
              Dashboard
            </h2>

            <p className="mt-2 text-zinc-400">
              Visão geral da plataforma
            </p>
          </div>

          <button className="rounded-2xl border border-zinc-700 px-5 py-3 hover:bg-zinc-900 transition">
            Upgrade Pro
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <DashboardCard
            title="Análises IA"
            value="128"
            subtitle="+12% este mês"
          />

          <DashboardCard
            title="Score Médio"
            value="84"
            subtitle="Excelente performance"
          />

          <DashboardCard
            title="Anúncios Monitorados"
            value="32"
            subtitle="3 novos hoje"
          />

          <DashboardCard
            title="Ocupação Média"
            value="82%"
            subtitle="Acima do mercado"
          />
        </div>

        {/* Área Principal */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 lg:col-span-2">
            <h3 className="text-2xl font-bold">
              Insights da IA
            </h3>

            <div className="mt-8 space-y-5">

              <InsightCard
                title="Alta demanda na região"
                description="A procura por imóveis similares aumentou 18% nos últimos 7 dias."
              />

              <InsightCard
                title="Melhoria recomendada"
                description="Anúncios com self check-in possuem maior conversão."
              />

              <InsightCard
                title="Sugestão de otimização"
                description="Adicionar fotos externas pode melhorar performance do anúncio."
              />

            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold">
              Atividade Recente
            </h3>

            <div className="mt-8 space-y-4 text-sm text-zinc-400">

              <p>✔ Análise concluída</p>

              <p>✔ Novo anúncio monitorado</p>

              <p>✔ Pricing atualizado</p>

              <p>✔ IA gerou sugestões</p>

            </div>
          </div>

        </div>

      </main>
    </div>
  )
}

function DashboardCard({ title, value, subtitle }) {
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
      <h4 className="text-lg font-semibold">
        {title}
      </h4>

      <p className="mt-3 leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  )
}