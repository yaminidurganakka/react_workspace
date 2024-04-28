import Body from "./components/Body/body.js";
import Brand from "./components/Brand-Names/brand.js";
import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";
import Middlecard from "./components/Middle-Card/middlecard.js";
import Middleinfo from "./components/Middle-Info/middleinfo.js";
import Middlenavi from "./components/Middle-Navi/middlenavi.js";

function App() {
  return (
    <div className="website-main-body">
      <Header />
      <Body />
      <Middlenavi />
      <Middlecard />
      <Middleinfo />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
