const INTENT_STYLES: Record<string, string> = {
  high: "bg-green-500/15 text-green-400 ring-1 ring-inset ring-green-500/30",
  medium:
    "bg-yellow-500/15 text-yellow-400 ring-1 ring-inset ring-yellow-500/30",
  low: "bg-red-500/15 text-red-400 ring-1 ring-inset ring-red-500/30",
};

const DEFAULT_STYLE =
  "bg-neutral-500/15 text-neutral-400 ring-1 ring-inset ring-neutral-500/30";

export default function IntentBadge({ intent }: { intent: string }) {
  const style = INTENT_STYLES[intent?.toLowerCase()] ?? DEFAULT_STYLE;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${style}`}
    >
      {intent || "Unknown"}
    </span>
  );
}
