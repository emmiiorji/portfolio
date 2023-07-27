const scrollToSection = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth',
  });
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
};

// Helper function to convert the style object into a CSS string
const getStyleProperties = (styleObject) => Object.entries(styleObject)
  .map(([prop, value]) => `${prop}: ${value}`).join('; ');

// Helper function to convert the keyframes object into a CSS string
const getKeyframeString = (keyframes, keyframeName) => `@keyframes ${keyframeName} {
  ${Object.entries(keyframes).map(([key, value]) => `${key} { ${getStyleProperties(value)} }`).join('\n')}
}`;

export {
  scrollToSection,
  scrollToTop,
  scrollToBottom,
  getStyleProperties,
  getKeyframeString,
};
