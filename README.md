# AI Lead-Gen Dashboard

An automated lead generation and analysis pipeline. When a lead is captured through a web form, an **n8n workflow** instantly analyzes the message using the **Gemini API** for intent classification, and the results are displayed in real time on a **Next.js** dashboard.

🔗 **Live Demo:** [Add your Vercel URL here]
📊 **n8n Workflow:** Webhook → Google Sheets → Gemini AI Analysis → Google Sheets Update

---

## 🧩 Overview

This project solves a common business problem: leads come in, but sales teams have to manually read and triage each one to figure out who's worth following up with first. This pipeline automates that triage step using AI, so every lead arrives pre-summarized and pre-scored.

**Flow:**

```
Lead submits form
      │
      ▼
n8n Webhook (trigger)
      │
      ▼
Google Sheets (append raw lead)
      │
      ▼
Gemini API (summarize + score intent: High / Medium / Low)
      │
      ▼
Google Sheets (update row with AI results)
      │
      ▼
Next.js Dashboard (SheetDB API → live table view)
```

---

## ✨ Features

- **Automated intake** — Webhook captures Name, Email, and Message from any form submission
- **AI-powered triage** — Gemini API generates a one-sentence summary and rates lead intent (High/Medium/Low)
- **Live dashboard** — Server-rendered Next.js table, always showing fresh data (`cache: 'no-store'`, `force-dynamic`)
- **Visual intent scoring** — Color-coded badges (green/yellow/red) for at-a-glance prioritization
- **Graceful states** — Custom loading skeleton and error handling if the data source is unreachable
- **Dark UI** — Clean, dashboard-style dark theme built with Tailwind CSS

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Automation | n8n (Webhook, Google Sheets, HTTP Request nodes) |
| AI Analysis | Google Gemini API |
| Data Store | Google Sheets (via SheetDB.io REST API) |
| Frontend | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Deployment | Vercel |

---

## 📁 Project Structure

```
ai-lead-dashboard/
├── app/
│   ├── page.tsx          # Server Component — fetches & renders leads
│   ├── loading.tsx       # Route-level loading skeleton
│   └── globals.css
├── components/
│   ├── Header.tsx         # Dashboard title/subtitle
│   ├── LeadsTable.tsx      # Main data table
│   ├── IntentBadge.tsx     # Color-coded intent pill
│   └── ErrorState.tsx      # Fallback UI for fetch failures
├── .env.local.example      # Template for required env vars
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A Google Sheet with columns: `Name | Email | Message | AI_Summary | Intent`
- A [SheetDB.io](https://sheetdb.io) API endpoint pointed at that sheet
- An n8n instance (cloud or self-hosted) with the automation workflow set up
- A Gemini API key from [Google AI Studio](https://aistudio.google.com)

### Installation

```bash
git clone https://github.com/Nipz66/AI-Lead-Gen-Dashboard.git
cd AI-Lead-Gen-Dashboard
npm install
```

### Environment Variables

Copy the example file and add your SheetDB endpoint:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SHEETDB_URL=https://sheetdb.io/api/v1/your_api_id
```

### Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

### Build

```bash
npm run build
```

---

## 🔄 n8n Workflow Setup

1. **Webhook node** — receives `POST` requests with `name`, `email`, `message` fields
2. **Google Sheets (Append)** — writes the raw lead into the sheet
3. **HTTP Request (Gemini API)** — sends the message to Gemini, prompting it to return a one-sentence summary and an intent rating (High/Medium/Low)
4. **Google Sheets (Update)** — writes the AI summary and intent back into the same row

Example webhook payload:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I need a booking system for my 20-room hotel"
}
```

---

## ☁️ Deployment

Deployed on **Vercel**:

1. Import the GitHub repo into Vercel
2. Add the `NEXT_PUBLIC_SHEETDB_URL` environment variable in project settings
3. Deploy — Vercel builds and serves the app automatically on every push to `main`

---

## 🔮 Possible Improvements

- Replace SheetDB with a proper database (Supabase/Postgres) to remove free-tier rate limits
- Add authentication so the dashboard isn't publicly viewable
- Add filtering/sorting by intent or date
- Move Gemini response parsing to structured JSON output for reliability

---

## 📄 License

MIT — feel free to fork and adapt for your own lead-gen pipeline.

---

Built by [Nipun Anupama](https://github.com/Nipz66) — Senior Software Architect specializing in AI-driven automation and full-stack development.
