import {
  AssetRecord,
  StageDetail,
  ProblemItem,
  MomentItem,
  CatalogItem,
  AudienceItem,
  PrincipleItem,
} from "../types";

export const HERO_STAGES: StageDetail[] = [
  {
    id: "SOURCE",
    name: "Source File",
    status: "Ingested",
    metric: "4K DCI · 84.2 GB",
    description:
      "ProRes 422 HQ camera master received with cryptographic manifest.",
    badge: "STAGE 01",
  },
  {
    id: "PROCESS",
    name: "Normalization",
    status: "Complete",
    metric: "AV1 + HEVC · 100%",
    description:
      "Bitrate ladders generated, audio normalized to -24 LUFS EBU R128.",
    badge: "STAGE 02",
  },
  {
    id: "RIGHTS",
    name: "Rights Policy",
    status: "Cleared",
    metric: "India & UK · 2027",
    description: "Exclusive SVOD window active. Territorial holdback enforced.",
    badge: "STAGE 03",
  },
  {
    id: "PUBLISH",
    name: "Channel Catalog",
    status: "Staged",
    metric: "Standard & Premium",
    description:
      "Collection placement validated against distributor covenants.",
    badge: "STAGE 04",
  },
  {
    id: "PLAY",
    name: "Client Playback",
    status: "Stream Authorized",
    metric: "Lat: 11ms · Edge CDN",
    description:
      "Token verified, geo-check passed, English/Hindi subtitle streams synced.",
    badge: "STAGE 05",
  },
];

export const PROBLEM_SEQUENCE: ProblemItem[] = [
  {
    id: "FILE",
    title: "FILE",
    summary:
      "A raw digital container with no inherent understanding of authority.",
    detail:
      "A source file is only bits on disk. It cannot answer who shot it, what rights were acquired, or which cut reflects the director’s final grade.",
    impact:
      "Without context, files become lost liabilities in cold cloud storage.",
  },
  {
    id: "VERSION",
    title: "VERSION",
    summary:
      "The critical delta between editorial work-in-progress and approved release.",
    detail:
      "Cut 02 had color corrections. Cut 03 fixed timecode sync. Cut 04 has legal sign-off. Teams confuse cuts and stream unapproved edits to public platforms.",
    impact: "Uncertainty over which version is golden causes costly re-runs.",
  },
  {
    id: "RIGHT",
    title: "RIGHT",
    summary:
      "The contractual boundary determining who may see what, where, and when.",
    detail:
      "Rights govern territorial exclusivity, broadcast vs. streaming windows, educational allowances, and expiration deadlines.",
    impact:
      "Spreadsheets fail silently; rights breaches trigger statutory claims.",
  },
  {
    id: "AUDIENCE",
    title: "AUDIENCE",
    summary:
      "Entitlement criteria matching viewers to content they have paid or qualified to see.",
    detail:
      "Subscribers have tiers; institutions have campus IP limits; festival pass-holders have 48-hour viewing keys.",
    impact:
      "A generic paywall does not honor granular institutional or tier covenants.",
  },
  {
    id: "SCREEN",
    title: "SCREEN",
    summary:
      "The instantaneous rendering of authorized video with appropriate tracks.",
    detail:
      "When the viewer presses play, the stream engine must verify rights, check geofencing, fetch certified subtitles, and dispatch keys in milliseconds.",
    impact:
      "True media delivery finishes only when permission meets the display.",
  },
];

export const FIVE_MOMENTS: MomentItem[] = [
  {
    number: "01",
    title: "Collect",
    quote:
      "Bring source files, versions, artwork, captions, and metadata together.",
    description:
      "Ingest raw media packages directly from camera cards, storage buckets, or transfer portals with deterministic SHA-256 validation.",
    input: "Camera raw / ProRes / WebVTT / Artwork PSDs",
    output: "Immutable package container with parentage",
    auditRule: "Check parent file hashes against deliverable specifications",
  },
  {
    number: "02",
    title: "Understand",
    quote: "Give every asset a clear identity, status, and history.",
    description:
      "Transform anonymous files into structured entities with timecode maps, audio channel topologies, frame rate flags, and lineage trees.",
    input: "Package container + ingest manifest",
    output: "Normalized asset record with verified version graph",
    auditRule: "Flag conflicting aspect ratios and uncalibrated color spaces",
  },
  {
    number: "03",
    title: "Govern",
    quote:
      "Connect content to owners, territories, dates, plans, and permissions.",
    description:
      "Bind contractual terms, holdback windows, distributor covenants, and talent releases directly into the digital media asset data model.",
    input: "Contract clauses + territory rules + tier flags",
    output: "Real-time rights evaluation ledger",
    auditRule: "Continuous territorial conflict engine check",
  },
  {
    number: "04",
    title: "Publish",
    quote:
      "Move approved media into the right collection, channel, or subscription tier.",
    description:
      "Automate release staging. MediaMerge ensures an asset only goes live if all territorial and talent authorizations are formally greenlit.",
    input: "Approved version + cleared rights token",
    output: "Channel manifest + edge CDN packaging rules",
    auditRule:
      "Block publishing if any required subtitle or clearance is missing",
  },
  {
    number: "05",
    title: "Play",
    quote: "Deliver the right content to the right audience at the right time.",
    description:
      "Low-latency streaming with per-request rights validation. Deliver synchronized multilingual subtitles and adaptive bitrates anywhere.",
    input: "Viewer playback request + bearer credentials",
    output: "Encrypted HLS/DASH stream + certified track manifest",
    auditRule: "Immediate stream severance upon rights window expiration",
  },
];

