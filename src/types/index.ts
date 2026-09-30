export type Stage = "SOURCE" | "PROCESS" | "RIGHTS" | "PUBLISH" | "PLAY";

export interface StageDetail {
  id: Stage;
  name: string;
  status: string;
  metric: string;
  description: string;
  badge: string;
}

export interface ProblemItem {
  id: "FILE" | "VERSION" | "RIGHT" | "AUDIENCE" | "SCREEN";
  title: string;
  summary: string;
  detail: string;
  impact: string;
}

export interface MomentItem {
  number: string;
  title: string;
  quote: string;
  description: string;
  input: string;
  output: string;
  auditRule: string;
}

export interface VersionInfo {
  version: string;
  label: string;
  aspect: string;
  resolution: string;
  colorSpace: string;
  audio: string;
  date: string;
  approvedBy: string;
  checksum: string;
  isCurrent: boolean;
}

export interface TerritoryRule {
  countryCode: string;
  countryName: string;
  status: "Available" | "Restricted" | "Under Negotiation";
  tiers: string[];
  window: string;
  clauseRef: string;
}

export interface SubtitleTrack {
  language: string;
  code: string;
  format: "WebVTT" | "TTML" | "SRT";
  syncStatus: "Verified (0 frame drift)" | "Pending Sync";
  type: "Full Dialogue" | "SDH / Captions" | "Forced Narrative";
  linesCount: number;
}

export interface ActivityLog {
  timestamp: string;
  actor: string;
  action: string;
  hash: string;
}

export interface AssetRecord {
  title: string;
  assetId: string;
  directors: string;
  cinematographer: string;
  runtime: string;
  currentVersion: string;
  publishStatus: "Ready to publish" | "In Review" | "Published";
  audioLanguage: string;
  subtitles: string[];
  territory: string;
  licenseValidity: string;
  subscriptionTiers: string[];
  processingStatus: string;
  rightsConflict: string;
  thumbnailUrl: string;
  synopsis: string;
  versions: VersionInfo[];
  territories: TerritoryRule[];
  subtitleTracks: SubtitleTrack[];
  activityLogs: ActivityLog[];
}

export interface CatalogItem {
  id: string;
  title: string;
  director: string;
  year: number;
  duration: string;
  genre: string;
  aspectRatio: string;
  image: string;
  reasonLabel: string;
  tier: string;
  audio: string;
  subtitles: string;
  clearanceNote: string;
}

export interface AudienceItem {
  id: string;
  role: string;
  quote: string;
  detail: string;
  metric: string;
}

export interface PrincipleItem {
  number: string;
  title: string;
  summary: string;
  doctrine: string;
}
