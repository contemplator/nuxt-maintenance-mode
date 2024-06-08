import { promises as fs } from "fs";
import { join } from "path";

export default defineEventHandler(async (event) => {
  const maintenanceMode = await useStorage("SOME_KEY").getItem(
    "maintenance_mode"
  );
  if (
    maintenanceMode &&
    event.node.req.url !== "/maintenance.html" &&
    event.node.req.url !== "/website-api/maintenance"
  ) {
    const filePath = join(process.cwd(), "public", "maintenance.html");
    const maintenancePage = await fs.readFile(filePath, "utf-8");

    event.node.res.statusCode = 503;
    event.node.res.setHeader("Content-Type", "text/html");
    event.node.res.end(maintenancePage);
  }
});
