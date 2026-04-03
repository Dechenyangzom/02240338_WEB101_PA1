"use client";
import { useState } from "react";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import ThreadCard from "@/components/ThreadCard";
import { threads, users, getUserById } from "@/data/mockData";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase().trim();

  const filteredUsers = q ? users.filter((u) =>
    u.username.toLowerCase().includes(q) || u.displayName.toLowerCase().includes(q)) : [];
  const filteredThreads = q ? threads.filter((t) =>
    t.replyToId === null && t.content.toLowerCase().includes(q)) : [];

  return (
    <div>
      <div className="sticky top-14 bg-black z-10 px-4 py-3 border-b border-neutral-900">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text" value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-neutral-900 text-sm text-white outline-none placeholder:text-neutral-600"
          />
        </div>
      </div>

      {!q && (
        <div className="px-4 py-3">
          <p className="text-xs font-semibold text-neutral-500 mb-3 uppercase tracking-wider">Suggested</p>
          {users.map((user) => (
            <Link key={user.id} href={`/profile?id=${user.id}`} className="flex items-center gap-3 py-3 border-b border-neutral-900">
              <Avatar user={user} size="sm" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-white">{user.username}</p>
                <p className="text-xs text-neutral-500 truncate">{user.bio}</p>
              </div>
              <button className="text-xs font-semibold border border-neutral-700 px-4 py-1.5 rounded-xl text-white hover:bg-neutral-900 transition-colors">
                Follow
              </button>
            </Link>
          ))}
        </div>
      )}

      {q && (
        <div>
          {filteredUsers.map((user) => (
            <Link key={user.id} href={`/profile?id=${user.id}`} className="flex items-center gap-3 px-4 py-3 border-b border-neutral-900">
              <Avatar user={user} size="sm" />
              <div>
                <p className="font-semibold text-sm text-white">{user.username}</p>
                <p className="text-xs text-neutral-500">{user.displayName}</p>
              </div>
            </Link>
          ))}
          {filteredThreads.map((thread) => (
            <ThreadCard key={thread.id} thread={thread} user={getUserById(thread.userId)} />
          ))}
          {filteredUsers.length === 0 && filteredThreads.length === 0 && (
            <p className="text-center text-neutral-600 py-16 text-sm">No results for &quot;{query}&quot;</p>
          )}
        </div>
      )}
    </div>
  );
}