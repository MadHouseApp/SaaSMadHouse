import logo from './assets/logo.png'
export default function HospitalityAISaaS() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Logo"
    className="h-30 w-30 rounded-xl"
  />

  <div>
    <h1 className="text-2xl font-bold tracking-tight">
      Mad House Stay Intelligence
    </h1>

    <p className="text-sm text-zinc-400">
      Qualidade do Anuncio IA + Concierge IA + Pricing Intelligence
    </p>
  </div>
</div>
            
            <p className="text-sm text-zinc-400">
              Concierge IA + Pricing Intelligence
            </p>
          </div>

          <nav className="hidden gap-3 md:flex text-sm text-zinc-250">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#concierge" className="hover:text-white transition">
              Qualidade do Anuncio
            </a>
            <a href="#concierge" className="hover:text-white transition">
              Concierge IA
            </a>
            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>
            <a href="#login" className="hover:text-white transition">
              Login
            </a>
          </nav>

          <button className="rounded-2xl border border-zinc-700 px-5 py-2 text-sm font-medium hover:bg-zinc-900 transition">
            Solicitar Demo
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-zinc-900"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_50%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-300">
              Plataforma de Inteligência para Locação por Temporada
            </div>

            <h2 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              IA para aumentar ocupação, automatizar atendimento e melhorar
              rentabilidade.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Conecte sua operação, acompanhe métricas financeiras e utilize
              Concierge IA para atender hóspedes automaticamente com contexto
              do imóvel e takeover humano.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-white px-6 py-3 font-medium text-black hover:opacity-90 transition">
                Começar Agora
              </button>

              <button className="rounded-2xl border border-zinc-700 px-6 py-3 font-medium hover:bg-zinc-900 transition">
                Ver Plataforma
              </button>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl shadow-indigo-950/20 backdrop-blur">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <p className="text-sm text-zinc-400">Dashboard Executivo</p>
                  <h3 className="text-xl font-semibold">
                    Performance Mensal
                  </h3>
                </div>

                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                  +18% Receita
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <MetricCard
                  title="Ocupação"
                  value="82%"
                  subtitle="+12% vs mês anterior"
                />

                <MetricCard
                  title="ADR Médio"
                  value="R$ 428"
                  subtitle="Pricing IA ativo"
                />

                <MetricCard
                  title="Lucro Previsto"
                  value="R$ 12.480"
                  subtitle="Após despesas"
                />

                <MetricCard
                  title="Mensagens IA"
                  value="1.284"
                  subtitle="73% automatizadas"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge IA */}
      <section id="concierge" className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
              Concierge IA
            </p>

            <h3 className="text-4xl font-bold tracking-tight">
              Atendimento inteligente com takeover humano
            </h3>

            <p className="mt-4 text-lg text-zinc-400">
              Automatize respostas no WhatsApp, centralize conversas e permita
              que operadores assumam atendimentos específicos quando necessário.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Conversas Ativas</p>
                  <h4 className="text-xl font-semibold">Inbox Concierge IA</h4>
                </div>

                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                  IA Online
                </div>
              </div>

              <div className="space-y-4">
                <ChatPreview
                  guest="João Martins"
                  message="Qual a senha do Wi-Fi?"
                  status="Respondido pela IA"
                />

                <ChatPreview
                  guest="Mariana Lopes"
                  message="Posso antecipar meu check-in?"
                  status="Aguardando operador"
                />

                <ChatPreview
                  guest="Carlos Lima"
                  message="Tem vaga de garagem?"
                  status="Respondido pela IA"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="mb-6">
                <p className="text-sm text-zinc-400">Fluxo Inteligente</p>
                <h4 className="text-xl font-semibold">
                  Como o Concierge funciona
                </h4>
              </div>

              <div className="space-y-5">
                <FlowItem
                  step="1"
                  title="Reserva sincronizada"
                  description="Sistema identifica imóvel e contexto do hóspede."
                />

                <FlowItem
                  step="2"
                  title="IA responde automaticamente"
                  description="Wi-Fi, check-in, garagem, regras e suporte básico."
                />

                <FlowItem
                  step="3"
                  title="Takeover humano"
                  description="Casos específicos podem ser assumidos manualmente."
                />

                <FlowItem
                  step="4"
                  title="Analytics operacional"
                  description="Acompanhe economia operacional e performance da IA."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
              Pricing Intelligence
            </p>

            <h3 className="text-4xl font-bold tracking-tight">
              Precificação baseada em lucro e performance real
            </h3>

            <p className="mt-4 text-lg text-zinc-400">
              Analise sazonalidade, custos operacionais, ocupação e demanda para
              maximizar receita e rentabilidade.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <PricingCard
              title="Preço Atual"
              value="R$ 420"
              description="Valor médio atual da diária"
            />

            <PricingCard
              title="Sugestão IA"
              value="R$ 560"
              description="Alta demanda para o período"
            />

            <PricingCard
              title="Lucro Previsto"
              value="R$ 8.940"
              description="Após despesas operacionais"
            />
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm text-zinc-400">Análise Financeira</p>
                <h4 className="mt-2 text-2xl font-semibold">
                  Custos operacionais considerados
                </h4>

                <div className="mt-8 space-y-4">
                  <CostRow label="Condomínio" value="R$ 850" />
                  <CostRow label="Energia" value="R$ 420" />
                  <CostRow label="Internet" value="R$ 120" />
                  <CostRow label="Limpeza" value="R$ 1.140" />
                  <CostRow label="Taxas Plataforma" value="R$ 980" />
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
                <p className="text-sm text-zinc-400">
                  Insight Inteligente
                </p>

                <h4 className="mt-2 text-2xl font-semibold">
                  Recomendação da IA
                </h4>

                <div className="mt-6 space-y-4 text-zinc-300 leading-7">
                  <p>
                    A demanda da região aumentou 22% devido a eventos próximos.
                  </p>

                  <p>
                    Concorrentes similares estão com ocupação acima de 85%.
                  </p>

                  <p>
                    A IA recomenda aumento de diária mantendo alta
                    rentabilidade.
                  </p>
                </div>

                <button className="mt-8 w-full rounded-2xl bg-white px-5 py-3 font-medium text-black hover:opacity-90 transition">
                  Aplicar Sugestão
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login */}
      <section id="login" className="py-24">
        <div className="mx-auto max-w-md px-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl shadow-black/20">
            <div className="mb-8 text-center">
              <h3 className="text-3xl font-bold">Acessar Plataforma</h3>
              <p className="mt-2 text-zinc-400">
                Entre para acompanhar operações, pricing e Concierge IA.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Senha
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-indigo-500"
                />
              </div>

              <button className="w-full rounded-2xl bg-white px-5 py-3 font-medium text-black hover:opacity-90 transition">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function MetricCard({ title, value, subtitle }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <p className="text-sm text-zinc-400">{title}</p>
      <h4 className="mt-2 text-3xl font-bold">{value}</h4>
      <p className="mt-2 text-sm text-zinc-500">{subtitle}</p>
    </div>
  )
}

function ChatPreview({ guest, message, status }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      <div className="flex items-center justify-between">
        <h5 className="font-medium">{guest}</h5>
        <span className="text-xs text-zinc-500">Agora</span>
      </div>

      <p className="mt-2 text-zinc-300">{message}</p>

      <p className="mt-3 text-sm text-indigo-400">{status}</p>
    </div>
  )
}

function FlowItem({ step, title, description }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 font-semibold">
        {step}
      </div>

      <div>
        <h5 className="font-semibold">{title}</h5>
        <p className="mt-2 text-zinc-400">{description}</p>
      </div>
    </div>
  )
}

function PricingCard({ title, value, description }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-zinc-400">{title}</p>
      <h4 className="mt-3 text-4xl font-bold">{value}</h4>
      <p className="mt-4 text-zinc-400">{description}</p>
    </div>
  )
}

function CostRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3">
      <span className="text-zinc-300">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
