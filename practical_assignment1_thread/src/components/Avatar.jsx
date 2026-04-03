"use client";
export default function Avatar({ user, size = "md" }) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };
  return (
    <div className={`${sizes[size]} rounded-full overflow-hidden flex-shrink-0 bg-neutral-800`}>
      <img
        src={user?.avatar}
        alt={user?.displayName}
        className="w-full h-full object-cover"
        onError={(e) => { e.target.style.display = "none"; }}
      />
    </div>
  );
}