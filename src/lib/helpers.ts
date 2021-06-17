export const between = (string: string, first: string, second: string): string => {
	return string.substring(string.lastIndexOf(first) + 1, string.lastIndexOf(second));
}

export const getUrl = (string: string): string => {
	return between(string, `(`, `)`).replace(/'/g, '');
}

export const contains = (haystack: any[], needle: any[]): boolean => {
	return needle.some(v => haystack.indexOf(v) >= 0);
}