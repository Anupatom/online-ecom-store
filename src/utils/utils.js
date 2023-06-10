/**
 * Helper to shorten a text
 * @param {string} text The text to be shortened
 * @param {number} limit The limit set on text
 */

export function shortenText(text, limit) {
  if (text?.length > limit) {
    return text?.slice(0, limit) + "...";
  }
  return text;
}
