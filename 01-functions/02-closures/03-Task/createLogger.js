const createLogger = () =>
{
    const infoLog = createLogger("[INFO]");
    const errorLog = createLogger("[ERROR]");

    infoLog("Server started");   // [INFO] 12:00:00 — Server started
    errorLog("Connection lost"); // [ERROR] 12:00:01 — Connection lost
}

function main()
{}

main();