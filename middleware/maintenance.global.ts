// import { useMaintenanceStore } from "~/stores/maintenance";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // 判斷是不是 client
  if (!process.client) {
    const maintenanceMode = useState("maintenanceMode", () => false);
    return;
  }

  // const isMaintenanceMode = inject("isMaintenanceMode", false);
  const maintenanceMode = useState("maintenanceMode", () => false);
  if (maintenanceMode.value) {
    window.location.href = "/maintenance.html";
  }
  return;
});
