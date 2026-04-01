import axios from 'axios';
import { initialDashboardState, sampleArticlePreview } from '../data/mockData';

const http = axios.create({
  baseURL: 'https://mock.verilens.ai',
  timeout: 1200
});

export const fetchArticlePreview = async (url) => {
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (!url.includes('http')) {
    throw new Error('Enter a valid URL including http or https.');
  }

  return {
    ...sampleArticlePreview,
    source: new URL(url).hostname.replace('www.', '')
  };
};

export const fakeAnalyzeClaim = async (payload) => {
  try {
    await http.post('/analyze', payload);
  } catch {
    // In demo mode we always return local mock data.
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const confidenceBoost = payload?.text?.length > 120 ? 6 : 0;

  return {
    ...initialDashboardState,
    confidence: Math.min(initialDashboardState.confidence + confidenceBoost, 96)
  };
};
