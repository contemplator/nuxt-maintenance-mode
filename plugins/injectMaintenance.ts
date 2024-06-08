export default defineNuxtPlugin(async () => {
  const asyncData = await useFetch("/website-api/maintenance");
  const isMaintenanceMode = asyncData.data.value as boolean;
  const maintenanceMode = useState("maintenanceMode", () => false);
  maintenanceMode.value = isMaintenanceMode;

  return;
});
