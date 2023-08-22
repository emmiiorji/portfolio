// Helper function to convert the style object into a CSS string
const getStyleProperties = (styleObject) => Object.entries(styleObject)
  .map(([prop, value]) => `${prop}: ${value}`).join('; ');

// Helper function to convert the keyframes object into a CSS string
const getKeyframeString = (keyframes, keyframeName) => `@keyframes ${keyframeName} {
  ${Object.entries(keyframes).map(([key, value]) => `${key} { ${getStyleProperties(value)} }`).join('\n')}
}`;

export {
  getStyleProperties,
  getKeyframeString,
};
