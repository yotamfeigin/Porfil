// next.config.js
module.exports = {
  // Exporting as a static site
  // You can define exportPathMap to specify the pages to export
  // Here's an example if you have specific pages to export
  // Adjust the paths according to your actual pages
  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/portfolio': { page: '/portfolio' },
      '/contact': { page: '/contact' },
      // Add more pages as needed
    };
  },
};
