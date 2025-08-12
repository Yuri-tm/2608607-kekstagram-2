import { getImgDescriptionArray } from './data-gen.js';
const SAMPLEDATA = getImgDescriptionArray();

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
console.log(SAMPLEDATA);
const fragment = document.createDocumentFragment();

SAMPLEDATA.forEach((photo) => {
  const miniature = template.cloneNode(true);
  const thumb = miniature.querySelector('.picture__img');

  thumb.src = photo.url;
  thumb.alt = photo.description;

  template.querySelector('.picture__comments').textContent = photo.comments;
  template.querySelector('.picture__likes').textContent = photo.likes;

  fragment.appendChild(thumb);

});

container.appendChild(fragment);
