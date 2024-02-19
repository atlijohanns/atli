import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <header>
        <div className="flex space-x-4">
          {/* Icons from https://lucide.dev/ */}

          {/* Email */}
          <span>
            <Link href="mailto:atlijohanns@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </Link>
          </span>

          {/* LinkedIn */}
          <span>
            <Link
              href="https://www.linkedin.com/in/atlijohanns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </span>

          {/* Facebook */}
          <span>
            <Link
              href="https://www.facebook.com/atlijohanns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
          </span>

          {/* GitHub */}
          <span>
            <Link
              href="https://github.com/atlijohanns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
          </span>
        </div>
        <h1 className="text-4xl font-bold mt-10">{t("title")}</h1>
      </header>

      {/* Current */}
      <section className="my-12 text-right">
        <ul className="list-none list-inside">
          <li>
            {t("roleCTO")}{" "}
            <Link
              href="https://sogreen.is"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              SoGreen
            </Link>
          </li>
          <li>
            {t("roleCoFounderCTO")}{" "}
            <Link
              href="https://stoff.is"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Stöff
            </Link>
          </li>
          <li>
            {t("roleCoFounder")}{" "}
            <Link
              href="https://mannvaen.is"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Samtök um mannvæna tækni
            </Link>
          </li>
        </ul>
      </section>

      {/* About */}
      <section className="my-12">
        <p className="text-gray-600 mt-4">{t("description-1")}</p>
        <p className="text-gray-600 mt-4">{t("description-2")}</p>
        <p className="text-gray-600 mt-4">{t("description-3")}</p>
      </section>

      <hr className="my-12" />

      <footer className="flex justify-between text-gray-600">
        <p className="text-xs">
          {t("viewOn")}{" "}
          <Link
            href="https://github.com/atlijohanns/atli"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </Link>
        </p>

        {/* Accessibility */}
        <div className="flex space-x-4">
          <LocaleSwitcher />
          <ModeToggle />
        </div>
      </footer>
    </div>
  );
}
