import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
  CheckCircle2,
  ShieldCheck,
  Film,
  HardDrive,
  Cpu,
  Radio,
  Sparkles,
} from "lucide-react";
import { HERO_STAGES } from "../data/mockData";
import { Stage } from "../types";

interface HeroSectionProps {
  onExplore: () => void;
  onSeeHowItWorks: () => void;
  onOpenPlayer: (title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onSeeHowItWorks,
  onOpenPlayer,
}) => {
  const [activeStageIndex, setActiveStageIndex] = useState(2); // default on 'RIGHTS'
  const [aspectState, setAspectState] = useState<"2.39" | "1.85" | "16:9">(
    "2.39",
  );
  const [timelineProgress, setTimelineProgress] = useState(62); // 62% through the rights window

  // Subtle quiet movement of timeline marker
  useEffect(() => {
    const timer = setInterval(() => {
      setTimelineProgress((prev) => (prev >= 98 ? 10 : prev + 0.15));
    }, 120);
    return () => clearInterval(timer);
  }, []);

  const currentStage = HERO_STAGES[activeStageIndex];

  return (
    <section
      id="hero"
      aria-label="MediaMerge Hero Overview"
      style={{
        minHeight: "100vh",
        paddingTop: "calc(var(--nav-height) + 40px)",
        paddingBottom: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        borderBottom: "1px solid var(--rule-light)",
      }}
    >
      <div className="container" style={{ width: "100%" }}>
        {/* Microcopy header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "16px",
            marginBottom: "32px",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--rule-light)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-violet)",
              }}
            />
            <p
              className="meta-label"
              style={{ letterSpacing: "0.12em", color: "var(--soft-gray)" }}
            >
              THE MEDIA OPERATING SYSTEM
            </p>
          </div>

          <p className="meta-label" style={{ color: "var(--muted-gray)" }}>
            Assets / Rights / Playback
          </p>
        </div>

        {/* Editorial Title Block */}
        <div style={{ maxWidth: "1100px", marginBottom: "48px" }}>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3.2rem, 8.5vw, 7.8rem)",
              lineHeight: 0.95,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              color: "var(--warm-white)",
              marginBottom: "28px",
            }}
          >
            Media has a lifecycle.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.15rem, 2.2vw, 1.65rem)",
              lineHeight: 1.45,
              fontWeight: 300,
              color: "var(--warm-white-muted)",
              maxWidth: "780px",
              letterSpacing: "-0.01em",
            }}
          >
            MediaMerge brings assets, rights, publishing, and streaming into one
            clear system.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "24px",
              marginTop: "36px",
            }}
          >
            <button
              onClick={onExplore}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.9375rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                backgroundColor: "var(--warm-white)",
                color: "var(--ink)",
                padding: "16px 28px",
                borderRadius: "var(--radius-xs)",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid var(--warm-white)",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-violet)";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.borderColor = "var(--accent-violet)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--warm-white)";
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.borderColor = "var(--warm-white)";
              }}
            >
              <span>Explore the system</span>
              <ArrowDown size={16} aria-hidden="true" />
            </button>

            <button
              onClick={onSeeHowItWorks}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.9375rem",
                color: "var(--soft-gray)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 8px",
                borderBottom: "1px solid transparent",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--warm-white)";
                e.currentTarget.style.borderBottomColor =
                  "var(--accent-violet)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--soft-gray)";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              <span>See how it works</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Five Stage Flow Indicator */}
        <div
          style={{
            marginBottom: "32px",
            backgroundColor: "var(--ink-surface)",
            border: "1px solid var(--rule-light)",
            padding: "16px 20px",
            borderRadius: "var(--radius-xs)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <span className="meta-label">ASSET LIFECYCLE REEL</span>
            <span
              className="meta-label"
              style={{ color: "var(--accent-violet)" }}
            >
              STAGE {activeStageIndex + 1} OF 5 // CLICK ANY TO INSPECT
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Lifecycle stages"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "8px",
            }}
          >
            {HERO_STAGES.map((stg, idx) => {
              const isSelected = activeStageIndex === idx;
              return (
                <button
                  key={stg.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`stage-panel-${stg.id}`}
                  onClick={() => setActiveStageIndex(idx)}
                  style={{
                    textAlign: "left",
                    padding: "12px",
                    backgroundColor: isSelected
                      ? "rgba(114, 87, 255, 0.12)"
                      : "rgba(255, 255, 255, 0.02)",
                    border: isSelected
                      ? "1px solid var(--accent-violet)"
                      : "1px solid var(--rule-light)",
                    borderRadius: "var(--radius-xs)",
                    transition: "all var(--transition-fast)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        color: isSelected
                          ? "var(--accent-violet)"
                          : "var(--muted-gray)",
                      }}
                    >
                      0{idx + 1} · {stg.id}
                    </span>
                    {isSelected && (
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "var(--accent-violet)",
                        }}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: isSelected
                        ? "var(--warm-white)"
                        : "var(--soft-gray)",
                    }}
                  >
                    {stg.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quiet, Abstract Media Archive Composition (Visual Hero) */}
        <div
          id={`stage-panel-${currentStage.id}`}
          role="region"
          aria-label={`Detailed manifest for ${currentStage.name}`}
          style={{
            backgroundColor: "var(--ink-surface)",
            border: "1px solid var(--rule-light)",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            position: "relative",
            overflow: "hidden",
          }}
          className="hero-archive-grid"
        >
          {/* Left Column: Editorial Title Card & Archival Specs */}
          <div
            style={{
              gridColumn: "span 7",
              padding: "clamp(24px, 4vw, 44px)",
              borderRight: "1px solid var(--rule-light)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "24px",
            }}
            className="hero-archive-left"
          >
            <div>
              {/* Archival Catalog Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "20px",
                  borderBottom: "1px solid var(--rule-light)",
                  paddingBottom: "12px",
                }}
              >
                <span className="meta-label">
                  ARCHIVE REGISTRY: MM-ARC-0092
                </span>
                <span className="meta-tag">
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--status-active)",
                    }}
                  />
                  PROVENANCE: VERIFIED
                </span>
              </div>

              {/* Large Editorial Title Card */}
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
                  lineHeight: 1.1,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "var(--warm-white)",
                  marginBottom: "8px",
                }}
              >
                The Last Monsoon
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  color: "var(--muted-gray)",
                  marginBottom: "20px",
                }}
              >
                Directed by Elias Thorne · Cinematography by Sarah Chen · 35mm
                Handheld
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--soft-gray)",
                  lineHeight: 1.6,
                  maxWidth: "560px",
                  marginBottom: "28px",
                }}
              >
                {currentStage.description}
              </p>

              {/* Metadata Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--rule-light)",
                }}
              >
                <div>
                  <span className="meta-label">MASTER FORMAT</span>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--warm-white)",
                      marginTop: "2px",
                    }}
                  >
                    ProRes 422 HQ (4K DCI)
                  </p>
                </div>
                <div>
                  <span className="meta-label">CURRENT ASPECT</span>
                  <div
                    style={{ display: "flex", gap: "6px", marginTop: "4px" }}
                  >
                    {(["2.39", "1.85", "16:9"] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setAspectState(r)}
                        aria-label={`Switch frame preview to ${r}`}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6875rem",
                          padding: "2px 6px",
                          border:
                            aspectState === r
                              ? "1px solid var(--accent-violet)"
                              : "1px solid var(--rule-light)",
                          color:
                            aspectState === r
                              ? "var(--accent-violet)"
                              : "var(--muted-gray)",
                          backgroundColor:
                            aspectState === r
                              ? "rgba(114,87,255,0.08)"
                              : "transparent",
                        }}
                      >
                        {r}:1
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="meta-label">GEO CLEARANCE</span>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--warm-white)",
                      marginTop: "2px",
                    }}
                  >
                    India (IN) & UK (GB) Cleared
                  </p>
                </div>
                <div>
                  <span className="meta-label">LANGUAGE TRACKS</span>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--warm-white)",
                      marginTop: "2px",
                    }}
                  >
                    Audio: EN · Subs: EN, HI
                  </p>
                </div>
              </div>
            </div>

            {/* Three Required Status Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                paddingTop: "20px",
                borderTop: "1px solid var(--rule-light)",
              }}
            >
              {/* 1. Permission status */}
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--rule-light)",
                  borderRadius: "var(--radius-xs)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "4px",
                  }}
                >
                  <ShieldCheck
                    size={14}
                    style={{ color: "var(--accent-violet)" }}
                  />
                  <span className="meta-label" style={{ fontSize: "0.625rem" }}>
                    PERMISSION
                  </span>
                </div>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--warm-white)",
                  }}
                >
                  Active License
                </p>
                <span
                  style={{ fontSize: "0.625rem", color: "var(--muted-gray)" }}
                >
                  Thru Dec 2027
                </span>
              </div>

              {/* 2. Processing status */}
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--rule-light)",
                  borderRadius: "var(--radius-xs)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "4px",
                  }}
                >
                  <CheckCircle2
                    size={14}
                    style={{ color: "var(--status-active)" }}
                  />
                  <span className="meta-label" style={{ fontSize: "0.625rem" }}>
                    PROCESSING
                  </span>
                </div>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--warm-white)",
                  }}
                >
                  Complete
                </p>
                <span
                  style={{ fontSize: "0.625rem", color: "var(--muted-gray)" }}
                >
                  100% AV1 Normalized
                </span>
              </div>

              {/* 3. Playback status */}
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--rule-light)",
                  borderRadius: "var(--radius-xs)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "4px",
                  }}
                >
                  <Radio size={14} style={{ color: "var(--accent-violet)" }} />
                  <span className="meta-label" style={{ fontSize: "0.625rem" }}>
                    PLAYBACK
                  </span>
                </div>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--warm-white)",
                  }}
                >
                  Authorized
                </p>
                <span
                  style={{ fontSize: "0.625rem", color: "var(--muted-gray)" }}
                >
                  4K HDR Edge Ready
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Cropped Media Frame & Moving Timeline Indicator */}
          <div
            style={{
              gridColumn: "span 5",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#0c0c0c",
            }}
            className="hero-archive-right"
          >
            {/* Cropped Media Frame with Framing Lines */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                minHeight: "340px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}
            >
              {/* Frame Box with Dynamic Aspect Ratio */}
              <div
                style={{
                  width: "100%",
                  aspectRatio:
                    aspectState === "2.39"
                      ? "2.39 / 1"
                      : aspectState === "1.85"
                        ? "1.85 / 1"
                        : "16 / 9",
                  maxHeight: "320px",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(245, 242, 234, 0.25)",
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.8)",
                  transition:
                    "aspect-ratio 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <img
                  src="/images/the-last-monsoon.jpg"
                  alt="Cropped film still from The Last Monsoon showing misty mountain ridges"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "contrast(1.05) brightness(0.95)",
                  }}
                />

                {/* Reticle / Film Crop Guides */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: "none",
                    border: "1px dashed rgba(245, 242, 234, 0.15)",
                  }}
                />

                {/* Frame Crosshair */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "14px",
                    height: "14px",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "6px",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "rgba(255,255,255,0.4)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      background: "rgba(255,255,255,0.4)",
                    }}
                  />
                </div>

                {/* Interactive Play preview trigger */}
                <button
                  onClick={() => onOpenPlayer("The Last Monsoon")}
                  aria-label="Inspect screener player"
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    backgroundColor: "rgba(16, 16, 16, 0.85)",
                    border: "1px solid var(--rule-light)",
                    color: "var(--warm-white)",
                    padding: "6px 10px",
                    borderRadius: "var(--radius-xs)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                  }}
                >
                  <Play size={12} fill="var(--warm-white)" />
                  <span>PREVIEW SCREENER</span>
                </button>
              </div>
            </div>

            {/* Quiet Rights Timeline Indicator */}
            <div
              style={{
                padding: "20px 24px",
                borderTop: "1px solid var(--rule-light)",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span className="meta-label">RIGHTS WINDOW TIMELINE</span>
                <span
                  className="meta-label"
                  style={{ color: "var(--accent-violet)" }}
                >
                  ACTIVE: {Math.round(timelineProgress)}% ELAPSED
                </span>
              </div>

              {/* Visual timeline bar */}
              <div
                style={{
                  position: "relative",
                  height: "4px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "2px",
                  overflow: "visible",
                  marginTop: "12px",
                  marginBottom: "16px",
                }}
              >
                {/* Active License Window block */}
                <div
                  style={{
                    position: "absolute",
                    left: "0%",
                    width: "80%",
                    top: 0,
                    bottom: 0,
                    backgroundColor: "var(--accent-violet)",
                    opacity: 0.6,
                  }}
                />

                {/* Moving Timeline Indicator Needle */}
                <div
                  style={{
                    position: "absolute",
                    left: `${timelineProgress}%`,
                    top: "-6px",
                    width: "2px",
                    height: "16px",
                    backgroundColor: "var(--warm-white)",
                    boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                    transition: "left 120ms linear",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      bottom: "18px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.625rem",
                      whiteSpace: "nowrap",
                      color: "var(--warm-white)",
                      backgroundColor: "var(--ink)",
                      padding: "1px 4px",
                      border: "1px solid var(--rule-light)",
                    }}
                  >
                    NOW
                  </span>
                </div>
              </div>

              {/* Timeline boundary dates */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  color: "var(--muted-gray)",
                }}
              >
                <span>2025 (INGEST)</span>
                <span style={{ color: "var(--accent-violet)" }}>
                  ACTIVE EXCLUSIVE
                </span>
                <span>2027 (RENEWAL)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 900px) {
          .hero-archive-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-archive-left {
            grid-column: span 12 !important;
            border-right: none !important;
            border-bottom: 1px solid var(--rule-light) !important;
          }
          .hero-archive-right {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
