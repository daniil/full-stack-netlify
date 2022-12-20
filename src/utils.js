export const apiBasePath = process.env.NODE_ENV === 'development'
  ? `/api`
  : `/.netlify/functions/api`;