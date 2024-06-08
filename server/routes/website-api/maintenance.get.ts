export default defineEventHandler(async (event) => {
  return await useStorage("SOME_KEY").getItem("maintenance_mode");
});
