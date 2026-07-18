import Header from "@/components/Header";

const COLUMNS = ["Name", "Email", "AI Summary", "Intent"];

export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <div className="grid grid-cols-4 gap-4 bg-neutral-900 px-4 py-3">
            {COLUMNS.map((col) => (
              <div
                key={col}
                className="h-3 w-20 animate-pulse rounded bg-neutral-700"
              />
            ))}
          </div>
          <div className="divide-y divide-neutral-800">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-4 px-4 py-4">
                <div className="h-4 w-24 animate-pulse rounded bg-neutral-800" />
                <div className="h-4 w-32 animate-pulse rounded bg-neutral-800" />
                <div className="h-4 w-full animate-pulse rounded bg-neutral-800" />
                <div className="h-5 w-16 animate-pulse rounded-full bg-neutral-800" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
