import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// change to w.e pb will run on locally
const POCKETBASE_URL = "http://pocketbase:8090";

// Proxy GET request
app.get("/api/media", async (req, res) => {
  try {
    const response = await fetch(`${POCKETBASE_URL}/api/collections/media/records`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch media:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000,  '0.0.0.0' , () => {
  console.log('There is nothing in the desert and no man needs nothing.')
});