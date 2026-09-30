import React, { useState } from "react";
import { THE_LAST_MONSOON_ASSET } from "../data/mockData";
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Globe2,
  Subtitles,
  Activity,
  Layers,
  Sparkles,
  ExternalLink,
  Play,
  Lock,
  Calendar,
  AlertCircle,
} from "lucide-react";

interface ProductPreviewProps {
  onOpenPlayer: (title: string) => void;
  onOpenExplorer: () => void;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({
  onOpenPlayer,
  onOpenExplorer,
}) => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "versions" | "rights" | "subtitles" | "activity"
  >("overview");
  const [selectedTerritory, setSelectedTerritory] = useState<string>("IN");

  const asset = THE_LAST_MONSOON_ASSET;

  return (
    <section
      id="preview"
      aria-labelledby="preview-heading"
      className="editorial-section"
      style={{
        backgroundColor: "var(--ink)",
        borderBottom: "1px solid var(--rule-light)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "880px", marginBottom: "40px" }}>
          <div className="section-label">OPERATIONS CONSOLE</div>
          <h2
            id="preview-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "var(--warm-white)",
              marginBottom: "16px",
            }}
          >
            Clarity behind the screen.
          </h2>

          {/* Small explanatory label specified by prompt */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 14px",
              backgroundColor: "rgba(114, 87, 255, 0.08)",
              border: "1px solid rgba(114, 87, 255, 0.25)",
              borderRadius: "var(--radius-xs)",
              marginBottom: "20px",
            }}
          >
            <ShieldCheck
              size={16}
              style={{ color: "var(--accent-violet)", flexShrink: 0 }}
            />
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                color: "var(--warm-white-muted)",
              }}
            >
              Before content reaches the viewer, the system already knows what
              it is allowed to do.
            </p>
          </div>
        </div>

        {/* Dense, Professional Admin Operations Interface Preview */}
        <div
          role="region"
          aria-label="MediaMerge Asset Management Admin Console"
          style={{
            backgroundColor: "var(--ink-surface)",
            border: "1px solid var(--rule-light)",
            borderRadius: "var(--radius-xs)",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Top Admin Window Bar */}
          <div
            style={{
              backgroundColor: "#0d0d0d",
              padding: "12px 20px",
              borderBottom: "1px solid var(--rule-light)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Asset Identifier & Status Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span
                className="font-mono"
                style={{ fontSize: "0.75rem", color: "var(--muted-gray)" }}
              >
                ASSET: {asset.assetId}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "rgba(46, 204, 113, 0.12)",
                  border: "1px solid rgba(46, 204, 113, 0.3)",
                  padding: "2px 8px",
                  borderRadius: "var(--radius-xs)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  color: "var(--status-active)",
                }}
              >
                <CheckCircle2 size={12} />
                {asset.publishStatus}
              </span>
            </div>

            {/* Quick Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() => onOpenPlayer(asset.title)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  backgroundColor: "var(--warm-white)",
                  color: "var(--ink)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  borderRadius: "var(--radius-xs)",
                }}
              >
                <Play size={12} fill="var(--ink)" />
                <span>Verify Playback</span>
              </button>

              <button
                onClick={onOpenExplorer}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  border: "1px solid var(--rule-light)",
                  color: "var(--soft-gray)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  borderRadius: "var(--radius-xs)",
                }}
              >
                <ExternalLink size={12} />
                <span>Simulate Token</span>
              </button>
            </div>
          </div>

          {/* Master Asset Summary Banner */}
          <div
            style={{
              padding: "clamp(20px, 3vw, 32px)",
              borderBottom: "1px solid var(--rule-light)",
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "24px",
              alignItems: "center",
            }}
            className="preview-summary-grid"
          >
            {/* Cropped Master Thumbnail */}
            <div
              style={{
                gridColumn: "span 4",
                position: "relative",
                aspectRatio: "16/9",
                borderRadius: "var(--radius-xs)",
                overflow: "hidden",
                border: "1px solid var(--rule-light)",
              }}
              className="preview-thumb-col"
            >
              <img
                src={asset.thumbnailUrl}
                alt="Thumbnail of The Last Monsoon"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  left: "8px",
                  backgroundColor: "rgba(16, 16, 16, 0.85)",
                  padding: "2px 6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--warm-white)",
                  border: "1px solid var(--rule-light)",
                }}
              >
                4K DCI MASTER
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  backgroundColor: "rgba(16, 16, 16, 0.85)",
                  padding: "2px 6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--soft-gray)",
                }}
              >
                {asset.runtime}
              </div>
            </div>

            {/* Asset Metadata & Core Display Specs */}
            <div
              style={{
                gridColumn: "span 8",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
              className="preview-info-col"
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      color: "var(--warm-white)",
                    }}
                  >
                    {asset.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--accent-violet)",
                      padding: "2px 8px",
                      border: "1px solid var(--accent-violet)",
                      borderRadius: "var(--radius-xs)",
                    }}
                  >
                    {asset.currentVersion}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    color: "var(--muted-gray)",
                    marginTop: "4px",
                  }}
                >
                  Directed by {asset.directors} · DP: {asset.cinematographer}
                </p>
              </div>

              {/* Required Metadata Specs Matrix */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "12px",
                  padding: "14px",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--rule-light)",
                  borderRadius: "var(--radius-xs)",
                }}
              >
                <div>
                  <span className="meta-label" style={{ fontSize: "0.625rem" }}>
                    LANGUAGE
                  </span>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--warm-white)",
                      marginTop: "2px",
                    }}
                  >
                    {asset.audioLanguage}
                  </p>
                </div>

                <div>
                  <span className="meta-label" style={{ fontSize: "0.625rem" }}>
                    SUBTITLES
                  </span>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--warm-white)",
                      marginTop: "2px",
                    }}
                  >
                    {asset.subtitles.join(", ")}
                  </p>
                </div>

                <div>
                  <span className="meta-label" style={{ fontSize: "0.625rem" }}>
                    TERRITORY
                  </span>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--warm-white)",
                      marginTop: "2px",
                    }}
                  >
                    {asset.territory}
                  </p>
                </div>

                <div>
                  <span className="meta-label" style={{ fontSize: "0.625rem" }}>
                    LICENSE VALIDITY
                  </span>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--accent-violet)",
                      marginTop: "2px",
                    }}
                  >
                    {asset.licenseValidity}
                  </p>
                </div>

                <div>
                  <span className="meta-label" style={{ fontSize: "0.625rem" }}>
                    SUBSCRIPTION TIER
                  </span>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--warm-white)",
                      marginTop: "2px",
                    }}
                  >
                    {asset.subscriptionTiers.join(" & ")}
                  </p>
                </div>

                <div>
                  <span className="meta-label" style={{ fontSize: "0.625rem" }}>
                    PROCESSING
                  </span>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--status-active)",
                      marginTop: "2px",
                    }}
                  >
                    {asset.processingStatus}
                  </p>
                </div>

                <div>
                  <span className="meta-label" style={{ fontSize: "0.625rem" }}>
                    RIGHTS CONFLICT
                  </span>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--warm-white)",
                      marginTop: "2px",
                    }}
                  >
                    {asset.rightsConflict}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Navigation Tabs */}
          <div
            role="tablist"
            aria-label="Asset Admin Modules"
            style={{
              display: "flex",
              borderBottom: "1px solid var(--rule-light)",
              backgroundColor: "#0c0c0c",
              overflowX: "auto",
            }}
          >
            {(
              [
                "overview",
                "versions",
                "rights",
                "subtitles",
                "activity",
              ] as const
            ).map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`tab-panel-${tab}`}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "14px 22px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: isSelected
                      ? "var(--warm-white)"
                      : "var(--muted-gray)",
                    backgroundColor: isSelected
                      ? "var(--ink-surface)"
                      : "transparent",
                    borderRight: "1px solid var(--rule-light)",
                    borderBottom: isSelected
                      ? "2px solid var(--accent-violet)"
                      : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all var(--transition-fast)",
                  }}
                >
                  {tab === "overview" && <FileCheck size={14} />}
                  {tab === "versions" && <Layers size={14} />}
                  {tab === "rights" && <Globe2 size={14} />}
                  {tab === "subtitles" && <Subtitles size={14} />}
                  {tab === "activity" && <Activity size={14} />}
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels */}
          <div
            id={`tab-panel-${activeTab}`}
            role="tabpanel"
            style={{
              padding: "clamp(20px, 3.5vw, 36px)",
              backgroundColor: "var(--ink-surface)",
            }}
          >
            {/* 1. OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  gap: "28px",
                }}
              >
                <div style={{ gridColumn: "span 7" }} className="tab-col-left">
                  <h4 className="meta-label" style={{ marginBottom: "10px" }}>
                    SYNOPSIS & EDITORIAL CONTEXT
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      lineHeight: 1.65,
                      color: "var(--warm-white-muted)",
                      marginBottom: "24px",
                    }}
                  >
                    {asset.synopsis}
                  </p>

                  <h4 className="meta-label" style={{ marginBottom: "12px" }}>
                    AUTOMATED COMPLIANCE VERIFICATION CHECKLIST
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: "var(--status-active)" }}
                      />
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--warm-white)",
                        }}
                      >
                        EBU R128 Loudness Compliance: Passed (-24.1 LUFS)
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: "var(--status-active)" }}
                      />
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--warm-white)",
                        }}
                      >
                        Subtitles Timecode Drift: 0ms drift across 842 dialogue
                        cues
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: "var(--status-active)" }}
                      />
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--warm-white)",
                        }}
                      >
                        Licensor Grant: India Exclusive SVOD / Free Broadcast
                        Holdback Active
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    gridColumn: "span 5",
                    backgroundColor: "#121212",
                    border: "1px solid var(--rule-light)",
                    padding: "20px",
                    borderRadius: "var(--radius-xs)",
                  }}
                  className="tab-col-right"
                >
                  <span className="meta-label">TECHNICAL SIGNATURE</span>
                  <div
                    style={{
                      marginTop: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          color: "var(--muted-gray)",
                        }}
                      >
                        CHECKSUM SHA-256
                      </span>
                      <p
                        className="font-mono"
                        style={{
                          fontSize: "0.6875rem",
                          color: "var(--soft-gray)",
                          wordBreak: "break-all",
                        }}
                      >
                        sha256:7f3b8901e8c9d4b0a112df590aa2781b3ec219f8a901844b2ec891244ac
                      </p>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          color: "var(--muted-gray)",
                        }}
                      >
                        COLOR MATRIX
                      </span>
                      <p
                        className="font-mono"
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--warm-white)",
                        }}
                      >
                        DCI-P3 D65 White Point · Rec.709 Broadcast Pass Included
                      </p>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          color: "var(--muted-gray)",
                        }}
                      >
                        EDGE DELIVERY ENCRYPTION
                      </span>
                      <p
                        className="font-mono"
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--warm-white)",
                        }}
                      >
                        AES-128 Tokenized Key Rotation with Geo-Header
                        Validation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. VERSIONS TAB */}
            {activeTab === "versions" && (
              <div>
                <div
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="meta-label">
                    LINEAGE GRAPH (3 REVISIONS RECORDED)
                  </span>
                  <span
                    className="meta-label"
                    style={{ color: "var(--status-active)" }}
                  >
                    ACTIVE VERSION: VERSION 03
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {asset.versions.map((ver) => (
                    <div
                      key={ver.version}
                      style={{
                        padding: "16px",
                        border: ver.isCurrent
                          ? "1px solid var(--accent-violet)"
                          : "1px solid var(--rule-light)",
                        backgroundColor: ver.isCurrent
                          ? "rgba(114, 87, 255, 0.06)"
                          : "rgba(255, 255, 255, 0.01)",
                        borderRadius: "var(--radius-xs)",
                        display: "grid",
                        gridTemplateColumns: "repeat(12, 1fr)",
                        gap: "12px",
                        alignItems: "center",
                      }}
                      className="version-row"
                    >
                      <div style={{ gridColumn: "span 3" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span
                            className="font-mono"
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: 600,
                              color: "var(--warm-white)",
                            }}
                          >
                            {ver.version}
                          </span>
                          {ver.isCurrent && (
                            <span
                              style={{
                                fontSize: "0.625rem",
                                padding: "1px 6px",
                                backgroundColor: "var(--accent-violet)",
                                color: "#FFFFFF",
                                borderRadius: "2px",
                              }}
                            >
                              PUBLISH READY
                            </span>
                          )}
                        </div>
                        <p
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--soft-gray)",
                            marginTop: "2px",
                          }}
                        >
                          {ver.label}
                        </p>
                      </div>

                      <div style={{ gridColumn: "span 4" }}>
                        <span
                          className="meta-label"
                          style={{ fontSize: "0.625rem" }}
                        >
                          RESOLUTION & ASPECT
                        </span>
                        <p
                          className="font-mono"
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--warm-white)",
                          }}
                        >
                          {ver.resolution} · {ver.aspect}
                        </p>
                      </div>

                      <div style={{ gridColumn: "span 3" }}>
                        <span
                          className="meta-label"
                          style={{ fontSize: "0.625rem" }}
                        >
                          SIGNED OFF BY
                        </span>
                        <p
                          className="font-mono"
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--warm-white)",
                          }}
                        >
                          {ver.approvedBy}
                        </p>
                      </div>

                      <div style={{ gridColumn: "span 2", textAlign: "right" }}>
                        <span
                          className="font-mono"
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--muted-gray)",
                          }}
                        >
                          {ver.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. RIGHTS TAB */}
            {activeTab === "rights" && (
              <div>
                <div
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="meta-label">
                    TERRITORIAL CLEARANCE & HOLDBACK MATRIX
                  </span>
                  <span
                    className="meta-label"
                    style={{ color: "var(--accent-violet)" }}
                  >
                    GLOBAL CONTRACT REF: LIC-2024-MONSOON
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {asset.territories.map((terr) => {
                    const isAvail = terr.status === "Available";
                    return (
                      <div
                        key={terr.countryCode}
                        style={{
                          padding: "16px",
                          border: "1px solid var(--rule-light)",
                          backgroundColor: "#121212",
                          borderRadius: "var(--radius-xs)",
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
                          <span
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "1.1rem",
                              color: "var(--warm-white)",
                            }}
                          >
                            {terr.countryName} ({terr.countryCode})
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.6875rem",
                              padding: "2px 8px",
                              borderRadius: "var(--radius-xs)",
                              backgroundColor: isAvail
                                ? "rgba(46, 204, 113, 0.15)"
                                : "rgba(230, 126, 34, 0.15)",
                              color: isAvail
                                ? "var(--status-active)"
                                : "var(--status-restricted)",
                              border: isAvail
                                ? "1px solid rgba(46, 204, 113, 0.3)"
                                : "1px solid rgba(230, 126, 34, 0.3)",
                            }}
                          >
                            {terr.status}
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                            marginTop: "10px",
                          }}
                        >
                          <div>
                            <span
                              className="meta-label"
                              style={{ fontSize: "0.625rem" }}
                            >
                              WINDOW
                            </span>
                            <p
                              className="font-mono"
                              style={{
                                fontSize: "0.75rem",
                                color: "var(--soft-gray)",
                              }}
                            >
                              {terr.window}
                            </p>
                          </div>
                          <div>
                            <span
                              className="meta-label"
                              style={{ fontSize: "0.625rem" }}
                            >
                              GOVERNING CLAUSE
                            </span>
                            <p
                              className="font-mono"
                              style={{
                                fontSize: "0.75rem",
                                color: "var(--warm-white-muted)",
                              }}
                            >
                              {terr.clauseRef}
                            </p>
                          </div>
                          <div>
                            <span
                              className="meta-label"
                              style={{ fontSize: "0.625rem" }}
                            >
                              AUTHORIZED TIERS
                            </span>
                            <p
                              className="font-mono"
                              style={{
                                fontSize: "0.75rem",
                                color: "var(--accent-violet)",
                              }}
                            >
                              {terr.tiers.join(", ")}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 4. SUBTITLES TAB */}
            {activeTab === "subtitles" && (
              <div>
                <div
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="meta-label">
                    SYNCHRONIZED LOCALIZATION TRACKS
                  </span>
                  <span
                    className="meta-label"
                    style={{ color: "var(--status-active)" }}
                  >
                    2 PRODUCTION-CERTIFIED
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {asset.subtitleTracks.map((sub) => (
                    <div
                      key={sub.code}
                      style={{
                        padding: "14px 18px",
                        border: "1px solid var(--rule-light)",
                        backgroundColor: "#121212",
                        borderRadius: "var(--radius-xs)",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Subtitles
                          size={16}
                          style={{ color: "var(--accent-violet)" }}
                        />
                        <div>
                          <span
                            className="font-mono"
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: 600,
                              color: "var(--warm-white)",
                            }}
                          >
                            {sub.language} ({sub.code})
                          </span>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: "var(--muted-gray)",
                              marginLeft: "8px",
                            }}
                          >
                            {sub.type} · {sub.linesCount} dialogue lines
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                        }}
                      >
                        <span className="meta-tag">{sub.format}</span>
                        <span
                          className="font-mono"
                          style={{
                            fontSize: "0.75rem",
                            color: sub.syncStatus.includes("Verified")
                              ? "var(--status-active)"
                              : "var(--status-restricted)",
                          }}
                        >
                          {sub.syncStatus}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. ACTIVITY TAB */}
            {activeTab === "activity" && (
              <div>
                <div
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="meta-label">CRYPTOGRAPHIC AUDIT LOG</span>
                  <span
                    className="meta-label"
                    style={{ color: "var(--muted-gray)" }}
                  >
                    IMMUTABLE LEDGER ENTRIES
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {asset.activityLogs.map((log, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "12px 16px",
                        borderLeft: "2px solid var(--accent-violet)",
                        backgroundColor: "#121212",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.875rem",
                            color: "var(--warm-white)",
                          }}
                        >
                          {log.action}
                        </p>
                        <p
                          className="font-mono"
                          style={{
                            fontSize: "0.6875rem",
                            color: "var(--muted-gray)",
                            marginTop: "2px",
                          }}
                        >
                          Actor: {log.actor} · Hash: {log.hash}
                        </p>
                      </div>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.6875rem",
                          color: "var(--soft-gray)",
                        }}
                      >
                        {log.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .preview-summary-grid {
            grid-template-columns: 1fr !important;
          }
          .preview-thumb-col, .preview-info-col {
            grid-column: span 12 !important;
          }
          .tab-col-left, .tab-col-right {
            grid-column: span 12 !important;
          }
          .version-row {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};
