import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import IoTSimSection from "../Section/IoTSimSection/IoTSimSection";
import SimManagment from "../Section/SimManagment/SimManagment";
import SecurityLevel from "../Section/SecurityLevel/SecurityLevel";
import ConnectivitySection from "../Section/ConnectivitySection/ConnectivitySection";
import CompatableDevice from "../Section/CompatableDevice/CompatableDevice";
import FaqSection from "../Section/FaqSection/FaqSection";
import PricingByApplication from "../Section/PricingByApplication/PricingByApplication";
import BlogSection from "../Section/BlogSection/BlogSection";
import { getHomeContent } from "../api/apiService";

const Home = () => {
  const [content, setContent] = React.useState(null);

  React.useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log("Fetching home content...");
        const data = await getHomeContent();
        console.log("Home content fetched:", data);
        setContent(data);
      } catch (error) {
        console.error("Error fetching home content:", error);
      }
    };
    fetchContent();
  }, []);

  console.log("Rendering Home, content:", content);

  return (
    <>
      <Banner />
      <IoTSimSection data={content?.iot_sim_main} />
      <SecurityLevel data={content?.iot_sim_main} />
      <SimManagment data={content?.iot_sim_main} />
      <ConnectivitySection data={content?.connectivity_main} />
      <CompatableDevice data={content?.compatible_device_main} />
      <BlogSection />
      <FaqSection bgColor="#ffffff" />
      <PricingByApplication data={content?.pricing_main} />
    </>
  );
};

export default Home;
