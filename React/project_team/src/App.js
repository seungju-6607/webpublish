// src/App.js
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

// women
import WomenMain from "./pages/women/WomenMain";
import WomenNew from "./pages/women/WomenNew";
import WomenOuter from "./pages/women/WomenOuter";
import WomenJacket from "./pages/women/WomenJacket";
import WomenKnit from "./pages/women/WomenKnit";
import WomenShirt from "./pages/women/WomenShirt";
import WomenTshirt from "./pages/women/WomenTshirt";
import WomenOnepiece from "./pages/women/WomenOnepiece";
import WomenPants from "./pages/women/WomenPants";
import WomenSkirt from "./pages/women/WomenSkirt";

// men
import MenMain from "./pages/men/MenMain";
import MenNew from "./pages/men/MenNew";
import MenSuit from "./pages/men/MenSuit";
import MenPants from "./pages/men/MenPants";
import MenJacket from "./pages/men/MenJacket";
import MenShirt from "./pages/men/MenShirt";
import MenKnit from "./pages/men/MenKnit";
import MenTshirt from "./pages/men/MenTshirt";

// kids
import KidsMain from "./pages/kids/KidsMain";
import KidsNew from "./pages/kids/KidsNew";
import KidsBoy from "./pages/kids/KidsBoy";
import KidsGirl from "./pages/kids/KidsGirl";
import KidsBaby from "./pages/kids/KidsBaby";

// luxury
import LuxuryMain from "./pages/luxury/LuxuryMain";
import LuxuryNew from "./pages/luxury/LuxuryNew";
import LuxuryWomen from "./pages/luxury/LuxuryWomen";
import LuxuryMen from "./pages/luxury/LuxuryMen";

// shoes
import ShoesMain from "./pages/shoes/ShoesMain";
import ShoesNew from "./pages/shoes/ShoesNew";
import ShoesWomen from "./pages/shoes/ShoesWomen";
import ShoesMen from "./pages/shoes/ShoesMen";

// sports
import SportsMain from "./pages/sports/SportsMain";
import SportsNew from "./pages/sports/SportsNew";
import SportsOutdoor from "./pages/sports/SportsOutdoor";
import SportsRunning from "./pages/sports/SportsRunning";
import SportsYoga from "./pages/sports/SportsYoga";
import SportsFitness from "./pages/sports/SportsFitness";
import SportsTennis from "./pages/sports/SportsTennis";
import SportsSwim from "./pages/sports/SportsSwim";

// golf
import GolfMain from "./pages/golf/GolfMain";
import GolfNew from "./pages/golf/GolfNew";
import GolfWomen from "./pages/golf/GolfWomen";
import GolfMen from "./pages/golf/GolfMen";

// beauty
import BeautyMain from "./pages/beauty/BeautyMain";
import BeautyNew from "./pages/beauty/BeautyNew";
import BeautySkin from "./pages/beauty/BeautySkin";
import BeautyMakeup from "./pages/beauty/BeautyMakeup";
import BeautyPerfume from "./pages/beauty/BeautyPerfume";

// life
import LifeMain from "./pages/life/LifeMain";
import LifeNew from "./pages/life/LifeNew";
import LifeFurniture from "./pages/life/LifeFurniture";
import LifePet from "./pages/life/LifePet";
import LifeCar from "./pages/life/LifeCar";

