# QCoin
Generate quantum-random "coin flips" using [Colorado University Randomness Beacon (CURBy)](https://random.colorado.edu/) and [corby-js-client](https://curby.gitbook.io/curby-js-client#buff-beacon-project-curby-client).

Clicking the "Flip Coins" button gets the most recent Randomness byte stream from the public API. This object includes a method to shuffle an array, and a limit to the length of that array. QCoin generates a plain-sorted array [0,1,0,1,...] the max length, then shuffles the array and returns the first half.

The user can paginate through the available "coins."

## Getting Started
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## CURBy links:
https://www.icfo.eu/news/2521/nist-and-partners-use-quantum-mechanics-to-make-a-factory-for-random-numbers

https://curby.gitbook.io/curby-js-client

https://random.colorado.edu/

## DEMO
https://qcoin-snowy.vercel.app/
