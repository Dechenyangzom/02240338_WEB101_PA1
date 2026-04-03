import ThreadCard from "@/components/ThreadCard";
import { threads, getUserById } from "@/data/mockData";

export default function HomePage() {
  const feedThreads = threads.filter((t) => t.replyToId === null);
  return (
    <div>
      <div className="px-4 py-3 border-b border-neutral-900">
        <h1 className="text-base font-bold text-center text-white">Threads</h1>
      </div>
      {feedThreads.map((thread) => (
        <ThreadCard key={thread.id} thread={thread} user={getUserById(thread.userId)} />
      ))}
    </div>
  );
}