import React from "react";
import { AnimatedSection } from "../ui/animate-section";
import Image from "next/image";

export default function LiquidityProviderSection() {
  return (
    <AnimatedSection>
      <div className="relative mx-auto mb-24 flex h-[865px] w-full max-w-screen-2xl items-start overflow-hidden px-5 sm:h-[600px] md:mb-24 md:h-[850px] opacity-100 blur-none transform-none">
        <div className="absolute bottom-0 right-0 z-0 hidden h-full w-full md:block">
          <Image
            alt="Liquidity Illustration"
            decoding="async"
            data-nimg="fill"
            width={1000}
            height={1000}
            className="pointer-events-none object-contain object-bottom lg:object-center absolute h-full w-full inset-0 text-transparent"
            src="/images/power-liquidity-desktop-illustration.svg"
          />
        </div>
        <div className="absolute bottom-0 left-0 z-0 block h-[1000px] w-full md:hidden">
          <Image
            alt="Liquidity Illustration"
            decoding="async"
            data-nimg="fill"
            width={1000}
            height={100}
            className="pointer-events-none object-contain object-bottom absolute h-full w-full inset-0 text-transparent"
            src="/images/power-liquidity-mobile-illustration.svg"
          />
        </div>
        <div className="mx-auto w-full max-w-[999px]">
          <div className="relative z-10 max-w-[600px] pt-8 md:pt-28">
            <p className="flex flex-col font-semibold sm:gap-2">
              <span className="text-2xl sm:text-4xl md:text-5xl">
                Power the Liquidity
              </span>
              <span className="__className_66f67d text-3xl italic sm:text-5xl md:text-6xl">
                Engine on Noblocks
              </span>
            </p>
            <p className="mt-4 text-base font-normal leading-7 md:mt-6 md:text-lg">
              Maximize your earnings while enabling fast and seamless stablecoin
              exchanges. Specify your rate, serve urgent customers and lead the
              charge to operate in a truly decentralized world.
            </p>
            <a
              href="https://paycrest.io/provider"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full max-w-[219px] cursor-pointer rounded-lg bg-[#8b85f4] p-3 text-center text-sm font-medium text-white hover:opacity-90 dark:text-white md:rounded-xl md:py-[10px]"
            >
              Become a Liquidity Provider
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
