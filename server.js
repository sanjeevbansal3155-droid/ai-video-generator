const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("AI Video Generator Backend Running 🚀");
});

app.post("/generate-video", async (req, res) => {
  const { topic, duration } = req.body;

  console.log("Topic:", topic);
  console.log("Duration:", duration);

  res.json({
    message: "Video generation started (demo mode)",
    topic,
    duration
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
