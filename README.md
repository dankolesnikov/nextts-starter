# nextts-starter

Starter project for Next.js using Typescript and a connected Prisma with SQLite.

Usage:

```
git clone https://github.com/dankolesnikov/nextts-starter.git
npm i
```

To start NextJs
```
npm run dev
```

To test Prisma
```
npm run prisma
```

Take a look at the data:
```
npx prisma studio
```


## Tech Stack
- NextJs
- TypeScript
- ESLint (AirBnb style)
- SQLite + Prisma
- Jest

### Env Variables
Next.js utilizes `.env.local` file to ingest variables into its process that will be accessbile via `process.env.MY_VAR`