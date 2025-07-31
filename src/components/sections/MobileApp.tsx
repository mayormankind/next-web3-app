import React from "react";
import { AnimatedSection } from "../ui/animate-section";
import { Button } from "../ui/button";

export default function MobileAppSection() {
  return (
    <AnimatedSection>
      <div className="mx-auto mb-24 flex w-full max-w-[1440px] flex-col justify-center px-5 md:mb-40 md:gap-10 lg:flex-row-reverse lg:items-center">
        <div className="w-full space-y-4 lg:max-w-[302px]">
          <Button
            size="lg"
            className="rounded-3xl bg-[#20BA90] px-4 py-1 text-sm font-medium text-white"
          >
            Coming soon
          </Button>
          <h3 className="flex flex-col font-semibold sm:gap-2">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:!leading-[1.5]">
              Download Noblocks
            </span>
            <span className="text-3xl italic sm:text-5xl md:text-6xl">
              Mobile App
            </span>
          </h3>
          <p className="pt-2 text-base font-normal leading-7 lg:text-lg lg:leading-[1.875rem]">
            Your no. 1 app to change stablecoins to cash in less than{" "}
            <span className="text-lg italic lg:text-xl">30s</span>
          </p>
        </div>
        <img
          alt="Mobile App Illustration Mobile Dark"
          width="1000"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="hidden w-full dark:block dark:md:hidden cursor-pointer transition-transform duration-300 ease-in-out"
          srcSet="/images/mobile-app-illustration-mobile.webp&amp;w=1080&amp;q=75 1x, /images/mobile-app-illustration-mobile.webp 2x"
          src="/images/mobile-app-illustration-mobile.webp"
        ></img>
        <img
          alt="Mobile App Illustration Mobile Light"
          width="1000"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="block w-full dark:hidden md:hidden cursor-pointer transition-transform duration-300 ease-in-out"
          srcSet="/images/mobile-app-illustration-light-mode-mobile.webp 1x, /images/mobile-app-illustration-light-mode-mobile.webp 2x"
          src="/images/mobile-app-illustration-light-mode-mobile.webp"
        ></img>
        <img
          alt="Mobile App Illustration Desktop Dark"
          width="1000"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="hidden w-full max-w-[800px] dark:md:block cursor-pointer transition-transform duration-300 ease-in-out"
          srcSet="/images/mobile-app-illustration-desktop.webp 1x, /images/mobile-app-illustration-desktop.webp 2x"
          src="/images/mobile-app-illustration-desktop.webp"
        />
        <img
          alt="Mobile App Illustration Desktop Light"
          width="1000"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="hidden w-full max-w-[800px] md:block dark:md:hidden cursor-pointer transition-transform duration-300 ease-in-out"
          srcSet="/images/mobile-app-illustration-light-mode-desktop.webp 1x, /images/mobile-app-illustration-light-mode-desktop.webp 2x"
          src="/images/mobile-app-illustration-light-mode-desktop.webp"
        ></img>
      </div>
    </AnimatedSection>
  );
}
