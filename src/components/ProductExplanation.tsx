import React, { useState } from "react";
import { FIVE_MOMENTS } from "../data/mockData";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  UploadCloud,
  MonitorPlay,
} from "lucide-react";

export const ProductExplanation: React.FC = () => {
  const [selectedMomentIndex, setSelectedMomentIndex] = useState(2); // default on 'Govern'

  const icons = [Layers, Cpu, ShieldCheck, UploadCloud, MonitorPlay];

  return (
    <section
      id="product"
      aria-labelledby="moments-heading"
      className="editorial-section"
      style={{
        backgroundColor: "var(--ink-surface)",
        borderBottom: "1px solid var(--rule-light)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "880px", marginBottom: "56px" }}>
          <div className="section-label">
            HOW ASSET MANAGEMENT & STREAMING CONNECT
          </div>
          <h2
            id="moments-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "var(--warm-white)",
              marginBottom: "20px",
            }}
          >
            One system. Five moments.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--soft-gray)",
              maxWidth: "680px",
            }}
          >
            MediaMerge links the editorial room to the viewer’s screen through
            an uninterrupted, rights-aware pipeline.
          </p>
        </div>

        {/* Visual Line Connecting the Five Moments */}
        {/* Desktop: Horizontal Progression Bar */}
        <div
          className="moments-progress-bar-desktop"
          style={{
            position: "relative",
            marginBottom: "40px",
          }}
        >
          {/* Continuous rule */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "5%",
              right: "5%",
              height: "1px",
              backgroundColor: "var(--rule-light)",
              zIndex: 1,
            }}
          />

          {/* Active highlighted segment */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "5%",
              width: `${(selectedMomentIndex / (FIVE_MOMENTS.length - 1)) * 90}%`,
              height: "1px",
              backgroundColor: "var(--accent-violet)",
              zIndex: 2,
              transition: "width 300ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {/* Five Step Nodes */}
          <div
            style={{
              position: "relative",
              zIndex: 3,
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "12px",
            }}
          >
            {FIVE_MOMENTS.map((m, idx) => {
              const isSelected = selectedMomentIndex === idx;
              const isCompleted = idx < selectedMomentIndex;
              const IconComp = icons[idx];

              return (
                <button
                  key={m.number}
                  onClick={() => setSelectedMomentIndex(idx)}
                  aria-pressed={isSelected}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: "8px 4px",
                  }}
                >
                  {/* Step Node Dot */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: isSelected
                        ? "var(--accent-violet)"
                        : isCompleted
                          ? "var(--ink)"
                          : "var(--ink-surface)",
                      border: isSelected
                        ? "2px solid var(--warm-white)"
                        : isCompleted
                          ? "1px solid var(--accent-violet)"
                          : "1px solid var(--rule-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isSelected
                        ? "#FFFFFF"
                        : isCompleted
                          ? "var(--accent-violet)"
                          : "var(--muted-gray)",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <IconComp size={14} />
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.04em",
                      color: isSelected
                        ? "var(--warm-white)"
                        : "var(--muted-gray)",
                      transition: "color var(--transition-fast)",
                    }}
                  >
                    {m.number} · {m.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Five Minimal Editorial Panels */}
        {/* On desktop: 5-column layout or highlighted moment with full row cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1px",
            backgroundColor: "var(--rule-light)",
            border: "1px solid var(--rule-light)",
            borderRadius: "var(--radius-xs)",
            overflow: "hidden",
          }}
          className="moments-grid"
        >
          {FIVE_MOMENTS.map((moment, idx) => {
            const isSelected = selectedMomentIndex === idx;
            const IconComp = icons[idx];

            return (
              <div
                key={moment.number}
                onClick={() => setSelectedMomentIndex(idx)}
                style={{
                  backgroundColor: isSelected ? "#1c1b22" : "var(--ink)",
                  padding: "clamp(20px, 2.5vw, 32px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  cursor: "pointer",
                  position: "relative",
                  transition: "background-color var(--transition-fast)",
                }}
                className="moment-card"
              >
                {/* Active Accent Top Indicator */}
                {isSelected && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "var(--accent-violet)",
                    }}
                  />
                )}

                <div>
                  {/* Step number and icon */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8125rem",
                        color: isSelected
                          ? "var(--accent-violet)"
                          : "var(--muted-gray)",
                      }}
                    >
                      {moment.number}
                    </span>
                    <IconComp
                      size={16}
                      style={{
                        color: isSelected
                          ? "var(--accent-violet)"
                          : "var(--muted-gray)",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.35rem, 2vw, 1.75rem)",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      color: "var(--warm-white)",
                      marginBottom: "12px",
                    }}
                  >
                    {moment.title}
                  </h3>

                  {/* Core Quote */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.55,
                      color: isSelected
                        ? "var(--warm-white-muted)"
                        : "var(--soft-gray)",
                      marginBottom: "16px",
                    }}
                  >
                    “{moment.quote}”
                  </p>
                </div>

                {/* Technical Input / Output Metadata */}
                <div
                  style={{
                    borderTop: "1px solid var(--rule-light)",
                    paddingTop: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div>
                    <span
                      className="meta-label"
                      style={{ fontSize: "0.625rem" }}
                    >
                      INPUT
                    </span>
                    <p
                      className="font-mono"
                      style={{
                        fontSize: "0.6875rem",
                        color: "var(--soft-gray)",
                        marginTop: "2px",
                        lineHeight: 1.3,
                      }}
                    >
                      {moment.input}
                    </p>
                  </div>
                  <div>
                    <span
                      className="meta-label"
                      style={{ fontSize: "0.625rem" }}
                    >
                      OUTPUT
                    </span>
                    <p
                      className="font-mono"
                      style={{
                        fontSize: "0.6875rem",
                        color: isSelected
                          ? "var(--accent-violet)"
                          : "var(--soft-gray)",
                        marginTop: "2px",
                        lineHeight: 1.3,
                      }}
                    >
                      {moment.output}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Moment Audit Protocol Deep Dive */}
        <div
          style={{
            marginTop: "24px",
            padding: "16px 24px",
            backgroundColor: "var(--ink)",
            border: "1px solid var(--rule-light)",
            borderRadius: "var(--radius-xs)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span className="meta-tag">AUDIT COVENANT</span>
            <span
              className="font-mono"
              style={{ fontSize: "0.8125rem", color: "var(--warm-white)" }}
            >
              {FIVE_MOMENTS[selectedMomentIndex].title} Phase:{" "}
              {FIVE_MOMENTS[selectedMomentIndex].auditRule}
            </span>
          </div>

          <span
            className="meta-label"
            style={{ color: "var(--status-active)" }}
          >
            AUTOMATED · ZERO-DRIFT
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .moments-progress-bar-desktop {
            display: none !important;
          }
          .moments-grid {
            grid-template-columns: 1fr !important;
          }
          .moment-card {
            border-bottom: 1px solid var(--rule-light) !important;
          }
        }
      `}</style>
    </section>
  );
};
