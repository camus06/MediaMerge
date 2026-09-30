import React from "react";
import { AUDIENCE_BLOCKS } from "../data/mockData";
import { Video, Workflow, Scale, Compass } from "lucide-react";

export const AudienceSection: React.FC = () => {
  const icons = [Video, Workflow, Scale, Compass];

  return (
    <section
      id="audience"
      aria-labelledby="audience-heading"
      className="editorial-section"
      style={{
        backgroundColor: "var(--ink-surface)",
        borderBottom: "1px solid var(--rule-light)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "880px", marginBottom: "56px" }}>
          <div className="section-label">FOR TEAMS & OPERATORS</div>
          <h2
            id="audience-heading"
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
            Built for the people behind the media.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              lineHeight: 1.6,
              color: "var(--soft-gray)",
              maxWidth: "700px",
            }}
          >
            Different roles hold different stakes in the media lifecycle.
            MediaMerge provides each stakeholder with clarity without friction.
          </p>
        </div>

        {/* Four Audience Blocks (No stock photos, pure typography & geometric icons) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--rule-light)",
            border: "1px solid var(--rule-light)",
            borderRadius: "var(--radius-xs)",
            overflow: "hidden",
          }}
        >
          {AUDIENCE_BLOCKS.map((block, idx) => {
            const IconComp = icons[idx];

            return (
              <div
                key={block.id}
                style={{
                  backgroundColor: "var(--ink)",
                  padding: "clamp(28px, 4vw, 40px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "32px",
                }}
              >
                <div>
                  {/* Role Header & Icon */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8125rem",
                        color: "var(--accent-violet)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      ROLE 0{idx + 1}
                    </span>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        border: "1px solid var(--rule-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--warm-white)",
                        borderRadius: "var(--radius-xs)",
                      }}
                    >
                      <IconComp size={16} />
                    </div>
                  </div>

                  {/* Role Name */}
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      color: "var(--warm-white)",
                      marginBottom: "14px",
                    }}
                  >
                    {block.role}
                  </h3>

                  {/* Primary Quote from Prompt */}
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.05rem",
                      lineHeight: 1.45,
                      color: "var(--warm-white-muted)",
                      marginBottom: "16px",
                    }}
                  >
                    “{block.quote}”
                  </p>

                  {/* Supporting technical detail */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      color: "var(--soft-gray)",
                    }}
                  >
                    {block.detail}
                  </p>
                </div>

                {/* Measurable Impact Metric */}
                <div
                  style={{
                    borderTop: "1px solid var(--rule-light)",
                    paddingTop: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="meta-label">PRIMARY OUTCOME</span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "var(--accent-violet)",
                    }}
                  >
                    {block.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
