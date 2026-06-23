import app from "./app";


const bootstrap = () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        });
    }
    catch (error) {
        console.error("Error starting the server:", error);
    }
}

bootstrap();