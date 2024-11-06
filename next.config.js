module.exports = {
  i18n: {
    locales: ['en', 'he'], // Replace with your actual locales
    defaultLocale: 'en', // Define the default locale
  },
  async exportPathMap() {
    return {
      '/': { page: '/', query: { __nextDefaultLocale: 'en' } },
      '/about': { page: '/about', query: { __nextDefaultLocale: 'en' } },
      '/portfolio': { page: '/portfolio', query: { __nextDefaultLocale: 'en' } },
      '/contact': { page: '/contact', query: { __nextDefaultLocale: 'en' } },
      // Add more pages with __nextDefaultLocale if needed
    };
  },
};
