export async function dataService() {
  const response = await fetch("http://localhost:4000/data");
  const dataService = await response.json();
  return dataService;
}
