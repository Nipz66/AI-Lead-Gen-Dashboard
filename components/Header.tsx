export default function Header() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="text-2xl font-bold text-neutral-50">
          AI Lead-Gen Dashboard
        </h1>
        <p className="mt-1 text-sm text-neutral-400">
          Leads captured, summarized, and scored automatically via an n8n
          workflow powered by the Gemini API.
        </p>
      </div>
    </header>
  );
}
