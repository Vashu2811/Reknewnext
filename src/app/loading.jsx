import React from "react";
import Image from "next/image";
import "./globals.css"



const loading = () => {
  return <div className={`preloader`}>
  <Image
     src="/android-chrome-512x512.png"
     alt="ReKnew logo"
     width={125}
     height={50}
     className="lg:w-[125px] xl:w-full"
     priority
   />
</div>;
};

export default loading;
