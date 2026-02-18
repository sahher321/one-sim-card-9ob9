import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

// Coverage & Plans
export const getCountries = async () => {
    const response = await api.get("/coverage/countries");
    return response?.data || [];
};

export const getOperatorsAndPlans = async (country) => {
    const response = await api.get(`/coverage/operators?country=${encodeURIComponent(country)}`);
    return response?.data || { operators: [], plans: [] };
};

// Features
export const getKeyFeatures = async () => {
    const response = await api.get("/key-features");
    return response?.data || { keyFeatures: [] };
};

// FAQ
export const getFaqGroups = async () => {
    const response = await api.get("/faq/groups");
    return response?.data || [];
};

export const getFaqsByGroup = async (groupId) => {
    const response = await api.get(`/faq/by-group/${groupId}`);
    return response?.data || [];
};

export const searchFaq = async (query) => {
    const response = await api.get("/faq/search", { params: { q: query } });
    return response?.data || [];
};

// Forms Submission
export const submitM2MSupport = async (formData) => {
    const response = await api.post("/m2m-support/submit", formData);
    return response?.data;
};

export const submitCustomQuote = async (payload) => {
    const response = await api.post("/quote/submit", payload);
    return response?.data;
};

export const submitBuyNow = async (form) => {
    const response = await api.post("/buynow/submit", form);
    return response?.data;
};

export const getSitemapData = async () => {
    // Use raw axios to hit the root /data endpoint (not /api/data)
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/data`);
        return response?.data;
    } catch (error) {
        console.error("Error fetching sitemap data:", error);
        return null;
    }
};

// Utility for dynamic URLs
export const fetchByUrl = async (url) => {
    const response = await axios.get(url);
    return response?.data;
};

// Partners
export const getPartnerSections = async () => {
    const response = await api.get("/partners/sections");
    return response?.data || { data: [] };
};

export const getPartnerItemDetails = async (itemId) => {
    const response = await api.get(`/partners/item/${itemId}`);
    return response?.data || { data: null };
};

// IoT Solutions
export const getIoTSolutions = async () => {
    const response = await api.get("/iot-solutions");
    return response?.data || [];
};

export const getIoTSolutionDetails = async (slug) => {
    const response = await api.get(`/iot-solutions/${slug}`);
    return response?.data;
};

// Home Content
export const getHomeContent = async () => {
    const response = await api.get("/home-content");
    return response?.data || {};
};

export default {
    getCountries,
    getOperatorsAndPlans,
    getKeyFeatures,
    getFaqGroups,
    getFaqsByGroup,
    searchFaq,
    submitM2MSupport,
    submitCustomQuote,
    submitBuyNow,
    fetchByUrl,
    getPartnerSections,
    getPartnerItemDetails,
    getIoTSolutions,
    getIoTSolutionDetails,
    getHomeContent,
    getSitemapData,
};
