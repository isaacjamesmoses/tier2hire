"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [backendStatus, setBackendStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((res) => res.json())
      .then((data) => setBackendStatus(`Backend says: ${data.status}`))
      .catch(() => setBackendStatus("Backend not reachable"));
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>Tier2Hire</h1>
      <p style={{ marginTop: 16, fontSize: 18 }}>{backendStatus}</p>
    </main>
  );
}
