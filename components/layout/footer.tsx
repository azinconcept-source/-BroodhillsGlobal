import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-black/10 border-t dark:border-white/10">
      {/* Big Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none whitespace-nowrap font-black text-[20vw] text-black/4 leading-none tracking-tighter md:text-[15vw] lg:text-[12vw] xl:text-[10vw] dark:text-white/4">
          BroodHills
        </span>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between">
          {/* Brand Section */}
          <div className="flex w-full flex-col gap-4 lg:w-auto">
            <Link href="/" target="_blank">
              <div className="flex items-center">
                <span className="inline-flex items-center font-bold tracking-tight">
                  <Image alt="BroodHills Logo" height={28} src="/logo.svg" width={28} />
                  <span className="ml-1 sm:ml-0">BroodHills Global</span>
                </span>
              </div>
            </Link>
            <div className="flex flex-col gap-1">
              <Link
                className="flex max-w-xs items-center justify-center gap-1 text-black/80 text-xs tracking-tight hover:text-primary sm:text-sm dark:text-white/60 dark:hover:text-primary"
                href="https://broodhills.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                © {new Date().getFullYear()} BroodHills Global. All Rights Reserved.
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <nav className="flex flex-col gap-3">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              <li>
                <Link
                  className="text-black/70 text-sm transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/70 text-sm transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/70 text-sm transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/70 text-sm transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                  href={siteConfig.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/70 text-sm transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                  href={siteConfig.links.twitter}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  X (Twitter)
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
