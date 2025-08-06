import Image from "next/image";
import Link from "next/link";
import { ConstructionIcon } from "lucide-react";

import { Branding } from "@/lib/branding";

const MainPage = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col p-0 m-0 bg-[#131313]">
      <main className="md:relative flex flex-col gap-2 flex-1 justify-center items-center space-y-2 p-4 z-10">
        <div className="flex flex-col items-center md:flex-row max-w-[60rem] frosted-glass-card p-10 gap-10">
          <div className="flex-1 flex-col min-w-0 space-y-10">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={Branding.Logos.Logomark}
                width={1}
                height={1}
                unoptimized
                alt={`The Logomark of ${Branding.Name}`}
                className="w-32 h-full"
              />
              <Image
                src={Branding.Logos.Wordmark}
                width={1}
                height={1}
                unoptimized
                alt={`The Wordmark of ${Branding.Name}`}
                className="w-96 h-full"
              />
            </div>
            <div className="flex flex-col items-center mt-8 space-y-2">
              <div className="flex flex-row gap-4 items-center">
                <ConstructionIcon className="text-white" />
                <h2 className="text-lg sm:text-2xl font-semibold text-white text-center">Website Under Construction</h2>
                <ConstructionIcon className="text-white" />
              </div>
              <p className="text-white/80 text-center">
                For inquiries or hiring, please reach out to{" "}
                <Link
                  href="mailto:dylan@ravisiontech.com"
                  target="_blank"
                  className="underline hover:text-white transition-colors duration-200"
                >
                  dylan@ravisiontech.com
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-white/50 flex flex-col items-center m-4">
        <p className="text-center">COPYRIGHT (©) 2025, Ravision Tech LLC</p>
      </footer>
    </div>
  );
};

export default MainPage;
