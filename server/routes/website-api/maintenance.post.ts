export default defineEventHandler(async (event) => {
  const cur = await useStorage("SOME_KEY").getItem("maintenance_mode");
  await useStorage("SOME_KEY").setItem("maintenance_mode", !cur);
  return await useStorage("SOME_KEY").getItem("maintenance_mode");
});
