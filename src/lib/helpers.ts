export function between(string: string, first: string, second: string) {
  return string.substring(string.lastIndexOf(first) + 1, string.lastIndexOf(second));
}

export function getUrl(string: string) {
  return between(string, `(`, `)`).replace(/'/g, '');
}

export function contains(haystack: any[], needle: any[]) {
  return needle.some(v => haystack.indexOf(v) >= 0);
}