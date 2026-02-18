import simCard from "../../assets/images/pricing_image.png";
import bg_image from "../../assets/images/bg_color.jpg";
import SectionHeading from "../../Components/Heading/SectionHeading";
import CustomButton from "../../Components/CustomButton/CustomButton";

export default function PricingByApplication({ data }) {
  if (!data) return null;

  const pricingFeature = data.features?.[0]; // Assuming only one pricing feature
  const extraData = pricingFeature?.extra_data || {};

  return (
    <section
      className="
    w-full bg-white mx-auto my-8 px-4 md:px-8 rounded-2xl overflow-hidden
    bg-no-repeat bg-center
    bg-cover md:bg-contain   
  "
      style={{
        backgroundImage: `url(${bg_image})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ====== TOP TEXT SECTION ====== */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 ">
          {/* Left Title */}
          <div className="flex-1">
            <SectionHeading
              title={data.title}
              showBreak={true}
              align="left"
            />
          </div>

          {/* Right Description */}
          <div className="flex-1 text-base sm:text-lg text-[#6B7280] leading-relaxed space-y-4">
            <p>
              {data.description}
            </p>
          </div>
        </div>

        {/* ====== IMAGE & PRICING SECTION ====== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 mb-40">
          {/* SIM Card Image (Left Side on Desktop) */}
          <div className="col-span-12 lg:col-span-7 relative flex justify-center lg:justify-start mt-28">
            {data.image_url && (
              <img
                src={data.image_url?.startsWith('/') ? data.image_url : `/${data.image_url}`}
                alt="5G IoT SIM Cards"
                className="w-full h-auto max-w-full object-contain drop-shadow-xl"
              />
            )}
          </div>

          {/* Pricing Card */}
          <div className="col-span-12 lg:col-span-5 relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mt-20 sm:p-8 mx-auto max-w-md lg:max-w-none lg:ml-32">
            {/* Price Badge */}
            <div className="absolute -top-10 right-6 z-10">
              <div className="bg-[#FFD912] rounded-2xl shadow-lg relative">
                <div className="px-6 py-3 sm:px-8 sm:py-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-semibold text-[#08080C]">
                      Only
                    </div>
                    <div className="text-2xl sm:text-3xl font-semibold text-[#08080C]">
                      {extraData.price}
                    </div>
                  </div>
                </div>
                {/* Speech bubble tail */}
                <div className="absolute bottom-0 right-6 transform translate-y-full">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-[#FFD912] border-r-[12px] border-r-transparent"></div>
                </div>
              </div>
            </div>

            {/* Pricing Details */}
            <h4 className="text-xl sm:text-2xl font-medium text-[#08080C] mb-6 mt-10">
              {pricingFeature?.title}
            </h4>

            <ul className="space-y-4">
              {extraData.features?.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FFD912] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#6B7280] text-base sm:text-lg font-regular">
                    {text}
                  </span>
                </li>
              ))}
              <div className="flex justify-center">
                <CustomButton
                  text={extraData.button_text || "Buy Now"}
                  bgColor="#455E86"
                  hoverColor="#3b5072"
                  textColor="white"
                  to={extraData.button_link || "/BuyNow"}
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
