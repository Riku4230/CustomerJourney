export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://hiroto243.com/v1',
  API_KEY: process.env.NEXT_PUBLIC_API_KEY || 'app-1wlxy6XyKRoX3TjMSaFnNNPL',
  HEADERS: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY || 'app-1wlxy6XyKRoX3TjMSaFnNNPL'}`
  }
};