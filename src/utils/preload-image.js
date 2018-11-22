const { document } = global;


export const preloadImage = src => new Promise(
  loadImg(src)
);

const loadImg = src => (resolve, reject) => createImage({
  src,
  onload: () => resolve(src),
  onerror: () => reject(
    new Error(`Couldn't preload image by url ${src}.`)
  )
});

const createImage = attrs => Object.assign(
  document.createElement('img'), attrs
);