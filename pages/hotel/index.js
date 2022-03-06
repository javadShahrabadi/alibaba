import React from "react";
import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import NavSearch from "@/components/layout/NavSearch";
import SearchBox from "@/components/tour/SearchBox";
import Ads from "@/components/layout/Ads";
import HotelListGlobal from "@/components/hotel/HotelListGlobal";
import HotelListIran from "@/components/hotel/HotelListIran";
import DownloadCard from "@/components/layout/DownloadCard";
import FaQ from "@/components/hotel/FaQ";
import InfoSection from "@/components/hotel/InfoSection";
import Footer from "@/components/layout/Footer";
const HotelPage = () => {
  return (
    <Layout>
      <Header
        imageSrc="https://cdn.alibaba.ir/h/desktop/assets/images/hero/hero-e21d0cef.webp"
        alt="hotel-banner-alt"
      />
      <NavSearch />
      <SearchBox />
      <Ads />
      <HotelListGlobal />
      <HotelListIran />
      <DownloadCard />
      <FaQ />
      <InfoSection />
      <Footer />
    </Layout>
  );
};
export default HotelPage;
