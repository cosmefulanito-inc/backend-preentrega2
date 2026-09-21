import { PORT, NODE_ENV } from "./config/env.config.js";
import { getServices } from "./managers/ServiceManager.js";

const path = "./src/data/services.json"

async function main() {
  console.log("Entorno:", NODE_ENV)
  console.log("Puerto:", PORT)

  const services = await getServices(path)
  console.log("Servicios cargados:", services)
}

main()
