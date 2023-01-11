const express = require("express");
const path = require("path");
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

console.log(process.env.NODE_ENV)


app.use(routes);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
// catch all requests and send to index.html to keep client side routing nice
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})