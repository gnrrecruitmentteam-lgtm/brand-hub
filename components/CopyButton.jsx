"use client";
import { useState } from "react";

export default function CopyButton({ value, label, className = "", hideValue = false }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button type="button" onClick={copy} className={`copy ${className}`} aria-label={`Copy ${label || value}`}>
      {hideValue ? (
        <span className="copy-action">{copied ? "Copied ✓" : `⧉ ${label}`}</span>
      ) : (
        <>
          <span className="copy-label">{label}</span>
          <span className="copy-value">{copied ? "Copied ✓" : value}</span>
        </>
      )}
    </button>
  );
}
