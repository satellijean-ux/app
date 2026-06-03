/**
 * types.ts
 * Types for the Pre-Hospital Care (APH) Offline Application
 */

export type SeverityType = 'critical' | 'urgent' | 'moderate' | 'informative';

export interface CatalogItem {
  id: string;
  name: string;
  scientificName?: string;
  dangerLevel: 'high' | 'medium' | 'low';
  symptoms: string[];
  treatment: string[];
  description: string;
  visualIdentifier: string; // Describes visual aspect or has an SVG silhouette/pattern description
  image?: string; // Local asset file path or drawable variable reference (e.g. img_jararaca)
}

export interface Protocol {
  id: string;
  title: string;
  icon: string; // name of Lucide icon
  severity: SeverityType;
  meta: string; // Category or general timing index
  shortDesc: string;
  immediateAction: string; // The first critical 5-second action
  steps: string[]; // Standard operational steps ordered
  forbidden: string[]; // Contra-indicações ou o que NÃO fazer (crucial)
  catalogTitle?: string;
  catalog?: CatalogItem[]; // Special databases for snakes or plants
  voiceKeywords: string[]; // For voice command recognition trigger match
}
