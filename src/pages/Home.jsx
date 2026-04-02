import React, { useState } from "react";
import QueryTab from "../components/QueryTab";
import DataTab from "../components/DataTab";
import PipelineTab from "../components/PipelineTab";
import RunTab from "../components/RunTab";

function Home() {
  const [activeTab, setActiveTab] = useState("query");
  const [config, setConfig] = useState({});

  return (
    <div className="container">
      <h1>🧠 RAG Builder Pro</h1>
      <p className="subtitle">
        A structured platform for designing and managing RAG pipelines
      </p>

      {/* Tabs */}
      <div className="tabs">
        <button onClick={() => setActiveTab("query")}>🔍 Query</button>
        <button onClick={() => setActiveTab("data")}>📂 Data</button>
        <button onClick={() => setActiveTab("pipeline")}>⚙️ Pipeline</button>
        <button onClick={() => setActiveTab("run")}>🚀 Run</button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "query" && (
          <QueryTab config={config} setConfig={setConfig} />
        )}
        {activeTab === "data" && (
          <DataTab config={config} setConfig={setConfig} />
        )}
        {activeTab === "pipeline" && (
          <PipelineTab config={config} setConfig={setConfig} />
        )}
        {activeTab === "run" && <RunTab config={config} />}
      </div>
    </div>
  );
}

export default Home;