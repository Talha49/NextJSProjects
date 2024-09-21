module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors', // Add the cors middleware
  'strapi::query', // Add the query middleware
  'strapi::body', // Add the body middleware
  'strapi::public', // Add the public middleware
  'strapi::favicon', // Add the favicon middleware
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];

