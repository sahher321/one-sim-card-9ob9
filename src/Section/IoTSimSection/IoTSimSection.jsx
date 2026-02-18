import React from "react";
import worldMap from "../../assets/images/World_map.svg"; // replace with your map image path
import FeatureSection from "../../Components/FeatureComponent/FeatureSection";
import SectionHeading from "../../Components/Heading/SectionHeading";

function IoTSimSection({ data }) {
  if (!data) return null;

  const feature = data.features?.find(f => f.title === "Coverage");

  return (
    <section
      data-aos="fade-down"
      className="max-w-screen-xl mx-auto py-14 font-sora px-2 md:px-6"
    >
      {/* Header Section */}
      <div className="text-left ">
        <SectionHeading title={data.title} align="left" />
        <p className="text-[#08080C] mt-2 font-medium text-2xl ml-1">
          {data.subtitle}
        </p>
        <hr className="border-gray-300 my-6" />
      </div>

      {/* Description */}
      <p className="text-[#6B7280] font-regular text-base  leading-relaxed mb-12 pr-2 md:pr-72">
        {data.description}
      </p>

      {feature && (
        <FeatureSection
          title={feature.title}
          subtitle={feature.subtitle}
          description={feature.description}
          buttonText={feature.button_text}
          imageSrc={feature.icon_url} // Database stores 'assets/images/...' but we need to resolve it if it's relative
          imageAlt={feature.title}
          reverse={feature.extra_data?.reverse || false}
          aos={{ type: "fade-up", delay: 200, duration: 1000 }}
          btnBgColor={feature.extra_data?.bg_color || "#455E86"}
          btnHoverColor="#3b5072"
          btnTextColor="#ffffff"
          btnRedirect={feature.button_link}
        />
      )}
    </section>
  );
}

export default IoTSimSection;
