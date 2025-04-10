# landing



```bash
npx create-next-app@latest landing
    Need to install the following packages:
    create-next-app@15.3.0
    Ok to proceed? (y) y

    ✔ Would you like to use TypeScript? … No / Yes
    ✔ Would you like to use ESLint? … No / Yes
    ✔ Would you like to use Tailwind CSS? … No / Yes
    ✔ Would you like your code inside a `src/` directory? … No / Yes
    ✔ Would you like to use App Router? (recommended) … No / Yes
    ✔ Would you like to use Turbopack for `next dev`? … No / Yes
    ✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
    ✔ What import alias would you like configured? … @/*
    Creating a new Next.js app in /Users/gabrielemartire/Documents/code/landing/landing.

    Using npm.

    Initializing project with template: app-tw
```


```
⨯ ./tailwind.config.ts:78:13
    Module not found: Can't resolve 'tailwindcss-animate'
      76 |     },
      77 |   },
    > 78 |   plugins: [require("tailwindcss-animate")],
```
[/tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)
npm install -D tailwindcss-animate