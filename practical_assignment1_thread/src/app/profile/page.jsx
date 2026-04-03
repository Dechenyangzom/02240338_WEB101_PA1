"use client";
import { useSearchParams } from "next/navigation";
import Avatar from "@/components/Avatar";
import ThreadCard from "@/components/ThreadCard";
import { users, getThreadsByUserId, formatCount } from "@/data/mockData";

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const userId = parseInt(searchParams.get("id") || "1");
  const user = users.find((u) => u.id === userId) || users[0];
  const userThreads = getThreadsByUserId(user.id);

  return (
    <div>
      <div className="px-4 pt-6 pb-4 border-b border-neutral-900">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h1 className="text-xl font-bold text-white">{user.displayName}</h1>
            <p className="text-neutral-400 text-sm mt-0.5">@{user.username}</p>
          </div>
          <Avatar user={user} size="xl" />
        </div>
        <p className="text-sm text-neutral-300 leading-relaxed mb-3">{user.bio}</p>
        <p className="text-sm text-neutral-500">
          <span className="font-semibold text-white">{formatCount(user.followers)}</span> followers
        </p>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 py-2 rounded-xl border border-neutral-700 text-sm font-semibold text-white hover:bg-neutral-900 transition-colors">
            Follow
          </button>
          <button className="flex-1 py-2 rounded-xl border border-neutral-700 text-sm font-semibold text-white hover:bg-neutral-900 transition-colors">
            Mention
          </button>
        </div>
      </div>
      <div className="flex border-b border-neutral-900">
        <button className="flex-1 py-3 text-sm font-semibold text-white border-b-2 border-white">Threads</button>
        <button className="flex-1 py-3 text-sm text-neutral-600">Replies</button>
        <button className="flex-1 py-3 text-sm text-neutral-600">Reposts</button>
      </div>
      {userThreads.map((thread) => (
        <ThreadCard key={thread.id} thread={thread} user={user} />
      ))}
    </div>
  );
}