import React from "react";
import simCalculator from "../../assets/images/sim_Managment.svg";
import FeatureSection from "../../Components/FeatureComponent/FeatureSection";

function SimManagment({ data }) {
  const feature = data?.features?.find(f => f.title === "IoT SIM Portal");

  if (!feature) return null;

  return (
    <>
      <FeatureSection
        title={feature.title}
        subtitle={feature.subtitle}
        description={feature.description}
        buttonText={feature.button_text}
        imageSrc={feature.icon_url?.startsWith('/') ? feature.icon_url : `/${feature.icon_url}`}
        imageAlt={feature.title}
        reverse={feature.extra_data?.reverse || false}
        aos={{ type: "fade-up", delay: 200, duration: 1000 }}
        btnBgColor={feature.extra_data?.bg_color || "#455E86"}
        btnHoverColor="#3b5072"
        btnTextColor="#ffffff"
        btnRedirect={feature.button_link}
      />
    </>
  );
}

export default SimManagment;
