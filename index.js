const express = require('express');
const app = express();
const port = 5000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(port, () => {

  console.log(`Server running at http://localhost:${port}`);
});


// const express = require('express');
// const app = express();
// const port = 5000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
