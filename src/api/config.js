const getHostAPIUrl = () => {
  // Dummy host url's
  if (import.meta.env.VITE_NODE_ENV === 'staging') {
    return `https://core-staging.site`;
  } else if (import.meta.env.VITE_NODE_ENV === 'uat') {
    return 'https://core-uat.site';
  } else if (import.meta.env.VITE_NODE_ENV === 'production') {
    return `https://core-prod.site`;
  }
};

export default getHostAPIUrl;
