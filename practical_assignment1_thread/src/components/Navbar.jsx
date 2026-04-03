"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HomeIcon({ active }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "white" : "none"} stroke={active ? "white" : "#666"} strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
function SearchIcon({ active }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "#666"} strokeWidth={active ? "2.5" : "2"}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
}
function EditIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
}
function ProfileIcon({ active }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "white" : "none"} stroke={active ? "white" : "#666"} strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
}

const navItems = [
  { path: "/", Icon: HomeIcon },
  { path: "/search", Icon: SearchIcon },
  { path: "/profile", Icon: ProfileIcon },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      {/* Desktop top bar */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-14 items-center justify-between px-8 border-b border-neutral-900 bg-black">
        <span className="font-bold text-white text-xl">Threads</span>
        <nav className="flex items-center gap-10">
          {navItems.map(({ path, Icon }) => (
            <Link key={path} href={path}>
              <Icon active={pathname === path} />
            </Link>
          ))}
        </nav>
        <EditIcon />
      </header>

      {/* Mobile bottom bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-14 flex items-center justify-around border-t border-neutral-900 bg-black">
        {navItems.map(({ path, Icon }) => (
          <Link key={path} href={path} className="p-2">
            <Icon active={pathname === path} />
          </Link>
        ))}
        <button className="p-2"><EditIcon /></button>
      </nav>
    </>
  );
}