import Navigation from "@/components/layout/Navigation";
import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import NavSearch from "@/components/layout/NavSearch";
import SearchBox from "@/components/iran-out/SearchBox";
import SliderContainer from "@/components/ui/SliderContainer";
import DownloadCard from "@/components/layout/DownloadCard";
import FaQ from "@/components/iran-out/FaQ";
import Footer from "@/components/layout/Footer";

import InfoSection from "@/components/iran-out/InfoSection";
function IranOut() {
  return (
    <Layout>
      <Navigation />
      <Header />
      <NavSearch />
      <SearchBox />
      <SliderContainer />
      <DownloadCard />
      <FaQ />
      <InfoSection />
      <Footer />
    </Layout>
  );
}
export default IranOut;
