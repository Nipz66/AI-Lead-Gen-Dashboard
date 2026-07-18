import IntentBadge from "@/components/IntentBadge";
import type { Lead } from "@/lib/types";

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  if (leads.length === 0) {
    return (
      <p className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-center text-neutral-400">
        No leads found yet.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-800">
      <table className="min-w-full divide-y divide-neutral-800">
        <thead className="bg-neutral-900">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Email
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-400">
              AI Summary
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Intent
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-800 bg-neutral-950">
          {leads.map((lead, i) => (
            <tr key={`${lead.Email}-${i}`} className="hover:bg-neutral-900/60">
              <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-neutral-100">
                {lead.Name}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-300">
                {lead.Email}
              </td>
              <td className="max-w-md px-4 py-3 text-sm text-neutral-400">
                {lead.AI_Summary || "—"}
              </td>
              <td className="px-4 py-3 text-sm">
                <IntentBadge intent={lead.Intent} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
