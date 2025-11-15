/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // We leave Tailwind out to avoid the fs / fast-glob issue for now.
    // Tailwind utility classes will not be generated, but the app will build.
    autoprefixer: {},
  },
};

export default config;
