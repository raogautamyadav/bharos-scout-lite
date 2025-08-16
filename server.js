import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Basic config via env or defaults
const REGION = process.env.REGION || "IN";
const DEFAULT_CATEGORIES = process.env.DEFAULT_CATEGORIES || "home_kitchen,beauty_personal_care,mobile_accessories";
const ASP_BAND = process.env.ASP_BAND || "499-1999";

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (_req, res) => {
res.json({ ok: true, ts: Date.now(), region: REGION });
});

// Fake “Top 20” placeholder so page renders without a backend
app.get("/api/top20", (req, res) => {
const demo = Array.from({ length: 10 }).map((, i) => ({
rank: i + 1,
title: Placeholder Product #${i + 1},
category: DEFAULT_CATEGORIES.split(",")[i % 3],
asp: ASP_BAND,
winnerScore: Math.floor(60 + Math.random() * 40)
}));
res.json({ region: REGION, items: demo });
});

app.get("*", (_req, res) => {
res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
console.log(BharOS Scout Lite running on port ${PORT});
});
