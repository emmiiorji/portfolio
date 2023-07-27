import { getKeyframeString } from '.';

const typing = (n, totalTime) => {
  const keyframeObj = {
    '0%': {
      // display: 'none',
      visibility: 'hidden',
      'background-size': '0 200%',
    },
    [`${(25 / totalTime) * 100}%, 100%`]: {
      'background-size': '0 200%',
      // display: 'inline',
      visibility: 'visible',
    },
    [`${((totalTime - 10) / totalTime) * 100}%`]: {
      'background-size': `calc(${n * 1}ch) 200%`,
    },
  };
  return getKeyframeString(keyframeObj, 'typing');
};

const cursor = () => {
  const keyframeObj = {
    '0%, 100%': {
      'background-position': '0 0, 0 0',
    },
    '50%': {
      'background-position': '0 -100%, 0 0',
    },
  };
  return getKeyframeString(keyframeObj, 'cursor');
};

const typeHeadlineName = (totalTime) => {
  const keyframeObj = {
    [`0%, ${(2 / totalTime) * 100}%, ${(12 / totalTime) * 100}%`]: {
      width: 0,
      // display: 'block',
      visibility: 'visible',
    },
    [`${(10 / totalTime) * 100}%`]: {
      width: '100%',
    },
    [`${(13 / totalTime) * 100}%, 100%`]: {
      // display: 'none',
      visibility: 'hidden',
    },
  };
  return getKeyframeString(keyframeObj, 'typeHeadlineName');
};

const typeHeadlineTitle = (totalTime) => {
  const keyframeObj = {
    [`0%, ${(13 / totalTime) * 100}%, ${(25 / totalTime) * 100}%, 100%`]: {
      // display: 'none',
      visibility: 'hidden',
    },
    [`${(14 / totalTime) * 100}%, ${(24 / totalTime) * 100}%`]: {
      width: 0,
      // display: 'block',
      visibility: 'visible',
    },
    [`${(22 / totalTime) * 100}%`]: {
      width: '100%',
    }
    ,
  };
  return getKeyframeString(keyframeObj, 'typeHeadlineTitle');
};

const blinking = () => {
  const keyframeObj = {
    '0%': {
      'border-color': 'transparent',
    },
    '50%': {
      'border-color': '#ff6b00',
    },
    '100%': {
      'border-color': 'transparent',
    },
  };
  return getKeyframeString(keyframeObj, 'blinking');
};

export {
  typeHeadlineName,
  typeHeadlineTitle,
  typing,
  cursor,
  blinking,
};
