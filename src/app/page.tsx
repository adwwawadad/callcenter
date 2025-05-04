"use client";

import Image from "next/image";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import React from "react";

declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: Record<string, string>
    ) => void;
  }
}

const handleTelegramClick = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "Telegram Button Click",
    });
  }
  window.open("https://t.me/newMardinle", "_blank");
};

const handleWhatsAppClick = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "WhatsApp Button Click",
    });
  }
  window.open("https://wa.me/995593352319", "_blank");
};

export default function Home(): React.ReactNode {
  return (
    <main
      className="flex flex-col min-h-screen relative"
      style={{
        backgroundImage: "url('/back.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        

        <div className="flex justify-center p-4 md:p-8 flex-grow">
          <div className="w-full max-w-xl p-2 md:p-4">
            <div className="border-4 border-white rounded-xl shadow-xl overflow-hidden hover:border-yellow-300 transition-colors duration-300">
              <Image
                src="/callcenter.jpeg"
                alt="Call Center"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="w-full py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 p-4 max-w-md mx-auto">
            <button
              onClick={handleTelegramClick}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center text-lg font-medium shadow-lg hover:shadow-xl"
            >
              <FaTelegram className="h-6 w-6" />
              Telegram
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center text-lg font-medium shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="h-6 w-6" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
