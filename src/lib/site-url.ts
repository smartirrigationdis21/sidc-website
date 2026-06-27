export function getSiteUrl(): string {
  if (typeof process !== "undefined" && process.env?.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (typeof process !== "undefined" && process.env?.SITE_URL) {
    return process.env.SITE_URL;
  }
  return "https://smartirrigations21.lovable.app";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/+$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
