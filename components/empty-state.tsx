export function EmptyState({ message }: { message: string }) {
  return (
    <div className="bg-night/35 px-6 py-12 text-center text-sm text-pewter">
      {message}
    </div>
  );
}
