import Layout from "@/components/layout/Layout";
import Navigation from "@/components/layout/Navigation";
import Header from "@/components/layout/Header";
import NavSearch from "@/components/layout/NavSearch";
import SearchBox from "@/components/home-components/Search.Box";
import Ads from "@/components/layout/Ads";
import SliderContainer from "@/components/ui/SliderContainer";
import DownloadCard from "@/components/layout/DownloadCard";
import FaQ from "@/components/layout/FaQ";
import InfoSection from "@/components/home-components/InfoSection";
import Footer from "@/components/layout/Footer";
function HomePage() {
  return (
    <Layout>
      <Navigation />
      <Header />
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
