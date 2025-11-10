import { useEffect, useState } from "react";
const API = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        console.log(err, "ERROR");
      }
    };
    checkBackend();
  }, []);

  return (
    <div>
      <h1>Frontend Connected</h1>
      <p>Response from backend: {message}</p>
    </div>
  );
}

export default App;
