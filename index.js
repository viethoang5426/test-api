const express = require("express");
const app = express();
app.use(express.json());

app.post("/hello", (req, res) => {
  res.status(200).json({ message: "Hello from node js" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server : http://localhost:${PORT}`);
});
