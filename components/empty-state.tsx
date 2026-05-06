export function EmptyState({ message }: { message: string }) {
  return (
    <div className="border border-dashed border-brass/25 bg-night/60 px-5 py-10 text-center text-sm text-pewter">
      {message}
    </div>
  );
}
