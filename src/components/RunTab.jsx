import React from "react";

function RunTab({ config }) {
  return (
    <div>
      <h2>Run & Debug</h2>

      <h3>Configuration Preview</h3>
      <pre>{JSON.stringify(config, null, 2)}</pre>

      <button
        onClick={() => {
          if (!config.query) {
            alert("Please enter a query");
          } else {
            alert("Pipeline executed successfully");
          }
        }}
      >
        ▶ Run Pipeline
      </button>

      <h3>Output</h3>
      <p>Generated response will appear here</p>

      <div className="metrics">
        <div>Latency: 1.2s</div>
        <div>Docs Retrieved: 5</div>
        <div>Tokens: 1100</div>
      </div>
    </div>
  );
}

export default RunTab;