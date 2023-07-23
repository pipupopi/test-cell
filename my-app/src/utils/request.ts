export async function getDataReq(url: string) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
}
