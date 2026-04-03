import Link from "next/link";
import Avatar from "@/components/Avatar";
import ActionBar from "@/components/ActionBar";

export default function ThreadCard({ thread, user, showReplyLine = false }) {
  return (
    <article className="flex gap-3 px-4 py-4 border-b border-neutral-900">
      {/* Left: avatar + reply line */}
      <div className="flex flex-col items-center">
        <Link href={`/profile?id=${user.id}`}>
          <Avatar user={user} size="md" />
        </Link>
        {showReplyLine && (
          <div className="w-px flex-1 mt-2 bg-neutral-700 min-h-[24px]" />
        )}
      </div>

      {/* Right: content */}
      <div className="flex-1 min-w-0 pb-1">
        <div className="flex items-center justify-between mb-1">
          <Link href={`/profile?id=${user.id}`} className="font-semibold text-sm text-white hover:underline">
            {user.username}
            {user.verified && (
              <span className="ml-1 inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full text-white" style={{ fontSize: 9 }}>✓</span>
            )}
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500">{thread.timestamp}</span>
            <button className="text-neutral-600 hover:text-neutral-300 text-lg leading-none">···</button>
          </div>
        </div>
        <Link href={`/thread/${thread.id}`}>
          <p className="text-sm text-neutral-200 leading-relaxed">{thread.content}</p>
        </Link>
        <ActionBar thread={thread} />
      </div>
    </article>
  );
}