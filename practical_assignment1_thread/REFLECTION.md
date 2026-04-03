# Reflection — WEB101 Practical Assignment 1

> 02240338 | Threads UI Recreation

---

## What I Built

For this assignment I recreated the Threads social media application using Next.js and Tailwind CSS. I implemented four pages — Login page, Home Feed, Profile and Search — along with four shared components: Navbar, ThreadCard, Avatar, and ActionBar.

---

## What I Learned

### React Component Architecture
Building the Threads UI made me understand why breaking a UI into small, single-responsibility components matters. For example, `ThreadCard` is used on four different pages without any changes — I just pass it different `thread` and `user` props each time. This showed me how reusability saves time and keeps code consistent.

### Props and Data Flow
I learned how data flows downward through props in React. The parent page (e.g., `HomePage`) gets data from `mockData.js`, then passes it to `ThreadCard`, which passes the thread down to `ActionBar`. Understanding this one-directional flow helped me figure out where to put data and where to put logic.

### useState Hook
The `ActionBar` component was where I first really understood `useState`. When the user clicks the like button, the state toggles between `true` and `false`, and the count on screen updates instantly. Before this assignment I knew useState existed but did not know when to use it. Now I understand it is for anything that should change on screen without reloading the page.

### Next.js App Router 
I learned how Next.js App Router works, specifically how the folder structure inside `src/app/` maps directly to URLs. 

### Client vs Server Components
This was one of the harder concepts to understand. Next.js 14 renders everything as a Server Component by default, which means event handlers like `onClick` and `onError` are not allowed. I ran into this error when building the Avatar component. The fix was simply adding `"use client"` at the top of the file.

### Responsive Design with Tailwind CSS
Using Tailwind's responsive prefixes (`md:`, `lg:`) I built three different layouts — a full-width mobile layout with a bottom nav bar, a centered tablet layout, and a 3-column desktop layout. This taught me to think about layout from mobile first and then scale up, rather than designing for desktop and trying to shrink it down.

---

## Challenges I Faced

### 1. Tailwind Not Working
After setting up the project, none of my Tailwind classes were applying and the page looked completely unstyled. After investigation I found the `globals.css` file was missing the `@tailwind` directives and the `tailwind.config.js` content paths were incorrect. This taught me that configuration files are just as important as the code itself.

### 2. Client Component Error
When I added `onError` to the `<img>` tag in Avatar, I got a runtime error saying event handlers cannot be passed to Client Component props. I did not understand what this meant at first. After reading about Next.js Server Components I understood the issue and fixed it by adding `"use client"` to `Avatar.jsx`. This was a good lesson about how Next.js 14 is different from plain React.

### 3. Responsive Layout
Getting the 3-column desktop layout to work while keeping mobile clean took several attempts. The sidebar was overlapping the content at certain screen widths and the Navbar needed different behaviour depending on screen size. I solved this using Tailwind's `hidden md:flex` and `hidden lg:block` classes to show and hide elements at the right breakpoints.

---

## What I Would Do Differently

- **Add more mock data** — the feed looks sparse with only 5 threads. More data would make it feel closer to the real app.
- **Add real images** — using placeholder avatars from pravatar.cc was convenient but replacing them with consistent, properly sized images would improve the design significantly.
- **Add a loading state** — currently data loads instantly from a local file. In a real app there would be a loading spinner while waiting for the API response. I would add this using a `loading` state variable.

---

## Conclusion

This assignment gave me practical experience applying React concepts that I had only seen in theory. The most valuable thing I learned was how to think in components — identifying which parts of a UI are reusable and designing them to accept different data through props. I also gained confidence with Next.js App Router, Tailwind CSS, and the difference between client and server components. These are skills I will carry into future web development projects.
