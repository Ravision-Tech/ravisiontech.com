import Image from "next/image";

import { Branding } from "@/lib/branding";

const MainPage = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col p-0 m-0 bg-[#131313]">
      <main className="md:relative flex flex-col gap-2 flex-1 justify-center items-center space-y-2 p-4 z-10">
        <div className="flex flex-col items-center md:flex-row max-w-[60rem] frosted-glass-card p-10 gap-10">
          <div className="flex-1 flex-col min-w-0 space-y-10">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={Branding.Logomark}
                width={1}
                height={1}
                unoptimized
                alt={`The Logomark of ${Branding.Name}`}
                className="w-32 h-full"
              />
              <Image
                src={Branding.Wordmark}
                width={1}
                height={1}
                unoptimized
                alt={`The Wordmark of ${Branding.Name}`}
                className="w-96 h-full"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="text-white/50 flex flex-col items-center m-4">
        <p>COPYRIGHT (©) 2025, Ravision Tech LLC</p>
      </footer>
    </div>
  );
};

export default MainPage;
