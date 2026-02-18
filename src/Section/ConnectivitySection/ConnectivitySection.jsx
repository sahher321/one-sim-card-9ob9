import React from "react";
import simCards from "../../assets/images/sim_cards.png";
import arrow from "../../assets/images/stats arriw.svg";
import SectionHeading from "../../Components/Heading/SectionHeading";
import { Link } from "react-router-dom";

export default function ConnectivitySection({ data }) {
  if (!data) return null;

  const leftCards = data.features?.filter(f => f.extra_data?.column === 'left') || [];
  const rightCards = data.features?.filter(f => f.extra_data?.column === 'right') || [];

  return (
    <section
      data-aos="zoom-in"
      className="max-w-screen-2xl mx-auto py-20 px-2 md:px-6 font-sora"
    >
      <SectionHeading
        title={data.title}
        showBreak={true}
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
        {/* LEFT COLUMN (3 cols on large) */}
        <div className="lg:col-span-3 flex flex-col gap-24 text-center lg:text-left ">
          {leftCards.map((card, index) => (
            <div key={index} className={index === 0 ? "bg-white shadow-[0_8px_90px_rgba(0,0,0,0.03)] rounded-4xl p-6 mr-2" : ""}>
              <h4 className="text-lg md:text-2xl font-medium text-[#08080C] mb-2">
                {card.title}
              </h4>
              <p className="text-[#6B7280] text-lg md:text-base">
                {card.description}
              </p>
              {card.button_text && (
                <Link to={card.button_link} className="text-[#F4C600] font-medium text-sm hover:underline cursor-pointer">
                  {card.button_text}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CENTER IMAGE (6 cols on large) */}
        <div className="lg:col-span-6 flex justify-center">
          {data.image_url && (
            <img
              src={data.image_url.startsWith('/') ? data.image_url : `/${data.image_url}`}
              alt="OneSIMCard 5G"
              className="w-full h-auto max-w-full object-contain drop-shadow-xl"
            />
          )}
        </div>

        {/* RIGHT COLUMN (3 cols on large) */}
        <div className="lg:col-span-3 flex flex-col gap-8 text-center lg:text-left ">
          {rightCards.map((card, index) => (
            <div key={index} className={index === 1 ? "bg-white p-6 shadow-[0_8px_90px_rgba(0,0,0,0.03)] rounded-4xl mr-2" : ""}>
              {card.extra_data?.icon && (
                <span className="inline-flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <span className="border-2 border-[#6B7280] text-[#455E86] px-2 py-1 rounded-full">
                    Stats
                  </span>
                  <img src={card.extra_data.icon.startsWith('/') ? card.extra_data.icon : `/${card.extra_data.icon}`} alt="info icon" className="w-7 h-7" />
                </span>
              )}
              <h4 className="text-lg md:text-2xl font-medium text-[#08080C] mb-2">
                {card.title}
              </h4>
              <p className="text-[#6B7280] text-lg md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
