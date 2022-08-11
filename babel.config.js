module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "tailwindcss-react-native/babel"],
  };
};
