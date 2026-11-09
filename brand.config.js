// ─────────────────────────────────────────────────────────────
//  BRAND CONTENT — edit this file to make the hub yours.
//  Everything on the site is generated from the values below.
// ─────────────────────────────────────────────────────────────

const brand = {
  name: "Your Company",
  tagline: "Brand & Employer Brand Guidelines",
  version: "v1.0 · Updated November 2026",
  contactEmail: "brand@yourcompany.com", // who people should ask about the brand

  // ── LOGOS ──────────────────────────────────────────────────
  // Put your files in /public/logos and list them here.
  logos: [
    { name: "Primary logo", file: "/logos/logo-primary.svg", background: "light", usage: "Default for all communications on light backgrounds." },
    { name: "Reversed logo", file: "/logos/logo-reversed.svg", background: "dark", usage: "Use on dark or brand-coloured backgrounds." },
    { name: "Icon / mark", file: "/logos/logo-icon.svg", background: "light", usage: "Social avatars, favicons and small spaces only." },
  ],
  logoRules: {
    clearSpace: "Keep clear space equal to the height of the icon on every side.",
    minimumSize: "Minimum width: 120px on screen, 30mm in print.",
  },

  // ── COLOURS ────────────────────────────────────────────────
  // Only hex is required — RGB and CMYK are calculated automatically.
  // Add a `cmyk` value to override the calculation with your printer's spec.
  colours: [
    { group: "Primary", name: "Deep Navy", hex: "#14213D", usage: "Headlines, primary backgrounds" },
    { group: "Primary", name: "Signal Orange", hex: "#F77F00", usage: "Calls to action, highlights" },
    { group: "Secondary", name: "Sky", hex: "#4EA8DE", usage: "Charts, supporting graphics" },
    { group: "Secondary", name: "Mint", hex: "#52B788", usage: "Success states, positive data" },
    { group: "Neutral", name: "Ink", hex: "#1B1B1F", usage: "Body text" },
    { group: "Neutral", name: "Stone", hex: "#E9E6DF", usage: "Panels, page backgrounds" },
    { group: "Neutral", name: "White", hex: "#FFFFFF", usage: "Backgrounds, reversed text" },
  ],

  // ── TYPOGRAPHY ─────────────────────────────────────────────
  // `googleFont` loads the font from Google Fonts so the specimen renders correctly.
  typography: [
    { role: "Headings", family: "Poppins", googleFont: "Poppins:wght@600;700", weights: "SemiBold 600, Bold 700", fallback: "Arial, sans-serif", sample: "We build careers, not just placements." },
    { role: "Body", family: "Inter", googleFont: "Inter:wght@400;500;600", weights: "Regular 400, Medium 500", fallback: "Arial, sans-serif", sample: "Clear, warm and straightforward. Every sentence should help the reader take their next step." },
  ],
  typeScale: [
    { name: "H1", size: "48px", lineHeight: "1.1" },
    { name: "H2", size: "32px", lineHeight: "1.2" },
    { name: "H3", size: "22px", lineHeight: "1.3" },
    { name: "Body", size: "16px", lineHeight: "1.6" },
    { name: "Small", size: "13px", lineHeight: "1.5" },
  ],

  // ── TONE OF VOICE ──────────────────────────────────────────
  voice: {
    summary: "We sound like a knowledgeable friend: confident, human and to the point.",
    traits: [
      { trait: "Clear", weAre: "Plain English, short sentences, one idea at a time.", weAreNot: "Jargon-heavy, vague or corporate." },
      { trait: "Warm", weAre: "Friendly, encouraging and people-first.", weAreNot: "Over-familiar, gushing or salesy." },
      { trait: "Confident", weAre: "Direct and backed by expertise.", weAreNot: "Arrogant, pushy or full of hype." },
    ],
    examples: [
      { context: "Email sign-off", do: "Speak soon — any questions, just reply here.", dont: "Please do not hesitate to contact the undersigned." },
      { context: "Website headline", do: "Find work that fits your life.", dont: "Leveraging synergies to optimise your career journey." },
    ],
  },

  // ── DO'S AND DON'TS ────────────────────────────────────────
  dos: [
    "Use the primary logo wherever possible",
    "Keep text on brand colours at accessible contrast (WCAG AA)",
    "Use real photography of our people and places",
    "Leave plenty of white space",
  ],
  donts: [
    "Stretch, rotate or recolour the logo",
    "Place the logo on busy photos without a solid panel",
    "Use more than two typefaces in one design",
    "Use stock images that feel staged or generic",
  ],

  // ── RECRUITMENT / EMPLOYER BRAND ───────────────────────────
  recruitment: {
    evp: {
      headline: "Do the best work of your career, with people who have your back.",
      body: "Our employer value proposition (EVP) is the promise we make to everyone who joins us. Every job ad, careers post and candidate conversation should reflect it.",
      pillars: [
        { title: "Growth", text: "Clear progression paths, funded training and mentoring from day one." },
        { title: "Flexibility", text: "Hybrid working and flexible hours built around real life." },
        { title: "Belonging", text: "An inclusive team where every voice is heard and valued." },
        { title: "Impact", text: "Work that makes a visible difference to clients and communities." },
      ],
    },
    values: ["Be honest", "Own it", "Win together", "Keep learning"],
    benefits: [
      "25 days holiday + bank holidays",
      "Hybrid & flexible working",
      "Annual learning budget",
      "Enhanced parental leave",
      "Employee assistance programme",
      "Team socials & recognition awards",
    ],
    hiringProcess: [
      { step: "Apply", detail: "Short online application — a CV is all we need.", time: "5 mins" },
      { step: "Intro call", detail: "Friendly 20-minute chat with a recruiter.", time: "Within 5 days" },
      { step: "Interview", detail: "Meet the hiring manager and a future teammate.", time: "1 hour" },
      { step: "Offer", detail: "Decision and feedback, whatever the outcome.", time: "Within 48 hours" },
    ],
    jobAdGuidelines: [
      "Lead with what the candidate gets, then what the role involves",
      "Keep 'must-haves' to 5 or fewer — long lists put off great applicants",
      "Always show a salary range",
      "Use 'you' and 'we', not 'the successful candidate'",
      "Include our inclusion statement and an adjustments offer",
    ],
    inclusiveLanguage: [
      { avoid: "Rockstar / ninja / guru", use: "Skilled / experienced" },
      { avoid: "Young and dynamic team", use: "Energetic, supportive team" },
      { avoid: "Native English speaker", use: "Fluent in written and spoken English" },
      { avoid: "Must have a driving licence (when not essential)", use: "Able to travel to client sites" },
      { avoid: "Manpower / chairman", use: "Workforce / chair" },
    ],
    boilerplate: [
      { title: "About us (job ads)", text: "Your Company is a growing team of [X] people helping [who] to [do what]. We're proud of our culture of honesty, ownership and learning — and we're looking for people who want to grow with us." },
      { title: "Inclusion statement", text: "We welcome applications from everyone, regardless of background, identity or circumstance. If you need any adjustments during the application process, just let us know — we're happy to help." },
      { title: "Candidate rejection email", text: "Hi [Name], thank you for taking the time to apply and speak with us about the [Role] position. On this occasion we've decided to move forward with another candidate, but we were impressed by [specific strength] and would love to stay in touch for future roles. Wishing you all the best, [Your name]" },
      { title: "Interview invitation", text: "Hi [Name], great news — we'd love to invite you to interview for the [Role] role. The interview will be on [date] at [time] with [names], and will last about an hour. Let us know if you need any adjustments. Looking forward to meeting you! [Your name]" },
    ],
    socialSpecs: [
      { platform: "LinkedIn post", size: "1200 × 1200 px", note: "Square works best in feed" },
      { platform: "LinkedIn banner", size: "1584 × 396 px", note: "Keep text clear of the profile photo area" },
      { platform: "Instagram post", size: "1080 × 1350 px", note: "Portrait 4:5" },
      { platform: "Instagram / TikTok story", size: "1080 × 1920 px", note: "Keep text in the centre 1080 × 1420" },
    ],
    hashtags: ["#WeAreHiring", "#LifeAtYourCompany", "#Careers"],
  },
};

export default brand;
