import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["is", "en"],

  // Used when no locale matches
  defaultLocale: "is",

  // Only use prefix for non-default locale
  localePrefix: "as-needed",

  // Always redirect to default locale
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|is)/:path*"],
};
