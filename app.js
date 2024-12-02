//javascript
const express = require('express');
const app = express();
const port = 3001;
app.get('/', (req, res) => {
	res.send('Hello, CI/CD World!');
});
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${3001}`);
});
module.exports = app;
