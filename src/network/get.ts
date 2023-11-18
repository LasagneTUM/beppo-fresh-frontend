export async function get(endpoint: string, user: string) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/${endpoint}`;

  console.log(`GET ${url}`);

  const request = fetch(url, {
    method: "GET",
    headers: {
      user: user,
    },
  });

  const data = await (await request).json();

  console.group(`RESPONSE to GET ${url}`);
  console.log("data:", data);
  console.groupEnd();

  return data;
}
