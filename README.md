# Finance Digest - Senior Frontend Engineer Assessment

This is my submission for the Senior Frontend Engineer position at Maon Technology Limited.

## Features

- Built with Next.js 14 (App Router) and TypeScript
- Responsive UI with clean, modern design
- API integration with Finnhub market news
- Loading states and error handling
- Proper environment variable configuration

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/bintus-ux/finance-digest.git
```

2. Install dependencies

```bash
npm install
```

3. Create `.env.local` file with your API keys

```env
NEXT_PUBLIC_FINNHUB_API_KEY=crals9pr01qhk4bqotb0crals9pr01qhk4bqotbg
NEXT_PUBLIC_FINNHUB_API_URL=https://finnhub.io/api/v1/news
```

4. Run the development server

```bash
npm run dev
```

## Deployment

The application can be deployed to Vercel, Netlify, or any other Next.js-compatible hosting platform.
