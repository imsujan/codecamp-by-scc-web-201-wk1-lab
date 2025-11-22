# 🧪 Week 1 Lab — Mini Text Toolkit

> **Mission:** Build and deploy your first React + TypeScript web app that manipulates text.

⏱ **Time:** 1-2 hours  
🎯 **Goal:** Ship a working Mini Text Toolkit with three features: Reverse Text, Word Count, and Title Case.

---

## 🚀 Getting Started

### Prerequisites

Before starting this lab, ensure you have:

- ✅ Node.js 18+ installed (`node -v`)
- ✅ pnpm installed (`pnpm -v`)
- ✅ Git configured (`git config --list`)
- ✅ Firebase CLI installed and logged in (`firebase login`)
- ✅ VS Code with ESLint & Prettier extensions

If you haven't set these up yet, refer to **PART A** of the lab instructions.

---

## 📂 Project Structure

```
week1-lab-text-tools/
├── src/
│   ├── App.tsx              # Main React component (UI structure)
│   ├── App.css              # Component styles
│   ├── main.tsx             # React entry point
│   ├── index.css            # Global styles
│   └── utils/
│       └── textTools.ts     # ⚠️ YOUR CODE GOES HERE
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript config (strict mode)
├── firebase.json            # Firebase Hosting config
└── README.md                # This file
```

---

## 🛠 Setup Instructions

### 1️⃣ Install Dependencies

```bash
pnpm install
```

This will install all required packages (React, TypeScript, Vite, etc.)

### 2️⃣ Start Development Server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

You'll see the UI is ready, but the buttons don't work yet. That's your job! ✨

---

## ✍️ Your Task: Implement the Logic Functions

Open `src/utils/textTools.ts` and implement these three functions:

### 🔄 Function 1: Reverse Text

```ts
export function reverseText(input: string): string {
  // TODO: Implement this
  // Hint: Use split(''), reverse(), and join('')
}
```

**Example:**

- Input: `"hello"` → Output: `"olleh"`
- Input: `"Code Camp"` → Output: `"pmaC edoC"`

### 🔢 Function 2: Count Words

```ts
export function countWords(input: string): number {
  // TODO: Implement this
  // Hint: Use trim(), split(/\s+/), and filter(Boolean)
}
```

**Example:**

- Input: `"hello world"` → Output: `2`
- Input: `"  "` → Output: `0`
- Input: `"Code Camp 2024"` → Output: `3`

### 🔤 Function 3: Title Case

```ts
export function toTitleCase(input: string): string {
  // TODO: Implement this
  // Hint: Split by spaces, capitalize first letter of each word, then join
}
```

**Example:**

- Input: `"hello world"` → Output: `"Hello World"`
- Input: `"code camp week 1"` → Output: `"Code Camp Week 1"`

---

## ✅ Testing Your Code

After implementing the functions:

1. **Manual Testing:**
   - Go to [http://localhost:5173](http://localhost:5173)
   - Type some text in the textarea
   - Click each button and verify the output

2. **TypeScript Check:**

   ```bash
   pnpm typecheck
   ```

   Should show no errors ✅

3. **Linting:**

   ```bash
   pnpm lint
   ```

   Should show no warnings ✅

4. **Format Code:**
   ```bash
   pnpm format
   ```

---

## 🚢 Deployment Instructions

### 1️⃣ Build for Production

```bash
pnpm build
```

This creates an optimized build in the `dist/` folder.

### 2️⃣ Configure Firebase

First, update `.firebaserc` with your Firebase project ID:

```json
{
  "projects": {
    "default": "cc-yourname-week1"
  }
}
```

### 3️⃣ Deploy to Firebase Hosting

```bash
firebase deploy
```

After deployment, you'll see:

```
✔  Deploy complete!
Project URL: https://cc-yourname-week1.web.app
```

Visit that URL and test your live app! 🎉

---

## 📝 Submission Checklist

Before submitting, ensure:

- [ ] All 3 features work correctly (Reverse, Count, Title Case)
- [ ] `pnpm typecheck` passes with no errors
- [ ] `pnpm lint` passes with no warnings
- [ ] App is deployed to Firebase and accessible via public URL
- [ ] Footer shows your name (edit `App.tsx` line 49)
- [ ] README updated with your info (see below)

### Update This README

Replace the sections below with your own information:

```markdown
## 👤 Student Info

**Name:** [Your Full Name]  
**Cohort:** [Your Cohort Name]  
**Live Demo:** [Your Firebase URL]

## 🎯 What I Learned

1. [Something you learned about React]
2. [Something you learned about TypeScript]
3. [Something you learned about deployment]
```

---

## 🌟 Stretch Goals (Optional)

If you finish early, try adding:

- **Character Count** below the textarea (live counter)
- **Copy to Clipboard** button for the output
- **Clear Text** button to reset both input and output
- **Dark Mode** toggle (use CSS variables)

---

## 🆘 Troubleshooting

### Error: `Cannot find module 'react'`

**Fix:** Run `pnpm install`

### TypeScript error: `Property 'value' does not exist`

**Fix:** Ensure you're using proper types. The textarea is already typed correctly in `App.tsx`

### Blank page after deployment

**Fix:**

1. Check browser console for errors
2. Verify `firebase.json` has `"public": "dist"`
3. Make sure you ran `pnpm build` before deploying

### Functions return empty/zero but no errors

**Fix:** You haven't implemented the logic yet! Open `src/utils/textTools.ts` and write the code.

---

## 📚 Resources

- [MDN: String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [React Docs: Hooks](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)

---

## 🎓 Grading Rubric

| Category          | Points | Criteria                                            |
| ----------------- | ------ | --------------------------------------------------- |
| **Functionality** | 40%    | All 3 features work correctly                       |
| **Code Quality**  | 25%    | TypeScript strict mode, ESLint clean, proper naming |
| **Deployment**    | 20%    | Live Firebase URL accessible                        |
| **Documentation** | 15%    | README updated, clear commit messages               |

**Total:** 100 points

---

## 👤 Student Info

- Name: [Sujan Maharjan]
- Cohort: [codecamp-by-scc-web-201-wk1-lab]
- Live Demo: [https://cc-sujan-maharjan-week1.web.app/]
- GitHub Repo: [https://github.com/imsujan/codecamp-by-scc-web-201-wk1-lab]


## 🎯 What I Learned

1. Forking and Cloning a Github Repo
2. Configure basic Node Js, Git
3. Creating Firebase host and deploy
4. Editing Basic Typescript files
5. Github repo forking, commiting
6. Maintaining a readme file in Github
   
---

## 📜 License

This lab is part of Code Camp by SCC. For educational purposes only.

---

> 💬 _"Your first deployed React app starts here. Make it count!"_  
> — **Code Camp by SCC**
