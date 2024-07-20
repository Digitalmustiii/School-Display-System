import { useQRCode } from "next-qrcode";
import Link from "next/link";
import React from "react";

export default function Explore() {
  const { Image } = useQRCode();
  return (
    <div className="-h-90vh">
      <div className="flex flex-col xl:flex-row gap-x-52 gap-y-10 items-center rounded-2xl justify-center ">
        <div className="text-xl lg:mt-16 ml-16 items-center justify-center flex-1 p-5 lg:pl-12">
          <div className="py-7 md:text-3xl lg:text-6xl bg-green-950 p-9 xl:p-16 rounded-3xl">
            Ready to explore our campus with ease?
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-1 lg:gap-6 justify-between items-center  py-14  px-8 bg-green-950 lg:mr-7 rounded-3xl">
          <div>
            <Link href={"/map"}>
              <p className="pl-5 bg-green-200 w-fit p-2 rounded-lg -mt-20 lg:mt-0 text-black mb-8 cursor-pointer">
                {" "}
                Scan or Click to Continue
              </p>
            </Link>
          </div>
          <div className="h-[400px]">
            <Image
              text={`https://alhikmah-nav-sys.vercel.app/map`}
              options={{
                type: "image/png",
                quality: 0.3,
                errorCorrectionLevel: "M",
                margin: 3,
                scale: 4,
                width: 400,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
