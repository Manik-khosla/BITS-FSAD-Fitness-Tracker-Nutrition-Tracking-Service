const expressServer = require('express');
const dotenv = require('dotenv');
const path = require('path');
const DataBaseConnection = require('./config/db-coonection');
const cors = require('cors');
const nutritionRouterEndpoint = require('./router/nutritionRoutes')
dotenv.config({
    path: path.resolve(__dirname, "./config/.env")
});

const PORT = process.env.PORT || 3809;
const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
if (!PORT || !ENVIRONMENT) {
    console.error('Environment variables PORT and ENVIRONMENT are required.');
    process.exit(1);
}


// Middleware

const startServer = async () => {
    try {
        await DataBaseConnection();
        
        const app = expressServer();
        app.use(cors());
        app.use(expressServer.json());
        await  app.use('/api/v1/mynutrition',nutritionRouterEndpoint)
      
        const server = app.listen(PORT, () => {
            console.log(`Express server successfully started on port ${PORT} in ${ENVIRONMENT} environment.`);
        });

        // Get local port
        const localPort = server.address().port;

        // Construct base URL
        const baseURL = `http://localhost:${localPort}`;

        console.log("Local Port:", localPort);
        console.log("Base URL:", baseURL);

        process.on('unhandledRejection', (reason, promise) => {
            console.error('Unhandled Rejection at:', promise, 'reason:', reason);
            
        });
    } catch (error) {
        console.error(`Error starting server: ${error.message}`);
        process.exit(1);
    }
};

startServer();
