//FOR handling global error - Ajay

"use client";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h2>Something went wrong</h2>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </body>
    </html>
  );
}
