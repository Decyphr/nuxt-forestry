export function parseRelatedEntry(str) {
  const startIdx = str.indexOf('/') + 1;
  const endIdx = str.indexOf('.');
  const path = str.slice(startIdx, endIdx);

  return path;
}
