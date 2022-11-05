import { createServer } from "http";

import { app } from "./";

const startExpressServer = async (port: string | undefined) => {
  const expressServer = createServer(app);

  expressServer.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });
};

startExpressServer("8080"); // You can give the port from environment variables as well.
