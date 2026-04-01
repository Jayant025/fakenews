export const heroFeatures = [
  {
    title: 'Real-time source intelligence',
    description: 'Continuously updated source reputation and publisher reliability metadata.'
  },
  {
    title: 'Multi-signal ML scoring',
    description: 'Combines style, sentiment, provenance, and claim consistency to estimate authenticity.'
  },
  {
    title: 'Explainable AI output',
    description: 'Transparent reasons and suspicious language highlights for every verdict.'
  }
];

export const sampleArticlePreview = {
  headline: 'Government announces surprise policy reversal amid election cycle',
  author: 'Maya Chen',
  source: 'Global Times Wire',
  date: 'March 30, 2026',
  image:
    'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?auto=format&fit=crop&w=1200&q=80'
};

export const initialDashboardState = {
  confidence: 74,
  likelihood: {
    real: 62,
    fake: 38
  },
  bias: 'Center-Left',
  sentiment: 'Fear-driven',
  sourceCredibility: 58,
  suspiciousTags: ['Loaded language', 'Anonymous source', 'No corroboration'],
  explanation:
    'The claim includes emotional framing and lacks independent source verification. Core facts are partially true but context is omitted, increasing misleading potential.',
  entities: [
    { label: 'Emily Rojas', type: 'Person' },
    { label: 'Public Integrity Bureau', type: 'Organization' },
    { label: 'March 2026', type: 'Date' },
    { label: 'Washington, D.C.', type: 'Location' },
    { label: 'unprecedented voter manipulation', type: 'Suspicious Claim' }
  ],
  annotatedText:
    'Emily Rojas stated in Washington, D.C. that the Public Integrity Bureau discovered unprecedented voter manipulation in March 2026, but the article provided no direct report references.'
};
