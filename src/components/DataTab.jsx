import React, { useState } from "react";

function DataTab({ config, setConfig }) {
  const [sources, setSources] = useState([]);
  const [connectors, setConnectors] = useState([]);
  const [preprocessing, setPreprocessing] = useState([]);

  const handleMulti = (e, setter, key) => {
    const values = [...e.target.selectedOptions].map(o => o.value);
    setter(values);
    setConfig({ ...config, [key]: values });
  };

  return (
    <div>
      <h2>Data Ingestion Layer</h2>

      {/* SOURCES */}
      <details open>
        <summary>📁 Sources</summary>

        <label>Select Data Sources</label>
        <select multiple onChange={(e) => handleMulti(e, setSources, "sources")}>
          <option>PDF</option>
          <option>DOCX</option>
          <option>PPT</option>
          <option>HTML</option>
          <option>Markdown</option>
          <option>CSV / Excel</option>
          <option>Images (OCR)</option>
          <option>Audio</option>
          <option>Video</option>
        </select>

        <h4>📥 Provide Data</h4>

        {(sources.includes("PDF") ||
          sources.includes("DOCX") ||
          sources.includes("PPT")) && <input type="file" multiple />}

        {sources.includes("CSV / Excel") && <input type="file" multiple />}
        {sources.includes("Images (OCR)") && <input type="file" multiple />}
        {sources.includes("Audio") && <input type="file" multiple />}
        {sources.includes("Video") && <input type="file" multiple />}

        {(sources.includes("HTML") || sources.includes("Markdown")) && (
          <textarea placeholder="Paste HTML/Markdown content or URL" />
        )}
      </details>

      {/* CONNECTORS */}
      <details>
        <summary>🔗 Connectors</summary>

        <label>External Integrations</label>
        <select multiple onChange={(e) => handleMulti(e, setConnectors, "connectors")}>
          <option>Google Drive</option>
          <option>Notion</option>
          <option>Slack</option>
          <option>Confluence</option>
          <option>S3 / Blob Storage</option>
          <option>APIs</option>
          <option>Web Scraping</option>
        </select>

        <h4>🔐 Configure Connections</h4>

        {connectors.includes("Google Drive") && <input placeholder="Google Drive Folder URL" />}
        {connectors.includes("Notion") && <input placeholder="Notion URL" />}
        {connectors.includes("Slack") && <input placeholder="Slack Token" />}
        {connectors.includes("Confluence") && <input placeholder="Confluence URL" />}
        {connectors.includes("S3 / Blob Storage") && (
          <>
            <input placeholder="Bucket Name" />
            <input placeholder="Access Key" />
          </>
        )}
        {connectors.includes("APIs") && <input placeholder="API Endpoint URL" />}
        {connectors.includes("Web Scraping") && <input placeholder="Website URL" />}
      </details>

      {/* PREPROCESSING */}
      <details>
        <summary>🧹 Preprocessing</summary>

        <label>Preprocessing Steps</label>
        <select multiple onChange={(e) => handleMulti(e, setPreprocessing, "preprocessing")}>
          <option>OCR</option>
          <option>Cleaning</option>
          <option>Table Extraction</option>
          <option>Language Detection</option>
          <option>Translation</option>
          <option>Metadata Extraction</option>
        </select>

        {preprocessing.includes("OCR") && (
          <select>
            <option>Tesseract</option>
            <option>EasyOCR</option>
          </select>
        )}

        {preprocessing.includes("Translation") && (
          <select>
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        )}

        {preprocessing.includes("Metadata Extraction") && (
          <label>
            <input type="checkbox" /> Extract metadata fields
          </label>
        )}
      </details>
    </div>
  );
}

export default DataTab;