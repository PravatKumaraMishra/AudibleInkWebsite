// Set at build time once the public deployment URL is known.
const configuredUrl = process.env.SITE_URL || 'https://murmur-website-sandy.vercel.app';
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;
export const title = 'AudibleInk — Local Text-to-Speech for Mac';
export const description = 'Listen to Markdown, text, PDF, Word, and RTF on your Mac. Local neural speech, optional code-block reading, adjustable pace, and passage highlighting.';
export const repository = 'https://github.com/PravatKumaraMishra/AudibleInk';
