export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="rounded-lg border border-red-900/50 bg-red-950/30 p-6 text-center">
      <p className="text-sm font-medium text-red-400">Failed to load leads</p>
      <p className="mt-1 text-xs text-red-400/70">{message}</p>
    </div>
  );
}
