import { useState } from "react";

export default function Work() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [fileData, setFileData] = useState("");

  const saveFile = async () => {
    await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    setMessage("File saved successfully ✅");
  };

  const readFile = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.text();
    setFileData(data);
  };

  return (
    <div style={{ padding: 30 }}>
      <textarea
        rows="6"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={saveFile}>Write File</button>
      <button onClick={readFile}>Read File</button>

      <p>{message}</p>

      <pre>{fileData}</pre>
    </div>
  );
}
