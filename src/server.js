import "dotenv/config"
import app from "./app.js"

const PORT = process.env.PORT

app.listen(PORT, ()=>{

    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
})