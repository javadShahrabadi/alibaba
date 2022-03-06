import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import NavSearch from "@/components/layout/NavSearch";
import SearchBox from "@/components/tour/SearchBox";
import Ads from "@/components/layout/Ads";
import CartContainer from "@/components/accommodation/CartContainer";
import InfoSection from "@/components/accommodation/InfoSection";
import DownloadCard from "@/components/layout/DownloadCard";
import Description from "@/components/accommodation/Description";
import Footer from "@/components/layout/Footer";

function AccommodationPage() {
  return (
    <Layout>
      <Header
        imageSrc="https://cdn.alibaba.ir/h/desktop/assets/images/hero/hero-7d07f8f2.webp"
        alt="accommodation-banner-pic"
      />
      <NavSearch />
      <SearchBox />
      <Ads />
      <InfoSection />
      <CartContainer />
      <Description />
      <DownloadCard />
      <Footer />
    </Layout>
  );
}

export default AccommodationPage;
