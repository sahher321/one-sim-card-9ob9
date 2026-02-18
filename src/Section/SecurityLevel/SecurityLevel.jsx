import React from "react";
import security from "../../assets/images/unsurpassed.svg";
import FeatureSection from "../../Components/FeatureComponent/FeatureSection";

function SecurityLevel({ data }) {
  const feature = data?.features?.find(f => f.title === "Security");

  if (!feature) return null;

  return (
    <>
      <FeatureSection
        title={feature.title}
        subtitle={feature.subtitle}
        buttonText={feature.button_text}
        imageSrc={feature.icon_url?.startsWith('/') ? feature.icon_url : `/${feature.icon_url}`}
        description={feature.description}
        reverse={feature.extra_data?.reverse || true}
        subtitleColor="#F3C500"
        imageAlt={feature.title}
        aos={{ type: "fade-up", delay: 200, duration: 1000 }}
        btnBgColor={feature.extra_data?.bg_color || "#F3C500"}
        btnHoverColor="#e2b900"
        btnTextColor="#08080C"
        btnRedirect={feature.button_link}
      />
    </>
  );
}

export default SecurityLevel;
