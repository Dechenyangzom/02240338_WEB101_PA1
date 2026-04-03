"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      login();           // ← marks user as logged in
      router.push("/");  // ← redirects to home
    }, 1500);
  };

  const rings = [
    { text: "THREADS", color: "#E91E8C", size: 160, top: "-40px", left: "50%", rotate: -20 },
    { text: "SAY MORE", color: "#111", size: 140, top: "-30px", left: "5%", rotate: 15 },
    { text: "THREADS", color: "#7C3AED", size: 130, top: "-20px", right: "5%", rotate: -10 },
    { text: "SAY MORE", color: "#111", size: 150, top: "60px", left: "-2%", rotate: 25 },
    { text: "THREADS", color: "#F97316", size: 120, top: "20px", right: "20%", rotate: 10 },
    { text: "SAY MORE", color: "#111", size: 145, top: "80px", right: "-2%", rotate: -15 },
    { text: "THREADS", color: "#E91E8C", size: 135, top: "65px", left: "30%", rotate: 5 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-auto" style={{ backgroundColor: "#000" }}>
      <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: "220px" }}>
        {rings.map((ring, i) => <RingBadge key={i} {...ring} />)}
      </div>
      <div className="flex-1 flex flex-col items-center px-6 pb-16" style={{ marginTop: "-20px" }}>
        <div className="w-full max-w-sm">
          <div className="mb-2">
            <input
              type="text" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username, phone or email"
              className="w-full px-4 py-3.5 rounded-xl text-sm outline-none"
              style={{ backgroundColor: "#1a1a1a", color: "#fff", border: "1px solid #2a2a2a" }}
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3.5 rounded-xl text-sm outline-none"
              style={{ backgroundColor: "#1a1a1a", color: "#fff", border: "1px solid #2a2a2a" }}
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold" style={{ color: "#888" }}>
              Forgot?
            </button>
          </div>
          <button
            onClick={handleSubmit} disabled={isLoading}
            className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            {isLoading ? "Logging in..." : <>Log in with Instagram <InstagramIcon /></>}
          </button>
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px" style={{ backgroundColor: "#2a2a2a" }} />
            <span className="text-xs" style={{ color: "#555" }}>or</span>
            <div className="flex-1 h-px" style={{ backgroundColor: "#2a2a2a" }} />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm" style={{ color: "#888" }}>Or scan the QR code to get the app</p>
            <QRCode />
          </div>
          <p className="text-center text-sm mt-6" style={{ color: "#555" }}>
            Don&apos;t have an account?{" "}
            <span className="font-semibold" style={{ color: "#fff", cursor: "pointer" }}>Sign up</span>
          </p>
        </div>
      </div>
      <footer className="text-center pb-8 px-4 flex-shrink-0">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {["© 2025", "Threads Terms", "Privacy Policy", "Cookies"].map((item, i) => (
            <span key={i} className="text-xs" style={{ color: "#555" }}>{item}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}

function RingBadge({ text, color, size, top, left, right, rotate }) {
  return (
    <div style={{ position: "absolute", top, left: left || "auto", right: right || "auto", width: size, height: size, transform: `rotate(${rotate}deg)` }}>
      <div className="w-full h-full rounded-full relative overflow-hidden" style={{ backgroundColor: color }}>
        <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ position: "absolute", top: 0, left: 0 }}>
          <path id={`c${size}${text}`} d={`M ${size/2},${size/2} m -${size/2-14},0 a ${size/2-14},${size/2-14} 0 1,1 ${size-28},0 a ${size/2-14},${size/2-14} 0 1,1 -${size-28},0`} fill="none"/>
          <text fontSize="11" fontWeight="bold" fill="white" letterSpacing="3" fontFamily="Arial, sans-serif">
            <textPath href={`#c${size}${text}`} startOffset="0%">{`${text} • ${text} • ${text} • `}</textPath>
          </text>
        </svg>
        <div className="absolute rounded-full" style={{ width: size*0.55, height: size*0.55, backgroundColor: "#000", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}/>
      </div>
    </div>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function QRCode() {
  return (
    <div className="rounded-lg p-1.5" style={{ backgroundColor: "#fff" }}>
      <svg width="48" height="48" viewBox="0 0 48 48">
        {[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[6,1],[0,2],[2,2],[3,2],[4,2],[6,2],[0,3],[2,3],[4,3],[6,3],[0,4],[2,4],[3,4],[4,4],[6,4],[0,5],[6,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[8,0],[9,0],[10,0],[8,2],[9,2],[11,2],[8,4],[10,4],[11,4],[0,8],[2,8],[3,8],[1,9],[3,9],[0,10],[1,10],[3,10],[8,6],[9,6],[10,6],[11,6],[8,8],[10,8],[11,8],[9,9],[11,9],[8,10],[9,10],[11,10]].map(([x,y],i) => (
          <rect key={i} x={x*4+2} y={y*4+2} width="3.5" height="3.5" fill="#000"/>
        ))}
      </svg>
    </div>
  );
}