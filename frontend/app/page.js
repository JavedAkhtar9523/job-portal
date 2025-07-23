// import SpotlightOpportunitiesSection from "./home/SpotlightOpportunitiesSection";
import JobOpportunitiesSection from "./home/SpotlightOpportunitiesSection";
import SpreadsNetworkSection from "./home/SpreadsNetworkSection";
import TalentSpeaksSection from "./home/TalentSpeaksSection";
import VoicesFromCircleSection from "./home/VoicesFromCircleSection";
import WhyJoinSpreadsSection from "./home/WhyJoinSpreadsSection";

export default function Home() {
  return (
    <div>
      <TalentSpeaksSection />
      <WhyJoinSpreadsSection />
      <VoicesFromCircleSection />
      {/* <SpotlightOpportunitiesSection /> */}
      <JobOpportunitiesSection />
      <SpreadsNetworkSection />
    </div>
  );
}
