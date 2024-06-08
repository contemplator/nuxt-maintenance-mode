export default defineNitroPlugin(async () => {
  const storage = useStorage("SOME_KEY");
  storage.setItem("maintenance_mode", false);
});
