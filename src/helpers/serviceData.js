// src/data/servicesData.js

// Import all your specific icons here
import iconFlux from '../assets/flux.png';
// Agar baaki icons nahi hain to temporarily flux wala hi use karein ya naye import karein
import iconDrift from '../assets/pulse6.png'; // Example path
import iconSummit from '../assets/pulse4.png'; // Example path
import iconAtlas from '../assets/pulse5.png'; // Example path
import iconSignal from '../assets/pulse3.png'; // Example path

export const servicesData = {
  flux: {
    name: "Flux", 
    title: "Flux (Social media)", 
    heroSubtitle: "Your always-on creative engine.", 
    icon: iconFlux,
    accentColor: "#EC4899", // Pink
    headline: "Your always-on creative engine.",
    description: "Flux designs, schedules, and posts content that grows your audience and keeps your brand active across social channels, without the grind. It adapts to trends, learns your tone, and makes sure you show up consistently where your customers hang out.", 
    corePromise: "Grow your presence without spending your life on content.", 
    features: [
      "Social content creation",
      "Auto-scheduling",
      "Multi-platform posting",
      "Trend + hashtag suggestions",
      "Insights lite"
    ] 
  },
  drift: {
    name: "Drift",
    title: "Drift (Email Marketing)", 
    heroSubtitle: "Warm leads, clearer funnels, stronger revenue.", 
    icon: iconDrift,
    accentColor: "#2DD4BF", // Teal
    headline: "Warm leads, clearer funnels, stronger revenue.",
    description: "Drift writes, optimises, and sends emails that land, campaigns, newsletters, onboarding flows, triggers, and personalisation baked in. Whether you’re nurturing or converting, Drift keeps your pipeline moving.", 
    corePromise: "Emails that perform, at a pace your business can feel.", 
    features: [
      "Email writing + optimisation",
      "Automations + flows",
      "Campaign setup",
      "List segmentation",
      "Performance reports"
    ] 
  },
  summit: {
    name: "Summit",
    title: "Summit (Customer Success)", 
    heroSubtitle: "Keep customers happy, heard, and supported, automatically.", 
    icon: iconSummit,
    accentColor: "#A78BFA", // Purple
    headline: "Keep customers happy, heard, and supported, automatically.",
    description: "Summit manages customer conversations, responds to queries, resolves issues, escalates when needed, and keeps your customers feeling cared for. It learns your product, your policies, and your tone.", 
    corePromise: "Consistent, reliable customer care that scales with you.", 
    features: [
      "Customer chat & email handling",
      "Issue triage",
      "Escalations",
      "Saved replies + templates",
      "CS metrics"
    ] 
  },
  atlas: {
    name: "Atlas",
    title: "Atlas (Virtual Assistant)", 
    heroSubtitle: "Your dependable operator, organised, calm, and fast.", 
    icon: iconAtlas,
    accentColor: "#60A5FA", // Blue
    headline: "Your dependable operator, organised, calm, and fast.",
    description: "Atlas handles your admin, tasks, research, scheduling, documentation, data entry, and everything that slows you down. Think “operations assistant” without the overhead.", 
    corePromise: "Your workload stays light, even when your business doesn’t.", 
    features: [
      "Daily admin tasks",
      "Scheduling",
      "Research & notes",
      "Documentation",
      "Process guidance"
    ] 
  },
  signal: {
    name: "Signal",
    title: "Signal (Copywriting)", 
    heroSubtitle: "Clear, compelling words for every touchpoint.", 
    icon: iconSignal,
    accentColor: "#22D3EE", // Cyan
    headline: "Clear, compelling words for every touchpoint.",
    description: "Signal writes with purpose, website copy, product descriptions, ads, blogs, scripts, templates, sales materials. It adapts to your brand voice and ensures everything you publish sounds like you at your best.", 
    corePromise: "Your brand feels sharp, consistent, and unmistakably you.", 
    features: [
      "Copywriting for all channels",
      "Editing + rewriting",
      "Brand tone calibration",
      "Ad copy + landing pages",
      "Multi-format writing"
    ] 
  }
};