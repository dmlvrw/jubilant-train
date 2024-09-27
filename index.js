// const express = require("express");
// const bodyParser = require("body-parser");
const { exec } = require("child_process");

// const app = express();

// // Use body-parser to parse JSON payloads
// app.use(bodyParser.json());

// app.post("/webhook-endpoint", (req, res) => {
//   const payload = req.body;

//   // Check if it's a push event
//   if (payload && payload.ref && payload.ref === "refs/heads/main") {
//     console.log("New commit pushed to main branch.");

//     // Trigger a git pull or any other command
//     exec(
//       "cd /home/azureuser/app/didactic-fiesta && sudo docker compose down -v && git pull origin main && sudo docker compose up -d --build",
//       (err, stdout, stderr) => {
//         if (err) {
//           console.error(`Error pulling from repository: ${stderr}`);
//           return res.status(500).send("Error pulling latest changes.");
//         }
//         console.log(`Git Pull Output: ${stdout}`);
//         res.status(200).send("Successfully pulled latest changes.");
//       }
//     );
//   } else {
//     res.status(200).send("Not a push event to the main branch.");
//   }
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000");
// });

exec(
  "cd /home/azureuser/app/didactic-fiesta && sudo docker compose down -v && git pull origin main && sudo docker compose up -d --build",
  (err, stdout, stderr) => {
    if (err) {
      console.error(`Error pulling from repository: ${stderr}`);
      return;
    }
    console.log(`Git Pull Output: ${stdout}`);
  }
);
