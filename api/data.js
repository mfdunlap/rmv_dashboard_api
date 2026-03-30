let cache = null;
let cachtTime = 0;

const CACHE_TTL = 60 * 1000; // 60 seconds

module.exports = async function handler(req, res) {
  try {
    console.log("ENV:", process.env.RMV_API_URL);

    const response = await fetch(process.env.RMV_API_URL);
    const data = await response.json();
    console.log("RAW RESPONSE:", data);

    res.status(200).json({
      source: "live",
      data});
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }  
}
