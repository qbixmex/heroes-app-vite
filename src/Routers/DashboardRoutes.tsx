import { Route, Routes } from "react-router-dom";
import DCScreen from "../Components/DC/DCScreen";
import MarvelScreen from "../Components/Marvel/MarvelScreen";
import SearchScreen from "../Components/Search/SearchScreen";
import { Navbar } from "../Components/UI/Navbar";
import HeroScreen from '../Components/Heroes/HeroScreen';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <section className="container">
        <Routes>
          <Route path="/" element={ <MarvelScreen /> } />
          <Route path="marvel" element={ <MarvelScreen /> } />
          <Route path="dc" element={ <DCScreen /> } />
          <Route path="search" element={ <SearchScreen /> } />
          <Route path="hero/:id" element={ <HeroScreen /> } />
        </Routes>
      </section>
    </>
  );
};

export default DashboardRoutes;
