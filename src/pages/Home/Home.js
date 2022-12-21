// import PageHeader from "../../containers/PageHeader/PageHeader";
import {
  PageHeader,
  PageFooter,
  Statistics,
  Steps,
  AboutUs,
  ContactUs
} from "../../containers";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <PageHeader />
      <Statistics />
      <Steps />
      <AboutUs />
      <ContactUs/>
      <PageFooter />
    </div>
  );
};

export default Home;
