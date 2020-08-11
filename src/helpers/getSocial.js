import getShareImage from '@jlengstorf/get-share-image';

const cloudName = 'dhx9sr6rf';

const imageSizes = {
  twitter: [1024, 512],
};

const publicImageID = {
  twitter: 'v1597146148/double-slash-podcast-social-base.png',
};

const defaultOptions = {
  title: 'Double Slash',
  tagline: '',
  size: 'twitter',
  font: 'nunito',
  textColor: 'a700ff',
  titleGravity: 'east',
};

export const getSocialImage = (options = {}) => {
  const _options = {
    ...defaultOptions,
    ...options,
  };
  const {size} = _options;
  // test if size exist
  if (imageSizes[size] === undefined) {
    throw new Error(`Image "${size}" size not exist !`);
  }
  // generate url
  return getShareImage({
    title: _options.title,
    tagline: _options.tagline,
    cloudName,
    imageWidth: imageSizes[size][0],
    imageHeight: imageSizes[size][1],
    imagePublicID: publicImageID[size],
    font: _options.font,
    textColor: _options.textColor,
    titleGravity: _options.titleGravity,
  });
};
