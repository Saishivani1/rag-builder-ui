import React from "react";

function QueryTab({ config, setConfig }) {
  return (
    <div>
      <h2>Query & Understanding</h2>

      <label>User Query</label>
      <textarea
        placeholder="Enter your query..."
        onChange={(e) =>
          setConfig({ ...config, query: e.target.value })
        }
      />

      <div className="grid">
        <div>
          <label>Query Strategy</label>
          <select
            onChange={(e) =>
              setConfig({ ...config, query_strategy: e.target.value })
            }
          >
            <option>None</option>
            <option>Query Rewriting</option>
            <option>Query Expansion</option>
            <option>Multi-query</option>
            <option>HyDE</option>
          </select>
        </div>

        <div>
          <label>Response Style</label>
          <select
            onChange={(e) =>
              setConfig({ ...config, response_mode: e.target.value })
            }
          >
            <option>Concise</option>
            <option>Detailed</option>
            <option>Bullet Points</option>
            <option>JSON</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default QueryTab;