export const THE_LAST_MONSOON_ASSET: AssetRecord = {
  title: "The Last Monsoon",
  assetId: "MM-DOC-2024-0092",
  directors: "Elias Thorne",
  cinematographer: "Sarah Chen",
  runtime: "1h 28m 14s (2,118 frames)",
  currentVersion: "Version 03",
  publishStatus: "Ready to publish",
  audioLanguage: "English (Original 5.1 & Stereo)",
  subtitles: ["English", "Hindi"],
  territory: "India",
  licenseValidity: "Active until 31 December 2027",
  subscriptionTiers: ["Standard", "Premium"],
  processingStatus: "Complete",
  rightsConflict: "None",
  thumbnailUrl: "/images/the-last-monsoon.jpg",
  synopsis:
    "A contemplative study of meteorological observers stationed in the Western Ghats as seasonal rain patterns undergo permanent shifts. Recorded over three consecutive seasons on 35mm stock.",
  versions: [
    {
      version: "Version 03",
      label: "Festival Master (Approved)",
      aspect: "2.39:1 Anamorphic",
      resolution: "3840 × 1608 (4K UHD DCI)",
      colorSpace: "DCI-P3 D65 / Rec.709 Pass",
      audio: "English 5.1 Surround + 2.0 Stereo (EBU R128 Compliant)",
      date: "14 Sep 2026",
      approvedBy: "Elias Thorne (Director) & Sarah Chen (DP)",
      checksum: "sha256:7f3b8901e...4ac",
      isCurrent: true,
    },
    {
      version: "Version 02",
      label: "Director Color Master",
      aspect: "2.39:1 Anamorphic",
      resolution: "3840 × 1608",
      colorSpace: "ACEScc Rec.2020",
      audio: "English 5.1 Mix (Pre-QC)",
      date: "28 Aug 2026",
      approvedBy: "Sarah Chen (DP)",
      checksum: "sha256:4d12c8a91...90f",
      isCurrent: false,
    },
    {
      version: "Version 01",
      label: "Rough Assembly / Editorial",
      aspect: "16:9 Letterboxed",
      resolution: "1920 × 1080 (ProRes Proxy)",
      colorSpace: "Rec.709 Rec",
      audio: "Stereo Temp Track",
      date: "10 Jul 2026",
      approvedBy: "Lead Assistant Editor",
      checksum: "sha256:1a80ff32d...7bb",
      isCurrent: false,
    },
  ],
  territories: [
    {
      countryCode: "IN",
      countryName: "India",
      status: "Available",
      tiers: ["Standard", "Premium"],
      window: "01 Jan 2025 – 31 Dec 2027",
      clauseRef: "Sec 4.1: Direct SVOD Exclusive",
    },
    {
      countryCode: "GB",
      countryName: "United Kingdom",
      status: "Available",
      tiers: ["Premium"],
      window: "15 Mar 2025 – 31 Dec 2027",
      clauseRef: "Sec 4.3: Institutional & SVOD",
    },
    {
      countryCode: "US",
      countryName: "United States",
      status: "Restricted",
      tiers: ["None"],
      window: "Holdback until 01 Jan 2028",
      clauseRef: "Sec 9.2: Theatrical Windowing Agreement",
    },
  ],
  subtitleTracks: [
    {
      language: "English",
      code: "en-US",
      format: "WebVTT",
      syncStatus: "Verified (0 frame drift)",
      type: "SDH / Captions",
      linesCount: 842,
    },
    {
      language: "Hindi",
      code: "hi-IN",
      format: "WebVTT",
      syncStatus: "Verified (0 frame drift)",
      type: "Full Dialogue",
      linesCount: 839,
    },
    {
      language: "Spanish",
      code: "es-ES",
      format: "TTML",
      syncStatus: "Pending Sync",
      type: "Full Dialogue",
      linesCount: 820,
    },
  ],
  activityLogs: [
    {
      timestamp: "28 Sep 2026 · 14:12 UTC",
      actor: "System / Rights Engine",
      action:
        "Automated clearance verification passed for IN & GB territories.",
      hash: "0x992b...fc81",
    },
    {
      timestamp: "25 Sep 2026 · 09:30 UTC",
      actor: "Sarah Chen (DP)",
      action: "Verified color calibration LUT for DCI-P3 delivery.",
      hash: "0x438a...129d",
    },
    {
      timestamp: "22 Sep 2026 · 17:45 UTC",
      actor: "Elias Thorne (Director)",
      action: "Approved Version 03 as Master Release.",
      hash: "0x22f1...bb76",
    },
    {
      timestamp: "18 Sep 2026 · 11:04 UTC",
      actor: "Operations Team",
      action: "Ingested raw WebVTT Hindi subtitle track; sync test initiated.",
      hash: "0x17c0...3e4f",
    },
  ],
};

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "doc-01",
    title: "The Last Monsoon",
    director: "Elias Thorne",
    year: 2026,
    duration: "1h 28m",
    genre: "Documentary / Ecology",
    aspectRatio: "2.39:1",
    image: "/images/the-last-monsoon.jpg",
    reasonLabel: "Because you watched The Last Monsoon",
    tier: "Standard & Premium",
    audio: "English 5.1",
    subtitles: "English, Hindi",
    clearanceNote: "Playback cleared for your current region (IN).",
  },
  {
    id: "doc-02",
    title: "Echoes of Concrete",
    director: "Helena Vane",
    year: 2025,
    duration: "54m",
    genre: "Architecture / Acoustics",
    aspectRatio: "1.85:1",
    image: "/images/echoes-of-concrete.jpg",
    reasonLabel: "Under 30 minutes / Shortform Spotlight",
    tier: "Standard & Premium",
    audio: "Stereo Soundscape",
    subtitles: "English, German, French",
    clearanceNote: "Unlimited educational & subscriber stream license.",
  },
  {
    id: "doc-03",
    title: "North Atlantic Drift",
    director: "Jonas Lindqvist",
    year: 2026,
    duration: "1h 14m",
    genre: "Oceanography / Archive",
    aspectRatio: "2.39:1",
    image: "/images/north-atlantic-drift.jpg",
    reasonLabel: "Popular in your language",
    tier: "Premium Only",
    audio: "English & Swedish",
    subtitles: "English, Hindi, Japanese",
    clearanceNote: "Active broadcast and SVOD clearance until 2029.",
  },
  {
    id: "doc-04",
    title: "Chronicle of Frequencies",
    director: "Mira Sen",
    year: 2026,
    duration: "42m",
    genre: "Experimental / Radio History",
    aspectRatio: "4:3 Archival",
    image: "/images/echoes-of-concrete.jpg",
    reasonLabel: "New this week",
    tier: "Standard & Premium",
    audio: "Mono Restored",
    subtitles: "English, Bengali",
    clearanceNote: "Public domain restoration with certified master rights.",
  },
];

