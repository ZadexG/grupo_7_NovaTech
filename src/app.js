const express = require ("express")
const app = express()
const path= require ("path")

app.use(express.static(path.join(__dirname,"./public")))

app.get("/", (req, res) => {
    res.sendFile (path.join(__dirname, "./views/index.html"));
})

app.get("/login", (req, res) => {
    res.sendFile (path.join(__dirname, "./views/login.html"));
})

app.get("/register", (req, res) => {
    res.sendFile (path.join(__dirname, "./views/register.html"));
})

app.get("/productCart", (req, res) => {
    res.sendFile (path.join(__dirname, "./views/productCart.html"));
})

const port = 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});