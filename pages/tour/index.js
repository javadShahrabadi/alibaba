import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import NavSearch from "@/components/layout/NavSearch";
import SearchBox from "@/components/tour/SearchBox";
import Ads from "@/components/layout/Ads";
import InfoSection from "@/components/tour/InfoSection";
import CardList from "@/components/tour/CardList";
import DownloadCard from "@/components/layout/DownloadCard";
import AnotherTourInfo from "@/components/tour/AnotherTourInfo";
import Footer from "@/components/layout/Footer";
function TourPage() {
  return (
    <Layout>
      <Header
        imageSrc="https://cdn.alibaba.ir/h/desktop/assets/images/hero/hero-5ce29f26.webp"
        alt="tour-header-pic"
      />
      <NavSearch />
      <SearchBox />
      <Ads />
      <InfoSection />
      <CardList />
      <DownloadCard />
      <AnotherTourInfo />
      <Footer />
    </Layout>
  );
}
export default TourPage;
