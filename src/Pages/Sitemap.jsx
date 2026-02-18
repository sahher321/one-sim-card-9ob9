import React, { useEffect, useState } from "react";
import SectionHeading from "../Components/Heading/SectionHeading";
import { Link } from "react-router-dom";
import {
    getSitemapData,
    getKeyFeatures,
    getFaqGroups,
    getPartnerSections
} from "../api/apiService";

export default function Sitemap() {
    const [sitemapData, setSitemapData] = useState(null);
    const [features, setFeatures] = useState([]);
    const [faqGroups, setFaqGroups] = useState([]);
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [sitemap, featuresData, faqs, partnersData] = await Promise.all([
                    getSitemapData(),
                    getKeyFeatures(),
                    getFaqGroups(),
                    getPartnerSections()
                ]);

                setSitemapData(sitemap);
                setFeatures(featuresData?.keyFeatures || []); // Assuming structure
                setFaqGroups(faqs || []);
                // Partner sections structure: { data: [...] } or just array? 
                // apiService getPartnerSections returns: response?.data || { data: [] }
                // So we expect { data: [...] } from API response.
                setPartners(partnersData?.data || []);
            } catch (error) {
                console.error("Error loading sitemap data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F4C600] mx-auto"></div>
                <p className="mt-4 text-gray-500">Loading sitemap...</p>
            </div>
        );
    }

    // Process partner data to separate sections
    const techSection = partners.find(p => p.header === 'Technology');
    const partnerSection = partners.find(p => p.header === 'Partners');
    const accoladesSection = partners.find(p => p.header === 'Accolades'); // Wialon

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 font-sora">
            <SectionHeading title={"Sitemap"} align="center" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 text-sm">

                {/* Column 1 */}
                <div className="space-y-8">
                    <div>
                        <Link to="/" className="block text-[#4A6590] hover:text-[#F4C600] font-bold text-lg mb-2">Home</Link>
                    </div>

                    <div>
                        <Link to="/Faq" className="block text-[#4A6590] hover:text-[#F4C600] font-bold text-lg mb-2">FAQ / help</Link>
                        <ul className="pl-4 space-y-1 border-l-2 border-slate-100">
                            {faqGroups.map((g, i) => (
                                <li key={i}>
                                    <Link to={`/Faq?group=${g.idgroup}`} className="text-gray-600 hover:text-[#F4C600] block py-0.5">
                                        {g.groupname}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <Link to="/IoTSolutions" className="block text-[#4A6590] hover:text-[#F4C600] font-bold text-lg mb-2">IoT Solutions</Link>
                        <ul className="pl-4 space-y-1 border-l-2 border-slate-100">
                            {sitemapData?.solutionRoutes?.map((s, i) => (
                                <li key={i}>
                                    <Link to={s.url} className="text-gray-600 hover:text-[#F4C600] block py-0.5">
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <span className="block text-[#4A6590] font-bold text-lg mb-2">Technology</span>
                        <ul className="pl-4 space-y-1 border-l-2 border-slate-100">
                            {techSection?.items?.map((item, i) => (
                                <li key={i}>
                                    {/* These items might not have pages. Linking to Technology page anchor or just text.
                        The partner data has `api_url` for some, `item_id_str` for others.
                        Let's link to /Technology?item={item_id_str} or just list them.
                        User asked to "show" them. Link is better.
                    */}
                                    <Link to={`/Technology`} className="text-gray-600 hover:text-[#F4C600] block py-0.5">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <Link to="/WhyOneSimCard" className="block text-[#4A6590] hover:text-[#F4C600] text-base font-semibold">Why OneSimCard</Link>
                        <Link to="/StarterKit" className="block text-[#4A6590] hover:text-[#F4C600] text-base font-semibold">Starter Kit</Link>
                        <Link to="/CustomQuote" className="block text-[#4A6590] hover:text-[#F4C600] text-base font-semibold">Custom Quote</Link>
                        {/* "Do More with OneSimCard For IoT" - Is this a specific page? Or section? 
                 The user listed it. It might be a tagline or "About Us"?
                 Ref Image had "Do More with OneSimCard For IoT" -> linked to /Technology probably?
                 I'll add it as a link to Technology or Home for now, or finding exact match.
                 Actually, let's keep the user's specific items if possible.
                 "Do More with OneSimCard For IoT" is likely a heading or a link.
             */}
                        <Link to="/Technology" className="block text-[#4A6590] hover:text-[#F4C600] text-base font-semibold">Do More with OneSimCard For IoT</Link>
                        <Link to="/businessOppotunities" className="block text-[#4A6590] hover:text-[#F4C600] text-base font-semibold">IoT SIM Card Business Opportunities for Distributors and Resellers</Link>
                        <Link to="/m2mDistributorRegistration" className="block text-[#4A6590] hover:text-[#F4C600] text-base font-semibold">OneSimCard M2M/IoT Distributor Registration</Link>
                    </div>

                    <div>
                        <span className="block text-[#4A6590] font-bold text-lg mb-2">Premier Partners</span>
                        <ul className="pl-4 space-y-1 border-l-2 border-slate-100">
                            {partnerSection?.items?.map((p, i) => (
                                <li key={i}>
                                    <Link to={`/Technology`} className="text-gray-600 hover:text-[#F4C600] block py-0.5">
                                        {p.label}
                                    </Link>
                                </li>
                            ))}
                            {/* Add Accolades (Wialon) if user wants "all tabs" of partners? 
                   The user said "all tabs of Premier Partners". 
                   Usually "Partners" page has checkboxes/tabs. 
                   Wialon is in "Accolades". 
                   The user listed "Premier Partners, Compatible Devices, Compatible Software".
                   These ARE the items in `partnerSection` (id=6).
                   So `partnerSection.items` covers it.
               */}
                        </ul>
                        {/* Add Wialon separately if requested or under same header? 
                 User didn't list Wialon explicitly in the long list, but said "Premier Partners". 
                 Ref Image has "Wialon / Gurtam Certification" separate.
                 Let's add it if present.
             */}
                        {accoladesSection && (
                            <ul className="pl-4 space-y-1 border-l-2 border-slate-100 mt-2">
                                {accoladesSection.items.map((item, i) => (
                                    <li key={i}>
                                        <Link to={`/Technology`} className="text-gray-600 hover:text-[#F4C600] block py-0.5">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
