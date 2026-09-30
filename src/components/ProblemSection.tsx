import React, { useState } from "react";
import { PROBLEM_SEQUENCE } from "../data/mockData";
import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const [activeItemId, setActiveItemId] = useState<string>("RIGHT");

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % PROBLEM_SEQUENCE.length;
      setActiveItemId(PROBLEM_SEQUENCE[nextIndex].id);
      document
        .getElementById(`problem-btn-${PROBLEM_SEQUENCE[nextIndex].id}`)
        ?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex =
        (index - 1 + PROBLEM_SEQUENCE.length) % PROBLEM_SEQUENCE.length;
      setActiveItemId(PROBLEM_SEQUENCE[prevIndex].id);
      document
        .getElementById(`problem-btn-${PROBLEM_SEQUENCE[prevIndex].id}`)
        ?.focus();
    }
  };

  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="editorial-section"
      style={{
        backgroundColor: "var(--ink)",
        borderBottom: "1px solid var(--rule-light)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "880px", marginBottom: "64px" }}>
          <div className="section-label">THE INFRASTRUCTURE GAP</div>
          <h2
            id="problem-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "var(--warm-white)",
              marginBottom: "24px",
            }}
          >
            Most media systems stop at the file.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              lineHeight: 1.6,
              color: "var(--soft-gray)",
              maxWidth: "720px",
            }}
          >
            A source file is only the beginning. Teams still need to know which
            version is approved, who owns it, where it can be shown, when
            permission expires, and whether a viewer is entitled to press play.
          </p>
        </div>

        {/* Vertical Sequence: FILE -> VERSION -> RIGHT -> AUDIENCE -> SCREEN */}
        <div
          role="region"
          aria-label="The five layers of media context sequence"
          style={{
            borderTop: "1px solid var(--rule-light)",
          }}
        >
          {PROBLEM_SEQUENCE.map((item, index) => {
            const isActive = activeItemId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  borderBottom: "1px solid var(--rule-light)",
                  transition: "background-color var(--transition-fast)",
                  backgroundColor: isActive
                    ? "rgba(255, 255, 255, 0.02)"
                    : "transparent",
                }}
              >
                <button
                  id={`problem-btn-${item.id}`}
                  onClick={() => setActiveItemId(item.id)}
                  onFocus={() => setActiveItemId(item.id)}
                  onMouseEnter={() => setActiveItemId(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isActive}
                  aria-controls={`problem-desc-${item.id}`}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "clamp(20px, 3.5vw, 36px) 0",
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                    alignItems: "center",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    color: "inherit",
                  }}
                  className="problem-row-button"
                >
                  {/* Step Num & Title */}
                  <div
                    style={{
                      gridColumn: "span 4",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "20px",
                    }}
                    className="problem-title-col"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.875rem",
                        color: isActive
                          ? "var(--accent-violet)"
                          : "var(--muted-gray)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      0{index + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(1.8rem, 3.6vw, 3.2rem)",
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                        color: isActive
                          ? "var(--warm-white)"
                          : "var(--muted-gray)",
                        transition: "color var(--transition-fast)",
                      }}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Immediate Summary (Always visible or highlighted) */}
                  <div
                    style={{
                      gridColumn: "span 7",
                      paddingRight: "20px",
                    }}
                    className="problem-summary-col"
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        color: isActive
                          ? "var(--warm-white-muted)"
                          : "var(--muted-gray)",
                        lineHeight: 1.5,
                        transition: "color var(--transition-fast)",
                      }}
                    >
                      {item.summary}
                    </p>
                  </div>

                  {/* Indicator Arrow */}
                  <div
                    style={{
                      gridColumn: "span 1",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                    className="problem-arrow-col"
                  >
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid",
                        borderColor: isActive
                          ? "var(--accent-violet)"
                          : "transparent",
                        color: isActive
                          ? "var(--accent-violet)"
                          : "var(--muted-gray)",
                        borderRadius: "var(--radius-xs)",
                        transition: "all var(--transition-fast)",
                      }}
                    >
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </button>

                {/* Expanded Context Details (Revealed on hover, focus, or click) */}
                {isActive && (
                  <div
                    id={`problem-desc-${item.id}`}
                    role="region"
                    aria-label={`Detailed consequence of ${item.title}`}
                    style={{
                      paddingBottom: "clamp(20px, 3.5vw, 36px)",
                      paddingLeft: "clamp(0px, 4vw, 56px)",
                      display: "grid",
                      gridTemplateColumns: "repeat(12, 1fr)",
                      gap: "24px",
                    }}
                    className="problem-detail-grid"
                  >
                    <div
                      style={{
                        gridColumn: "span 7",
                        borderLeft: "2px solid var(--accent-violet)",
                        paddingLeft: "20px",
                      }}
                      className="problem-detail-left"
                    >
                      <span className="meta-label">
                        THE REALITY IN PRODUCTION
                      </span>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "1.0625rem",
                          color: "var(--warm-white)",
                          marginTop: "8px",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.detail}
                      </p>
                    </div>

                    <div
                      style={{
                        gridColumn: "span 5",
                        backgroundColor: "var(--ink-surface)",
                        border: "1px solid var(--rule-light)",
                        padding: "16px 20px",
                        borderRadius: "var(--radius-xs)",
                      }}
                      className="problem-detail-right"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "6px",
                        }}
                      >
                        <AlertTriangle
                          size={14}
                          style={{ color: "var(--status-restricted)" }}
                        />
                        <span
                          className="meta-label"
                          style={{ color: "var(--status-restricted)" }}
                        >
                          OPERATIONAL HAZARD
                        </span>
                      </div>
                      <p
                        className="font-mono"
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--soft-gray)",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.impact}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-row-button {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .problem-title-col, .problem-summary-col, .problem-arrow-col {
            grid-column: span 12 !important;
            width: 100% !important;
          }
          .problem-arrow-col {
            display: none !important;
          }
          .problem-detail-grid {
            display: flex !important;
            flex-direction: column !important;
          }
          .problem-detail-left, .problem-detail-right {
            grid-column: span 12 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
