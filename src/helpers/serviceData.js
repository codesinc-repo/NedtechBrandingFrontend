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
    name: "Flux", // Used for ID or logic
    title: "Flux (Social media)", // Hero Title
    heroSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma.",
    icon: iconFlux,
    accentColor: "#EC4899", // Pink
    headline: "Your always-on creative engine.",
    description: "Flux designs, schedules, and posts content that grows your audience and keeps your brand active across social channels, without the grind.",
    corePromise: "Grow your presence without spending your life on content.",
    features: [
      "Social content creation",
      "Trend and hashtag suggestions",
      "Auto-scheduling",
      "Insights lite",
      "Multi-platform posting"
    ]
  },
  drift: {
    name: "Drift",
    title: "Drift (Email marketing)",
    heroSubtitle: "Warm leads, clearer funnels, stronger revenue. Drift writes, optimises, and sends emails that land.",
    icon: iconDrift,
    accentColor: "#2DD4BF", // Teal
    headline: "Precision email marketing at scale.",
    description: "Drift manages your newsletters, drip campaigns, and customer re-engagement flows to ensure you never miss a lead.",
    corePromise: "Turn your subscriber list into revenue on autopilot.",
    features: [
      "Automated Drip Campaigns",
      "Newsletter Generation",
      "Audience Segmentation",
      "A/B Testing",
      "Performance Analytics"
    ]
  },
  summit: {
    name: "Summit",
    title: "Summit (Customer success)",
    heroSubtitle: "Keep customers happy, heard, and supported, automatically.",
    icon: iconSummit,
    accentColor: "#A78BFA", // Purple
    headline: "Turn customers into loyal advocates.",
    description: "Summit drives customer success through automated onboarding, proactive check-ins, and feedback loops.",
    corePromise: "Maximize retention and reduce churn proactively.",
    features: [
      "Automated Onboarding",
      "Proactive Health Checks",
      "Churn Risk Detection",
      "Feedback Loops",
      "Success Milestones"
    ]
  },
  atlas: {
    name: "Atlas",
    title: "Atlas (Virtual assistant)",
    heroSubtitle: "Your dependable operator, organised, calm, and fast.",
    icon: iconAtlas,
    accentColor: "#60A5FA", // Blue
    headline: "Your intelligent virtual assistant.",
    description: "Atlas handles scheduling, inbox management, and basic research tasks, freeing up your mental bandwidth.",
    corePromise: "Reclaim 10+ hours of your week instantly.",
    features: [
      "Smart Scheduling",
      "Inbox Triage",
      "Meeting Prep",
      "Travel Booking",
      "Data Entry"
    ]
  },
  signal: {
    name: "Signal",
    title: "Signal (Copywriting)",
    heroSubtitle: "Clear, compelling words for every touchpoint.",
    icon: iconSignal,
    accentColor: "#22D3EE", // Cyan
    headline: "Words that convert, on demand.",
    description: "Signal learns your brand voice to generate high-converting copy for ads, landing pages, and emails.",
    corePromise: "Never stare at a blank page again.",
    features: [
      "Ad Copy Generation",
      "Landing Page Content",
      "Brand Voice Adaptation",
      "SEO Optimization",
      "Content Repurposing"
    ]
  }
};