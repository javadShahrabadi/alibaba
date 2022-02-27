import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import NavSearch from "@/components/layout/NavSearch";
import SearchBox from "@/components/bus/SearchBox";
import Ads from "@/components/layout/Ads";
import DownloadCard from "@/components/layout/DownloadCard";
import FaQ from "@/components/bus/FaQ";
import InfoSection from "@/components/bus/InfoSection";
import Footer from "@/components/layout/Footer";
function BusPage() {
  return (
    <Layout>
      <Header
        imageSrc="https://cdn.alibaba.ir/h/desktop/assets/images/hero/hero-d78d4a82.webp"
        alt="bus-header-pic"
      />
      <NavSearch />
      <SearchBox />
      <Ads />
      <div className="mt-8">
        <DownloadCard />
      </div>
      <FaQ />
      <InfoSection />
      <Footer />
    </Layout>
  );
}
export default BusPage;
