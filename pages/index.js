import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import NavSearch from "@/components/layout/NavSearch";
import SearchBox from "@/components/home-components/SearchBox";
import Ads from "@/components/layout/Ads";
import SliderContainer from "@/components/ui/SliderContainer";
import DownloadCard from "@/components/layout/DownloadCard";
import FaQ from "@/components/home-components/FaQ";
import InfoSection from "@/components/home-components/InfoSection";
import Footer from "@/components/layout/Footer";

// ------------------------

function HomePage() {
  return (
    <Layout>
      <Header
        imageSrc="https://cdn.alibaba.ir/h/desktop/assets/images/hero/hero-518e7e11.webp"
        alt="iran-plane-header-pic"
      />
      <NavSearch />
      <SearchBox />
      <Ads />
      <SliderContainer />
      <DownloadCard />
      <FaQ />
      <InfoSection />
      <Footer />
    </Layout>
  );
}
export default HomePage;
