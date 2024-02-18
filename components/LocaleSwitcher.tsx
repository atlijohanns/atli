"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

export default function LocaleSwitcher() {
  const currentLocale = useLocale();

  return currentLocale === "en" ? (
    <Link locale="is" href="/is">
      IS
    </Link>
  ) : (
    <Link locale="en" href="/en">
      EN
    </Link>
  );
}
