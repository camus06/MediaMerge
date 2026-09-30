import React, { useState } from "react";
import { CATALOG_ITEMS } from "../data/mockData";
import { CatalogItem } from "../types";
import {
  Play,
  Plus,
  Check,
  Volume2,
  Subtitles,
  ShieldCheck,
  Clock,
  Bookmark,
} from "lucide-react";

interface ViewerExperienceProps {
  onOpenPlayer: (title: string) => void;
}

export const ViewerExperience: React.FC<ViewerExperienceProps> = ({
  onOpenPlayer,
}) => {
  const [watchlist, setWatchlist] = useState<string[]>(["doc-01"]);

  const toggleWatchlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWatchlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const primaryItem = CATALOG_ITEMS[0]; // The Last Monsoon
  const otherItems = CATALOG_ITEMS.slice(1);

  return (
    <section
      id="viewer"
      aria-labelledby="viewer-heading"
      className="editorial-section"
      style={{
        backgroundColor: "var(--ink-surface)",
        borderBottom: "1px solid var(--rule-light)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "880px", marginBottom: "48px" }}>
          <div className="section-label">THE VIEWER EXPERIENCE</div>
          <h2
            id="viewer-heading"
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
            Discovery with a reason.
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
            MediaMerge explains why content is in front of the viewer. No
            algorithmic trickery; only honest editorial lineage and clear
            subscription entitlement.
          </p>
        </div>

        {/* Continue Watching Focus Panel */}
        <div
          style={{
            backgroundColor: "var(--ink)",
            border: "1px solid var(--rule-light)",
            borderRadius: "var(--radius-xs)",
            overflow: "hidden",
            marginBottom: "48px",
          }}
        >
          {/* Section banner */}
          <div
            style={{
              padding: "12px 24px",
              borderBottom: "1px solid var(--rule-light)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#0c0c0c",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-violet)",
                }}
              />
              <span className="meta-label">CONTINUE WATCHING</span>
            </div>

            <span className="meta-tag">
              <ShieldCheck
                size={12}
                style={{ color: "var(--status-active)" }}
              />
              Available with your plan
            </span>
          </div>

          {/* Continue Watching Feature Composition */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              alignItems: "stretch",
            }}
            className="continue-watching-grid"
          >
            {/* Cropped Master Image with Progress bar */}
            <div
              style={{
                gridColumn: "span 5",
                position: "relative",
                minHeight: "260px",
                backgroundColor: "#000000",
                borderRight: "1px solid var(--rule-light)",
                cursor: "pointer",
              }}
              className="continue-watching-img-col"
              onClick={() => onOpenPlayer(primaryItem.title)}
            >
              <img
                src={primaryItem.image}
                alt="Film still from The Last Monsoon"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.85,
                }}
              />

              {/* Progress bar at 42m */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <div
                  style={{
                    width: "48%",
                    height: "100%",
                    backgroundColor: "var(--accent-violet)",
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  backgroundColor: "rgba(16, 16, 16, 0.8)",
                  padding: "2px 6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  color: "var(--warm-white)",
                  border: "1px solid var(--rule-light)",
                }}
              >
                42m of 1h 28m
              </div>
            </div>

            {/* Details & Actions */}
            <div
              style={{
                gridColumn: "span 7",
                padding: "clamp(20px, 3.5vw, 36px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
              }}
              className="continue-watching-details-col"
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--accent-violet)",
                    letterSpacing: "0.04em",
                  }}
                >
                  REASON: {primaryItem.reasonLabel}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    color: "var(--warm-white)",
                    marginTop: "6px",
                    marginBottom: "8px",
                  }}
                >
                  {primaryItem.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    color: "var(--muted-gray)",
                    marginBottom: "16px",
                  }}
                >
                  Directed by {primaryItem.director} · {primaryItem.year} ·{" "}
                  {primaryItem.genre}
                </p>

                {/* Badges for audio, subtitles, plan */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span className="meta-tag">
                    <Volume2 size={12} />
                    English audio
                  </span>
                  <span className="meta-tag">
                    <Subtitles size={12} />
                    Hindi subtitles
                  </span>
                  <span className="meta-tag">
                    <Clock size={12} />
                    Aspect 2.39:1
                  </span>
                  <span
                    className="meta-tag"
                    style={{
                      color: "var(--status-active)",
                      borderColor: "rgba(46, 204, 113, 0.3)",
                    }}
                  >
                    {primaryItem.clearanceNote}
                  </span>
                </div>
              </div>

              {/* Action Buttons: Resume Button & Watchlist Action */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "14px",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--rule-light)",
                }}
              >
                <button
                  onClick={() => onOpenPlayer(primaryItem.title)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "var(--warm-white)",
                    color: "var(--ink)",
                    padding: "12px 22px",
                    borderRadius: "var(--radius-xs)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    border: "1px solid var(--warm-white)",
                    transition: "all var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--accent-violet)";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "var(--accent-violet)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--warm-white)";
                    e.currentTarget.style.color = "var(--ink)";
                    e.currentTarget.style.borderColor = "var(--warm-white)";
                  }}
                >
                  <Play size={14} fill="currentColor" />
                  <span>Resume at 42:15</span>
                </button>

                <button
                  onClick={(e) => toggleWatchlist(primaryItem.id, e)}
                  aria-label={
                    watchlist.includes(primaryItem.id)
                      ? "Remove from watchlist"
                      : "Add to watchlist"
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "transparent",
                    color: "var(--soft-gray)",
                    padding: "12px 18px",
                    borderRadius: "var(--radius-xs)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    border: "1px solid var(--rule-light)",
                    transition: "all var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--warm-white)";
                    e.currentTarget.style.color = "var(--warm-white)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--rule-light)";
                    e.currentTarget.style.color = "var(--soft-gray)";
                  }}
                >
                  {watchlist.includes(primaryItem.id) ? (
                    <>
                      <Check
                        size={14}
                        style={{ color: "var(--accent-violet)" }}
                      />
                      <span>In your watchlist</span>
                    </>
                  ) : (
                    <>
                      <Bookmark size={14} />
                      <span>Add to watchlist</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Curated Editorial Collection: "New in Documentaries" */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "24px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--rule-light)",
            }}
          >
            <div>
              <span className="meta-label">CURATED COLLECTION</span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--warm-white)",
                  marginTop: "4px",
                }}
              >
                New in documentaries
              </h3>
            </div>

            <span className="meta-label" style={{ color: "var(--muted-gray)" }}>
              CONTEXT-FIRST REASONING
            </span>
          </div>

          {/* Editorial Catalog Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {otherItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenPlayer(item.title)}
                style={{
                  backgroundColor: "var(--ink)",
                  border: "1px solid var(--rule-light)",
                  borderRadius: "var(--radius-xs)",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color var(--transition-fast)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(245, 242, 234, 0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--rule-light)")
                }
              >
                {/* Media Image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16/9",
                    overflow: "hidden",
                    backgroundColor: "#090909",
                  }}
                >
                  <img
                    src={item.image}
                    alt={`Film frame from ${item.title}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      right: "8px",
                      backgroundColor: "rgba(16, 16, 16, 0.85)",
                      padding: "2px 6px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.625rem",
                      color: "var(--warm-white)",
                      border: "1px solid var(--rule-light)",
                    }}
                  >
                    {item.duration}
                  </div>
                </div>

                {/* Content Details */}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {/* Reason Label - Required Non-AI Reasoning */}
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        color: "var(--accent-violet)",
                        letterSpacing: "0.04em",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {item.reasonLabel}
                    </span>

                    <h4
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        color: "var(--warm-white)",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--muted-gray)",
                        marginBottom: "14px",
                      }}
                    >
                      Dir. {item.director} · {item.year}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginBottom: "16px",
                      }}
                    >
                      <span
                        className="meta-tag"
                        style={{ fontSize: "0.6875rem" }}
                      >
                        Audio: {item.audio}
                      </span>
                      <span
                        className="meta-tag"
                        style={{ fontSize: "0.6875rem" }}
                      >
                        Subs: {item.subtitles}
                      </span>
                    </div>
                  </div>

                  {/* Rights Clearance & Watchlist Action */}
                  <div
                    style={{
                      borderTop: "1px solid var(--rule-light)",
                      paddingTop: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="meta-label"
                      style={{
                        fontSize: "0.625rem",
                        color: "var(--status-active)",
                      }}
                    >
                      Available with your plan
                    </span>

                    <button
                      onClick={(e) => toggleWatchlist(item.id, e)}
                      aria-label="Toggle watchlist"
                      style={{
                        padding: "4px",
                        color: watchlist.includes(item.id)
                          ? "var(--accent-violet)"
                          : "var(--muted-gray)",
                        transition: "color var(--transition-fast)",
                      }}
                    >
                      {watchlist.includes(item.id) ? (
                        <Check size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .continue-watching-grid {
            grid-template-columns: 1fr !important;
          }
          .continue-watching-img-col, .continue-watching-details-col {
            grid-column: span 12 !important;
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
};
