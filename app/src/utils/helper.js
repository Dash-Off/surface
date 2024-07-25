export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";
  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i].charAt(0).toUpperCase();
  }
  return initials;
};

const WRITING_PREFIX_CONTENT = "#DO-";
const getContentKey = (id) => `${WRITING_PREFIX_CONTENT}${id}`;

export const writingContentCache = {
  save: (id, raw, markup) =>
    localStorage.setItem(
      getContentKey(id),
      JSON.stringify({
        raw,
        markup,
      }),
    ),
  get: (id) => {
    let content = localStorage.getItem(getContentKey(id));
    return content && JSON.parse(content);
  },
  remove: (id) => {
    localStorage.removeItem(getContentKey(id));
  },
};

export const getTimerSafeNumber = (number) =>
  number / 10 < 1 ? `0${number}` : number;

export function getRandomHexColor() {
  const minRed = 0;
  const maxRed = 85;
  const minGreen = 0;
  const maxGreen = 85;
  const minBlue = 100;

  const red = Math.floor(Math.random() * (maxRed - minRed + 1)) + minRed;
  const green =
    Math.floor(Math.random() * (maxGreen - minGreen + 1)) + minGreen;
  const blue = Math.floor(Math.random() * (255 - minBlue + 1)) + minBlue;

  const hexRed = red.toString(16).padStart(2, "0");
  const hexGreen = green.toString(16).padStart(2, "0");
  const hexBlue = blue.toString(16).padStart(2, "0");

  return `#${hexRed}${hexGreen}${hexBlue}`;
}
