"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

export default function ClientLayout({ children }) {
  const { isLoggedIn } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/login";

  // Redirect to login if not logged in and not already on login page
  useEffect(() => {
    if (!isLoggedIn && !isLoginPage) {
      router.push("/login");
    }
  }, [isLoggedIn, isLoginPage]);

  // Show login page as-is
  if (isLoginPage) return <>{children}</>;

  // Don't render anything until logged in
  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen pt-14">
      <Navbar />
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex">
          <aside className="hidden lg:flex flex-col w-64 shrink-0 pr-8 pt-6 sticky top-14 h-[calc(100vh-56px)]">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Menu</p>
            <nav className="flex flex-col gap-1">
              {[{ href: "/", label: "Home" }, { href: "/search", label: "Search" }, { href: "/profile", label: "Profile" }].map(({ href, label }) => (
                <a key={href} href={href} className="px-3 py-2.5 rounded-xl text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </nav>
          </aside>
          <main className="flex-1 min-w-0 border-x border-neutral-900 pb-20 md:pb-6 max-w-[600px] mx-auto lg:mx-0">
            {children}
          </main>
          <aside className="hidden lg:block w-80 shrink-0 pl-8 pt-6">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Suggested</p>
            {[
              { name: "Yuki_16", display: "Karma Kelden Wangzom", img: "/avatars/yuki.jpeg"},
              { name: "Tenzin", display: "Tenzin Lhaden", img: "/avatars/tenzin.jpeg"},
              { name: "Jake", display: "Sim Jeayun", img: "/avatars/jake.jpeg"},
            ].map((u) => (
              <div key={u.name} className="flex items-center gap-3 py-3">
                <img src={u.img} className="w-9 h-9 rounded-full object-cover" alt={u.name}/>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">{u.name}</p>
                  <p className="text-xs text-neutral-500 truncate">{u.display}</p>
                </div>
                <button className="text-xs font-semibold border border-neutral-700 px-3 py-1.5 rounded-xl text-white hover:bg-neutral-900 transition-colors">Follow</button>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}