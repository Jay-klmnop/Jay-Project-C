export const getBaseUrl = () => {
  if (process.env.VERCEL_ENV === 'production') {
    return 'https://jay-project-c.vercel.app/';
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:5173';
};
