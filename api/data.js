// let cache = null;
// let cachtTime = 0;

// const CACHE_TTL = 60 * 1000; // 60 seconds

module.exports = async function handler(req, res) {
  try {
    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "https://respectmovoters.org");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight request
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
    
    const response = await fetch(process.env.RMV_API_URL);
    const data = await response.json();

    res.status(200).json({
      source: "live",
      data
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }  
}
