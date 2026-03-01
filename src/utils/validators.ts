export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isPhone(value: string) {
  const v = value.trim();
  if (!v) return true; // optional
  return /^[+()\d\s-]{7,}$/.test(v);
}
