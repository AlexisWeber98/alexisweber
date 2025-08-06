import dotenv from "dotenv";

const config = dotenv.config();

export const serverPort = process.env.SERVER_PORT || 6001;
export const dbName = process.env.DB_NAME;
export const dbHost = process.env.DB_HOST;
export const dbPassword = process.env.DB_PASSWORD;
export const dbPort = process.env.DB_PORT;
export const dbUser = process.env.DB_USER;
export const frontendUrl = process.env.FRONTEND_URL;
export const frontendUrlWww = process.env.FRONTEND_URL_WWW;
export const frontendUrlDevelop1 = process.env.FRONTEND_URL_DEVELOP1;
export const frontendUrlDevelop2 = process.env.FRONTEND_URL_DEVELOP2;
export const databaseUrl = process.env.DATABASE_URL;
export const userEmail = process.env.USER_EMAIL;
export const userPassword = process.env.USER_PASSWORD;

export const groqApiKey = process.env.GROQ_API_KEY;
export const groqApi = process.env.GROQ_API;
export const iaModel = process.env.IA_MODEL;
export const resendApiKey = process.env.RESEND_API_KEY;
