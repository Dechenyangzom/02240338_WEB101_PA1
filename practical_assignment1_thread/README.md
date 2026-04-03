# Threads UI — React Web Page Recreation

> WEB101 Practical Assignment 1 

---

## Functionality

This application recreates the core pages of the **Threads** social media app using Next.js and Tailwind CSS. The following functionality is implemented:

- **Home Feed** — Browse a scrollable feed of posts from multiple users
- **Profile Page** — View any user's profile (avatar, bio, follower count) and all their threads. Navigate via `/profile?id=1`
- **Search Page** — Live search filters threads and users by keyword as you type. Shows suggested users when no query is active
- **Like & Repost toggle** — Each post's like and repost counts update instantly using React `useState`
- **Responsive design** — Bottom navigation bar on mobile, top navigation bar on desktop, 3-column layout on large screens

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home feed — all threads |
| `/profile?id=1` | User profile page (change id to 1–5) |
| `/search` | Search threads and users |

---

## Component Architecture

```
App (layout.jsx)
├── Navbar              ← Fixed top (desktop) / bottom (mobile)
└── Pages
    ├── Home (page.js)
    │   └── ThreadCard[]
    │       ├── Avatar
    │       └── ActionBar  (useState: liked, reposted)
    ├── Profile (profile/page.jsx)
    │   ├── Avatar
    │   └── ThreadCard[]
    ├── Search (search/page.jsx)
    │   ├── Input  (useState: query)
    │   └── ThreadCard[]
    └── Login (login/page.jsx)
        └── Input  (useState: email id, password)
```

---

## Reusable Components

| Component | Responsibility | Pages Used |
|-----------|---------------|------------|
| `ThreadCard` | Single post card — Avatar + content + ActionBar | Home, Profile, Search, Thread Detail |
| `Avatar` | User profile picture with size variants (sm/md/lg/xl) | ThreadCard, Profile, Search, Layout |
| `ActionBar` | Like/reply/repost/share buttons with local toggle state | Inside every ThreadCard |
| `Navbar` | Navigation with active route highlighting | All pages via layout.jsx |

---

## Feature
- `AuthContext.jsx` - tracks login status

## Data Source

Mock data is stored in `src/data/mockData.js` and includes 5 users and 7 threads. Helper functions are exported for use across all pages:

- `getUserById(id)` — returns a single user by id
- `getThreadsByUserId(userId)` — returns all top-level threads by a user
- `getRepliesForThread(threadId)` — returns all replies for a thread
- `formatCount(n)` — formats large numbers (e.g. 42000 → 42.0K)

In a production app this data would come from the Threads API.

---

## Technologies Used

- **Next.js 14** (App Router)
- **Tailwind CSS** for all styling
- **React useState** for interactive state (likes, reposts, search query)
- **usePathname** for active nav highlighting
- No backend — all data is local mock data

---

## How to Run

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Folder Structure

```
src/
  app/
    page.js                  ← Home feed
    login/page.jsx           ← signing in using instagram
    profile/page.jsx         ← Profile page
    search/page.jsx          ← Search page
    layout.jsx               ← Main layout
    globals.css              ← Tailwind directives
    clientLayout.jsx         ← layout for client-side features
  components/
    Navbar.jsx
    ThreadCard.jsx
    Avatar.jsx
    ActionBar.jsx
  context/
    AuthContext.jsx          ← Protecting routes and show
  data/
    mockData.js              ← Mock users and threads
```

---

## Tested On

- Desktop Chrome, Firefox
- Mobile (375px — iPhone SE)
- Tablet (768px — iPad)
