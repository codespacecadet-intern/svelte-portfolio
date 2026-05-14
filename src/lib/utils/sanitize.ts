export function sanitizeText(value: string) {
	return value.replace(/[<>]/g, '').replace(/[\u0000-\u001F\u007F]/g, '').trim();
}
