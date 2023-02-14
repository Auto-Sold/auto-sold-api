import app from "./app";
import AppDataSource from "./data-source";

(async () => {
    const PORT = process.env.PORT
    await AppDataSource.initialize()
        .catch((err) => {
            console.error("Erro ao iniciar servidor", err)
        })

    app.listen(PORT, () => {
        console.log(`Servidor executando ${PORT}`)
    })
})()