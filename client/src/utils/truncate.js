export default function truncate(str, maxLength, indicator = "...") {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - indicator.length) + indicator;
  }
  return str;
}
