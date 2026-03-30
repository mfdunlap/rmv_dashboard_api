let cache = null;
let cachtTime = 0;

const CACHE_TTL = 60 * 1000; // 60 seconds

/*module.exports = async function handler(req, res) {
  try {
    const now = Date.now();

    // Return cached data if fresh
    if (cache && now - cacheTime < CACHE_TTL) {
      return res.status(200).json({
        source: "cache",
        data: cache
      });
    }

    // Fetch fresh data
    const url = process.env.RMV_API_URL;
    console.log("URL:", url);

    if (!process.env.SHEETS_API_URL) {
      throw new Error("Missing SHEETS_API_URL");
    }
    
    const response = await fetch(process.env.RMV_API_URL);
    const data = await response.json();

    // Update cache
    cache = data;
    cacheTime = now;
    
    res.status(200).json({
      source: "live",
      data
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }  
} */

module.export default function handler(req, res) {
  res.status(200).json({ ok: true });
}