export const AUDIENCE_BLOCKS: AudienceItem[] = [
  {
    id: "creators",
    role: "Creators",
    quote: "Keep every version, credit, and permission connected.",
    detail:
      "Never wonder if a screener sent to an international distributor was the final grade or an unmastered cut. MediaMerge attaches director credits, technical specs, and talent approvals directly to the file payload.",
    metric: "Zero version drift",
  },
  {
    id: "teams",
    role: "Content teams",
    quote: "Move from upload to publication without losing context.",
    detail:
      "Coordinate between editorial suites, subtitle localization agencies, and marketing departments with one definitive source of truth. Approvals progress automatically as criteria are satisfied.",
    metric: "68% faster time-to-publish",
  },
  {
    id: "managers",
    role: "Rights managers",
    quote: "See what is active, expiring, restricted, or unresolved.",
    detail:
      "Contract clauses become live filters. View interactive territorial clearance heatmaps, get automated 90-day renewal warnings, and enforce contractual holdbacks without manual calendar tracking.",
    metric: "100% auditable provenance",
  },
  {
    id: "viewers",
    role: "Viewers",
    quote: "Find something meaningful and know why it is available to you.",
    detail:
      "A calm, deliberate discovery experience unmarred by manipulative algorithmic clickbait. Viewers see transparent editorial notes, format specifications, and verified subtitle credentials.",
    metric: "Respectful discovery",
  },
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "Visible",
    summary: "Status, rights, and availability should never be hidden.",
    doctrine:
      "When an asset cannot be played, the operator and the viewer both deserve to know why. Obscurity breeds compliance errors; total visibility ensures confidence.",
  },
  {
    number: "02",
    title: "Responsible",
    summary: "Access should follow permission.",
    doctrine:
      "Streaming media without honoring licensing boundaries harms creators, distributors, and audiences alike. Rights are not an afterthought; they are the governing architecture.",
  },
  {
    number: "03",
    title: "Accessible",
    summary:
      "The interface should work for different bodies, devices, languages, and ways of thinking.",
    doctrine:
      "We build to WCAG 2.2 AA standards from the foundational markup up. High contrast, precise keyboard navigation, predictable semantics, and certified captions are non-negotiable.",
  },
  {
    number: "04",
    title: "Human",
    summary: "Technology should reduce confusion, not create more of it.",
    doctrine:
      "We refuse buzzwords, deceptive growth tactics, and artificial complexity. Tools should feel like instruments: quiet, trustworthy, well-crafted, and calibrated for human intent.",
  },
];
