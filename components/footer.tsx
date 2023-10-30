import React from "react";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <div className="flex container py-6 gap-6">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <Icons.logo />
        <p className="text-center text-sm leading-loose md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.creater}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            durveshb
          </a>
          . Hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Vercel
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
