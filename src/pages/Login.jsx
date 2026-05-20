import { useNavigate } from "react-router-dom"

export default function Login() {

  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">

      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h1 className="text-4xl font-bold">
          Entrar
        </h1>

        <p className="mt-3 text-zinc-400">
          Acesse sua plataforma de inteligência.
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            placeholder="Sua senha"
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 outline-none focus:border-indigo-500"
          />

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full rounded-2xl bg-white px-5 py-4 font-semibold text-black hover:opacity-90"
          >
            Entrar
          </button>

        </div>

      </div>

    </div>
  )
}