import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import NavSearch from "@/components/layout/NavSearch";
import SearchBox from "@/components/train/SearchBox";
import Ads from "@/components/layout/Ads";
import DownloadCard from "@/components/layout/DownloadCard";
import FaQ from "@/components/train/FaQ";
import SliderContainer from "@/components/ui/SliderContainer";
import InfoSection from "@/components/train/InfoSection";
import Footer from "@/components/layout/Footer";
function TrainPage() {
  return (
    <Layout>
      <Header
        imageSrc="https://cdn.alibaba.ir/h/desktop/assets/images/hero/hero-0ed822b4.webp"
        alt="train-header-pic"
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
export default TrainPage;
