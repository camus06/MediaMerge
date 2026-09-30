import React, { useState } from "react";
import {
  ShieldCheck,
  AlertCircle,
  Calendar,
  Globe2,
  FileText,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const RightsSection: React.FC = () => {
  const [selectedTerritory, setSelectedTerritory] = useState<
    "India" | "United Kingdom" | "United States"
  >("India");

  const territoryData = {
    India: {
      status: "Available",
      allowed: true,
      window: "01 Jan 2025 — 31 Dec 2027",
      tiers: "Standard & Premium",
      statusText: "Playback allowed",
      clause:
        "Direct SVOD Exclusive grant under clause 4.1. Local censorship certificate CBFC/U cleared.",
      statusColor: "var(--status-active)",
    },
    "United Kingdom": {
      status: "Available",
      allowed: true,
      window: "15 Mar 2025 — 31 Dec 2027",
      tiers: "Premium Tiers Only",
      statusText: "Playback allowed",
      clause:
        "Educational and institutional SVOD rights cleared. Linear broadcast holdback expired Feb 2026.",
      statusColor: "var(--status-active)",
    },
    "United States": {
      status: "Restricted",
      allowed: false,
      window: "Holdback until 01 Jan 2028",
      tiers: "None (Restricted)",
      statusText: "Playback restricted in region",
      clause:
        "North American theatrical & physical distributor exclusive window active through Dec 2027.",
      statusColor: "var(--status-restricted)",
    },
  };

  const current = territoryData[selectedTerritory];

  return (
    <section
      id="rights"
      aria-labelledby="rights-heading"
      className="editorial-section"
      style={{
        backgroundColor: "var(--ink)",
        borderBottom: "1px solid var(--rule-light)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "880px", marginBottom: "56px" }}>
          <div className="section-label">RIGHTS AS LOGIC</div>
          <h2
            id="rights-heading"
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
            Permission is part of the product.
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
            Media should not disappear into spreadsheets, inboxes, and memory.
            MediaMerge makes ownership, territory, duration, and access visible
            before publication.
          </p>
        </div>

        {/* Visual Rights Engine Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "32px",
            alignItems: "stretch",
          }}
          className="rights-grid"
        >
          {/* Left Column: Visual Rights Timeline */}
          <div
            style={{
              gridColumn: "span 7",
              backgroundColor: "var(--ink-surface)",
              border: "1px solid var(--rule-light)",
              padding: "clamp(24px, 4vw, 40px)",
              borderRadius: "var(--radius-xs)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "32px",
            }}
            className="rights-col-timeline"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <span className="meta-label">TEMPORAL RIGHTS WINDOW</span>
                <span className="meta-tag">
                  <Calendar size={12} />
                  CALENDAR SYNCHRONIZED
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--warm-white)",
                  marginBottom: "8px",
                }}
              >
                License Lifecycle: “The Last Monsoon”
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  color: "var(--muted-gray)",
                }}
              >
                Contract Duration: 36 Months · Licensor: Horizon CineWorks AG
              </p>

              {/* Exact Timeline from Prompt:
                  2026 ───────────── 2027 ───────────── 2028
                         ACTIVE LICENSE
                                                    RENEWAL WINDOW
              */}
              <div
                style={{
                  marginTop: "40px",
                  padding: "24px 20px",
                  backgroundColor: "#0e0e0e",
                  border: "1px solid var(--rule-light)",
                  borderRadius: "var(--radius-xs)",
                }}
              >
                {/* Year Marker Labels */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--warm-white)",
                    marginBottom: "12px",
                  }}
                >
                  <span>2026</span>
                  <span>2027</span>
                  <span>2028</span>
                </div>

                {/* Timeline Horizontal Line & Window Spans */}
                <div
                  style={{
                    position: "relative",
                    height: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "4px",
                    margin: "16px 0 24px 0",
                  }}
                >
                  {/* ACTIVE LICENSE (Spans across 2026 through late 2027) */}
                  <div
                    style={{
                      position: "absolute",
                      left: "0%",
                      width: "75%",
                      top: 0,
                      bottom: 0,
                      backgroundColor: "var(--accent-violet)",
                      borderRadius: "4px 0 0 4px",
                    }}
                  />

                  {/* RENEWAL WINDOW (Spans late 2027 into 2028) */}
                  <div
                    style={{
                      position: "absolute",
                      left: "75%",
                      width: "25%",
                      top: 0,
                      bottom: 0,
                      backgroundColor: "var(--status-restricted)",
                      opacity: 0.8,
                      borderRadius: "0 4px 4px 0",
                    }}
                  />

                  {/* Indicator Pip for Current Date */}
                  <div
                    style={{
                      position: "absolute",
                      left: "42%",
                      top: "-6px",
                      width: "4px",
                      height: "20px",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0 0 10px rgba(255,255,255,0.9)",
                    }}
                  />
                </div>

                {/* Legend Below Timeline */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "12px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    borderTop: "1px solid var(--rule-light)",
                    paddingTop: "14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "var(--accent-violet)",
                        borderRadius: "2px",
                      }}
                    />
                    <span style={{ color: "var(--warm-white)" }}>
                      ACTIVE LICENSE (2025–2027)
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "var(--status-restricted)",
                        borderRadius: "2px",
                      }}
                    />
                    <span style={{ color: "var(--warm-white)" }}>
                      RENEWAL WINDOW (Q4 2027)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                borderLeft: "2px solid var(--accent-violet)",
                paddingLeft: "16px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--warm-white-muted)",
                  lineHeight: 1.55,
                }}
              >
                MediaMerge monitors contractual dates continuously. In-progress
                renewals alert legal teams 90 days prior to expiration,
                preventing accidental blackouts or breach liabilities.
              </p>
            </div>
          </div>

          {/* Right Column: Territory Panel & Status */}
          <div
            style={{
              gridColumn: "span 5",
              backgroundColor: "var(--ink-surface)",
              border: "1px solid var(--rule-light)",
              padding: "clamp(24px, 4vw, 40px)",
              borderRadius: "var(--radius-xs)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "24px",
            }}
            className="rights-col-territory"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <span className="meta-label">TERRITORY POLICY PANEL</span>
                <span
                  className="meta-label"
                  style={{ color: "var(--muted-gray)" }}
                >
                  SELECT TO SIMULATE
                </span>
              </div>

              {/* Territory Selection Panel from Prompt:
                  India           Available
                  United Kingdom  Available
                  United States   Restricted
              */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {(["India", "United Kingdom", "United States"] as const).map(
                  (country) => {
                    const isSelected = selectedTerritory === country;
                    const item = territoryData[country];

                    return (
                      <button
                        key={country}
                        onClick={() => setSelectedTerritory(country)}
                        aria-pressed={isSelected}
                        style={{
                          padding: "16px 20px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: isSelected
                            ? "rgba(114, 87, 255, 0.12)"
                            : "#121212",
                          border: isSelected
                            ? "1px solid var(--accent-violet)"
                            : "1px solid var(--rule-light)",
                          borderRadius: "var(--radius-xs)",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "all var(--transition-fast)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <Globe2
                            size={16}
                            style={{
                              color: isSelected
                                ? "var(--accent-violet)"
                                : "var(--muted-gray)",
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "1.05rem",
                              fontWeight: 500,
                              color: "var(--warm-white)",
                            }}
                          >
                            {country}
                          </span>
                        </div>

                        <span
                          className="font-mono"
                          style={{
                            fontSize: "0.8125rem",
                            color: item.allowed
                              ? "var(--status-active)"
                              : "var(--status-restricted)",
                            fontWeight: 500,
                          }}
                        >
                          {item.status}
                        </span>
                      </button>
                    );
                  },
                )}
              </div>

              {/* Real-time Status Card */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "20px",
                  backgroundColor: "#0c0c0c",
                  border: "1px solid var(--rule-light)",
                  borderRadius: "var(--radius-xs)",
                }}
              >
                <span className="meta-label">REAL-TIME PLAYBACK DECISION</span>

                {/* Required Clear Status: "Playback allowed" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                    marginBottom: "8px",
                  }}
                >
                  {current.allowed ? (
                    <CheckCircle2
                      size={20}
                      style={{ color: current.statusColor }}
                    />
                  ) : (
                    <Lock size={20} style={{ color: current.statusColor }} />
                  )}
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      color: current.statusColor,
                    }}
                  >
                    {current.statusText}
                  </p>
                </div>

                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--soft-gray)",
                    lineHeight: 1.5,
                    marginTop: "6px",
                  }}
                >
                  {current.clause}
                </p>
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--rule-light)",
                paddingTop: "16px",
              }}
            >
              <span className="meta-label">CALM, ACCESSIBLE GOVERNANCE</span>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--muted-gray)",
                  marginTop: "4px",
                }}
              >
                MediaMerge removes anxiety from distribution. Rights become
                predictable rules that power playback safely.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .rights-grid {
            grid-template-columns: 1fr !important;
          }
          .rights-col-timeline, .rights-col-territory {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
