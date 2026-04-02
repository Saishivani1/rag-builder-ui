import React, { useState } from "react";

function PipelineTab({ config, setConfig }) {
  const [retrieval, setRetrieval] = useState("");

  const handleMulti = (e, key) => {
    const values = [...e.target.selectedOptions].map(o => o.value);
    setConfig({ ...config, [key]: values });
  };

  return (
    <div>
      <h2>RAG Pipeline Configuration</h2>

      {/* ================= Chunking & Embedding ================= */}
      <details open>
        <summary>🧩 Chunking & Embedding</summary>

        <label>Chunking Strategy</label>
        <select
          onChange={(e) =>
            setConfig({ ...config, chunking: e.target.value })
          }
        >
          <option>Fixed-size</option>
          <option>Recursive</option>
          <option>Semantic</option>
          <option>Sliding Window</option>
          <option>Hierarchical</option>
          <option>Code-aware</option>
        </select>

        <label>Chunk Size: {config.chunk_size || 500}</label>
        <input
          type="range"
          min="100"
          max="2000"
          defaultValue="500"
          onChange={(e) =>
            setConfig({ ...config, chunk_size: e.target.value })
          }
        />

        <label>Embedding Model</label>
        <select
          onChange={(e) =>
            setConfig({ ...config, embedding: e.target.value })
          }
        >
          <option>OpenAI</option>
          <option>Cohere</option>
          <option>HuggingFace</option>
        </select>
      </details>

      {/* ================= Vector Store ================= */}
      <details>
        <summary>💾 Vector Store</summary>

        <label>Vector Database</label>
        <select
          onChange={(e) =>
            setConfig({ ...config, vector_db: e.target.value })
          }
        >
          <option>Pinecone</option>
          <option>Weaviate</option>
          <option>FAISS</option>
          <option>Chroma</option>
          <option>pgvector</option>
        </select>
      </details>

      {/* ================= Retrieval ================= */}
      <details>
        <summary>🔎 Retrieval</summary>

        <label>Retrieval Strategy</label>
        <select
          onChange={(e) => {
            setRetrieval(e.target.value);
            setConfig({ ...config, retrieval: e.target.value });
          }}
        >
          <option>Dense</option>
          <option>Sparse (BM25)</option>
          <option>Hybrid</option>
          <option>Graph RAG</option>
          <option>Parent-child</option>
        </select>

        <label>Top-K: {config.top_k || 5}</label>
        <input
          type="range"
          min="1"
          max="20"
          defaultValue="5"
          onChange={(e) =>
            setConfig({ ...config, top_k: e.target.value })
          }
        />

        {retrieval === "Hybrid" && <p>⚠ Requires Dense + BM25</p>}
        {retrieval === "Graph RAG" && (
          <p>⚠ Requires Knowledge Graph (Neo4j)</p>
        )}
        {retrieval === "Parent-child" && (
          <p>⚠ Requires Hierarchical Chunking</p>
        )}
      </details>

      {/* ================= Reranking ================= */}
      <details>
        <summary>📊 Reranking</summary>

        <label>Reranker</label>
        <select
          onChange={(e) =>
            setConfig({ ...config, rerank: e.target.value })
          }
        >
          <option>None</option>
          <option>Cross-encoder</option>
          <option>LLM reranker</option>
          <option>MMR</option>
        </select>
      </details>

      {/* ================= Context ================= */}
      <details>
        <summary>🧠 Context Construction</summary>

        <label>Context Strategy</label>
        <select
          onChange={(e) =>
            setConfig({ ...config, context: e.target.value })
          }
        >
          <option>Simple concat</option>
          <option>Ranked concat</option>
          <option>Compression</option>
          <option>Summarization</option>
        </select>
      </details>

      {/* ================= Generation ================= */}
      <details>
        <summary>🤖 Generation</summary>

        <label>LLM</label>
        <select
          onChange={(e) =>
            setConfig({ ...config, llm: e.target.value })
          }
        >
          <option>GPT</option>
          <option>Claude</option>
          <option>Gemini</option>
          <option>Mistral</option>
        </select>

        <label>Temperature: {config.temperature || 0.3}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue="0.3"
          onChange={(e) =>
            setConfig({ ...config, temperature: e.target.value })
          }
        />
      </details>

      {/* ================= Advanced ================= */}
      <details>
        <summary>🚀 Advanced (Memory, Agents, Guardrails)</summary>

        <label>Memory</label>
        <select
          onChange={(e) =>
            setConfig({ ...config, memory: e.target.value })
          }
        >
          <option>None</option>
          <option>Sliding Window</option>
          <option>Summary</option>
          <option>Vector Memory</option>
        </select>

        <label>Agent</label>
        <select
          onChange={(e) =>
            setConfig({ ...config, agent: e.target.value })
          }
        >
          <option>None</option>
          <option>ReAct</option>
          <option>Plan & Execute</option>
        </select>

        <label>Guardrails</label>
        <select multiple onChange={(e) => handleMulti(e, "guardrails")}>
          <option>Hallucination Detection</option>
          <option>Citation Enforcement</option>
          <option>Toxicity Filter</option>
          <option>PII Masking</option>
          <option>Prompt Injection</option>
        </select>
      </details>

      {/* ================= System ================= */}
      <details>
        <summary>⚙️ System (Infra + Observability + Security)</summary>

        <label>Observability</label>
        <select multiple onChange={(e) => handleMulti(e, "observability")}>
          <option>Logging</option>
          <option>Tracing</option>
          <option>Metrics</option>
          <option>LLM-as-judge</option>
        </select>

        <label>Infrastructure</label>
        <select multiple onChange={(e) => handleMulti(e, "infra")}>
          <option>Caching</option>
          <option>Streaming</option>
          <option>Async Processing</option>
        </select>

        <label>Security</label>
        <select
          onChange={(e) =>
            setConfig({ ...config, security: e.target.value })
          }
        >
          <option>RBAC</option>
          <option>ACL</option>
          <option>Audit Logs</option>
          <option>Encryption</option>
        </select>
      </details>
    </div>
  );
}

export default PipelineTab;