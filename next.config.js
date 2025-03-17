module.exports = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Next.js optimizations don't work with static exports
  },
};
