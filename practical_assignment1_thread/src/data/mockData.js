export const users = [
  { id: 1, username: "Yuki_16", displayName: "Karma Kelden Wangmo", avatar: "/avatars/yuki.jpeg", bio: "Coding. Designing.", followers: 3200000, following: 412, verified: true },
  { id: 2, username: "Austin_Wang", displayName: "Austin Zheng", avatar: "/avatars/Austin.jpeg", bio: "CEO @OpenAI. Interested in AI, startups, and the future.", followers: 890000, following: 203, verified: true },
  { id: 3, username: "King_Gyel", displayName: "Kinga Namgyal", avatar: "/avatars/Kingyel.jpeg", bio: "Guider. Traveler.", followers: 420000, following: 980, verified: false },
  { id: 4, username: "Tenzin", displayName: "Tenzin Lhaden", avatar: "/avatars/Tenzin.jpeg", bio: "Teacher. College Life.", followers: 1100000, following: 89, verified: true },
  { id: 5, username: "Jake", displayName: "Sim Jaeyun", avatar: "/avatars/Jake.jpeg", bio: "KPOP IDOL. ENHYPEN.", followers: 750000, following: 310, verified: true },
];

export const threads = [
  { id: 1, userId: 1, content: "Threads just crossed 300 million monthly active users. The growth has been incredible — thank you all for being here 🚀", likes: 42000, replies: 3100, reposts: 8900, timestamp: "2h", replyToId: null },
  { id: 2, userId: 2, content: "What capability would most change how you use AI day-to-day?", likes: 11000, replies: 5400, reposts: 2000, timestamp: "5h", replyToId: null },
  { id: 3, userId: 3, content: "Traveling to Heaven, a highest peak. Cold but look amzing. ", likes: 8400, replies: 920, reposts: 1300, timestamp: "7h", replyToId: null },
  { id: 4, userId: 4, content: "The most important quality in a founder isn't intelligence or work ethic. It's the ability to keep going when everything is telling you to stop.", likes: 33000, replies: 1800, reposts: 12000, timestamp: "1d", replyToId: null },
  { id: 5, userId: 5, content: "Neural networks are not magic. They are function approximators trained by gradient descent. Once you truly internalize this, everything clicks.", likes: 19000, replies: 2200, reposts: 7400, timestamp: "1d", replyToId: null },
  { id: 6, userId: 3, content: "This is really exciting. The fediverse approach is the right call.", likes: 880, replies: 2, reposts: 90, timestamp: "2h", replyToId: 1 },
  { id: 7, userId: 5, content: "Congrats on the milestone! What's next?", likes: 340, replies: 1, reposts: 0, timestamp: "3h", replyToId: 1 },
];

export const getUserById = (id) => users.find((u) => u.id === id);
export const getThreadsByUserId = (userId) => threads.filter((t) => t.userId === userId && t.replyToId === null);
export const getRepliesForThread = (threadId) => threads.filter((t) => t.replyToId === threadId);
export const formatCount = (n) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return String(n);
};