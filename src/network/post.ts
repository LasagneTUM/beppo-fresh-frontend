export async function post(endpoint: string, payload: object) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/${endpoint}`;
  const stringifiedBody = JSON.stringify(payload);

  console.group(`POST ${url}`);
  console.log("body:", stringifiedBody);
  console.groupEnd();

  const request = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringifiedBody,
  });

  const data = await (await request).json();

  console.group(`RESPONSE to POST ${url}`);
  console.log("data:", data);
  console.groupEnd();

  return data;
}
