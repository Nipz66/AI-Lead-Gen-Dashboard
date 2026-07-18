import ErrorState from "@/components/ErrorState";
import Header from "@/components/Header";
import LeadsTable from "@/components/LeadsTable";
import type { Lead } from "@/lib/types";

export const dynamic = "force-dynamic";

async function getLeads(): Promise<Lead[]> {
  const url = process.env.NEXT_PUBLIC_SHEETDB_URL;

  if (!url) {
    throw new Error("NEXT_PUBLIC_SHEETDB_URL is not set.");
  }

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`SheetDB request failed with status ${res.status}.`);
  }

  return res.json();
}

export default async function Home() {
  let leads: Lead[] = [];
  let errorMessage: string | null = null;

  try {
    leads = await getLeads();
  } catch (err) {
    errorMessage =
      err instanceof Error ? err.message : "Failed to load leads.";
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-10">
        {errorMessage ? (
          <ErrorState message={errorMessage} />
        ) : (
          <LeadsTable leads={leads} />
        )}
      </main>
    </div>
  );
}
