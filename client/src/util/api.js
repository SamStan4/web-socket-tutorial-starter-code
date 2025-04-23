const serverIP = import.meta.env.VITE_SERVER_IP;
const serverPort = import.meta.env.VITE_SERVER_PORT;

if (!serverIP || !serverPort) {
  throw new Error("server ip or port not known");
}

export async function addSignature(name, email, city, state) {
  const url = `http://${serverIP}:${serverPort}/signature/add`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "city": city,
        "state": state
      })
    });
    if (!response.ok) {
      console.warn(`recieved ${response.status} from server on add signature`);
      return false;
    }
    const data = await response.json();
    return data.status;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getSignatures() {
  const url = `http://${serverIP}:${serverPort}/signature/get-all`;
  try {
    const response = await fetch(url, {
      method: "GET"
    });
    if (!response.ok) {
      console.warn(`recieved ${response.status} from server on get signatures`);
      return [];
    }
    const data = await response.json();
    return data.signatures;
  } catch (err) {
    console.error(err);
    return [];
  }
}