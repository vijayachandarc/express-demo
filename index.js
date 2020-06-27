const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('How do trees get bigger?');
});

app.get('/getNames', (req, res) => {
	res.send(['Rithvik', 'Vijay', 'Aarthi']);
})

app.listen(3000, () => {
	console.log('listening on port 3000...');
});