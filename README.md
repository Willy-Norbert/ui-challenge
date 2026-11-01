# Artisans Labs: Frontend Interview Challenge

Welcome, and congratulations on reaching this stage!

At **Artisans Labs** we build **Mbaza Ubutabera AI**, an assistant that helps people in Rwanda understand the law in Kinyarwanda, on WhatsApp, App stores and the web. This challenge is a small, real piece of that product.

---

## Choose your track

This repository contains two starter projects. **Pick one — whichever fits your background best.** You only need to open and work in that folder.

| Track | Folder | Stack | Good if you… |
| --- | --- | --- | --- |
| **Web** | `web/` | React 19 + Vite + TypeScript | prefer browser / web development |
| **Mobile** | `mobile/` | Expo (React Native) + TypeScript | prefer native mobile development |

Both tracks implement the **same screen** against the **same data**. The task requirements are identical; only the setup and tooling differ.

---

## Your task

**Fork this repository and build the "Legal Topics" screen.**

**Figma design:** https://www.figma.com/design/RNgAixDoS42gVqMxfEG8qN/Artisans-Labs-Interview-Scorecard?node-id=0-1&t=LE3iu9Bi3ImvhaC9-1

The Figma file shows what the screen looks like when topics have loaded successfully. Use it as your visual reference for layout, spacing, colours, typography and card structure.

### Must have

1. Load topics from the mock data provided in the starter (see **Data** below).
2. Show each topic as a card that matches the Figma design: category tag, "Popular" badge, title, summary (2 lines max), law reference, number of questions and updated date.
3. Filter chips (All, Labour, Land, Family, Business) that filter the list.
4. A search box that filters topics by title or summary.
5. Show the topic count (for example "12 topics").
6. **Web track:** the screen works well at 390 px (mobile) and still looks good on desktop.  
   **Mobile track:** the screen runs on Android or iOS via Expo Go.
7. Use **TypeScript**: the types are provided in the mock data file — use them, and avoid `any`.

### Nice to have (bonus, not required)

- Reusable components (for example `TopicCard`, `FilterChip`, `SearchField`).
- Search that waits until the user stops typing (debounce).
- One or two tests (Web: Vitest + React Testing Library / Mobile: Jest + React Native Testing Library).
- A live deployment: Vercel or Netlify link (Web) **or** an Expo Go shareable link (Mobile).

Keep it simple. A clean, working, well-structured screen beats lots of half-finished extras.

---

## Data

The starter project includes a mock data file with 12 sample topics and the TypeScript types you need.

**Web:** `src/data/mockTopics.ts`  
**Mobile:** `data/mockTopics.ts`

```ts
// Types provided in the file — use them directly
export type Category = 'Labour' | 'Land' | 'Family' | 'Business';

export interface Topic {
  id: number;
  category: Category;
  title: string;
  summary: string;
  lawReference: string;
  isPopular: boolean;
}

export interface TopicsResponse {
  count: number;
  topics: Topic[];
}
```

Import and use `MOCK_TOPICS` from that file for your development work.

> **Note:** a real REST API will be provided at the interview. Your code should be structured so that swapping mock data for an API call is straightforward.

---

## Getting started — Web track (`web/`)

You need **Node.js 20 or newer** and **npm**.

```bash
# 1. Fork this repository on GitHub, then clone your fork
git clone https://github.com/<your-username>/<your-fork>.git
cd <your-fork>/web

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Other useful commands:

```bash
npm run build   # production build (must pass)
npm run lint    # code checks
npm run test    # run tests
```

---

## Getting started — Mobile track (`mobile/`)

You need **Node.js 20 or newer**, **npm**, and the **Expo Go** app on your phone
([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) /
[iOS](https://apps.apple.com/app/expo-go/id982107779)).

```bash
# 1. Fork this repository on GitHub, then clone your fork
git clone https://github.com/<your-username>/<your-fork>.git
cd <your-fork>/mobile

# 2. Install dependencies
npm install

# 3. Start the development server
npx expo start
```

Scan the QR code with **Expo Go** on your phone, or press `a` for Android emulator / `i` for iOS simulator.

Other useful commands:

```bash
npx expo start --android    # open directly on Android emulator
npx expo start --ios        # open directly on iOS simulator (macOS only)
```

---

## New to TypeScript? Learn fast

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Using TypeScript with React](https://react.dev/learn/typescript) (Web)
- [React Native + TypeScript](https://reactnative.dev/docs/typescript) (Mobile)
- [TypeScript Playground](https://www.typescriptlang.org/play)

You only need the basics: types for objects, typed props, and typed `useState`.

---

## About AI tools

**You may use AI tools (ChatGPT, Claude, Copilot, etc.) while building this.** That's how many engineers work today.

**At the interview, you can't use AI.** You will be asked to:

- walk us through your code and explain why you built it that way;
- answer questions about your choices (state, components, error handling, styling);
- **make some changes or add something new, live, without AI help.**

So use AI to learn and go faster, but **make sure you understand every line you submit.** Code you can't explain counts against you.

---

## How to submit

1. Push your work to your fork. Make several small commits with clear messages, not one big commit.
2. Open a **pull request** from your fork to this repository with the title `Submission: <Your Full Name>`.
3. In the pull request description, include:
    - which track you chose (Web or Mobile) and why;
    - how to run your project, if anything is different from the steps above;
    - what you finished, and what you would do with more time;
    - any decisions you want us to know about;
    - your live link or Expo Go link, if you deployed it.
4. Email the pull request link to **mmaudace@kwartisans.com**.

**Deadline: Monday 2 November 2026, 20:00 (Kigali time).**

---

## On interview day

- **Where:** FairView Building, KG 622 St, Kigali, Floor 4, Blue Room
- **When:** your booked slot on Tuesday 3 November 2026
- **Bring:** your laptop, charged, with the project **running locally** and your editor open
- **Format, about 45 minutes:** walkthrough of your code, then live changes and questions, then your questions for us

---

## What we look at

| Area | What good looks like |
| --- | --- |
| Data handling | Correct use of hooks, no unnecessary re-renders, clean async/state code |
| Loading, error and empty states | All handled, matching the design intent, with a working retry |
| Figma accuracy | Layout, spacing, font sizes, colours and radius taken from the design |
| Components and state | Small reusable components, clear props, simple state |
| Responsiveness / device fit | Web: works on mobile and desktop · Mobile: runs well on a real device |
| Code quality | Readable names, typed data, no dead code |
| Git | Small, meaningful commits |
| Understanding | You can explain and change your own code, live |

---

## Questions?

Email **mmaudace@kwartisans.com**. If something is unclear, make a sensible assumption, write it in your pull request, and keep going. That's part of the job too.

Good luck, and enjoy building!

**The Artisans Labs team**
