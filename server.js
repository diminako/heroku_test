const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello!");
});




app.listen(PORT, () => {
    console.log("You've got mail.  @ http://localhost:" + PORT)
})

app.listen()