// outlet
import OutletMain from "./pages/outlet/OutletMain";
import OutletWomen from "./pages/outlet/OutletWomen";
import OutletMen from "./pages/outlet/OutletMen";
import OutletKids from "./pages/outlet/OutletKids";
import OutletLuxury from "./pages/outlet/OutletLuxury";
import OutletShoes from "./pages/outlet/OutletShoes";
import OutletSports from "./pages/outlet/OutletSports";
import OutletGolf from "./pages/outlet/OutletGolf";
import OutletLife from "./pages/outlet/OutletLife";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* women */}
        <Route exact path="/women" component={WomenMain} />
        <Route path="/women/new" component={WomenNew} />
        <Route path="/women/outer" component={WomenOuter} />
        <Route path="/women/jacket" component={WomenJacket} />
        <Route path="/women/knit" component={WomenKnit} />
        <Route path="/women/shirt" component={WomenShirt} />
        <Route path="/women/tshirt" component={WomenTshirt} />
        <Route path="/women/onepiece" component={WomenOnepiece} />
        <Route path="/women/pants" component={WomenPants} />
        <Route path="/women/skirt" component={WomenSkirt} />

        {/* men */}
        <Route exact path="/men" component={MenMain} />
        <Route path="/men/new" component={MenNew} />
        <Route path="/men/suit" component={MenSuit} />
        <Route path="/men/pants" component={MenPants} />
        <Route path="/men/jacket" component={MenJacket} />
        <Route path="/men/shirt" component={MenShirt} />
        <Route path="/men/knit" component={MenKnit} />
        <Route path="/men/tshirt" component={MenTshirt} />

        {/* kids */}
        <Route exact path="/kids" component={KidsMain} />
        <Route path="/kids/new" component={KidsNew} />
        <Route path="/kids/boy" component={KidsBoy} />
        <Route path="/kids/girl" component={KidsGirl} />
        <Route path="/kids/baby" component={KidsBaby} />

        {/* luxury */}
        <Route exact path="/luxury" component={LuxuryMain} />
        <Route path="/luxury/new" component={LuxuryNew} />
        <Route path="/luxury/women" component={LuxuryWomen} />
        <Route path="/luxury/men" component={LuxuryMen} />

        {/* shoes */}
        <Route exact path="/shoes" component={ShoesMain} />
        <Route path="/shoes/new" component={ShoesNew} />
        <Route path="/shoes/women" component={ShoesWomen} />
        <Route path="/shoes/men" component={ShoesMen} />

        {/* sports */}
        <Route exact path="/sports" component={SportsMain} />
        <Route path="/sports/new" component={SportsNew} />
        <Route path="/sports/outdoor" component={SportsOutdoor} />
        <Route path="/sports/running" component={SportsRunning} />
        <Route path="/sports/yoga" component={SportsYoga} />
        <Route path="/sports/fitness" component={SportsFitness} />
        <Route path="/sports/tennis" component={SportsTennis} />
        <Route path="/sports/swim" component={SportsSwim} />

        {/* golf */}
        <Route exact path="/golf" component={GolfMain} />
        <Route path="/golf/new" component={GolfNew} />
        <Route path="/golf/women" component={GolfWomen} />
        <Route path="/golf/men" component={GolfMen} />

        {/* beauty */}
        <Route exact path="/beauty" component={BeautyMain} />
        <Route path="/beauty/new" component={BeautyNew} />
        <Route path="/beauty/skin" component={BeautySkin} />
        <Route path="/beauty/makeup" component={BeautyMakeup} />
        <Route path="/beauty/perfume" component={BeautyPerfume} />

        {/* life */}
        <Route exact path="/life" component={LifeMain} />
        <Route path="/life/new" component={LifeNew} />
        <Route path="/life/furniture" component={LifeFurniture} />
        <Route path="/life/pet" component={LifePet} />
        <Route path="/life/car" component={LifeCar} />

        {/* outlet */}
        <Route exact path="/outlet" component={OutletMain} />
        <Route path="/outlet/women" component={OutletWomen} />
        <Route path="/outlet/men" component={OutletMen} />
        <Route path="/outlet/kids" component={OutletKids} />
        <Route path="/outlet/luxury" component={OutletLuxury} />
        <Route path="/outlet/shoes" component={OutletShoes} />
        <Route path="/outlet/sports" component={OutletSports} />
        <Route path="/outlet/golf" component={OutletGolf} />
        <Route path="/outlet/life" component={OutletLife} />
      </Switch>
    </Router>
  );
}

export default App;
