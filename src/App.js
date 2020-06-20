import React from "react";
import Container from "@material-ui/core/Container";
import EndorsedFairnessCreamsGrid from "./components/EndorsedFairnessCreamsGrid";
import LargeTextCallout from "./components/LargeTextCallout";
import personData from "./data/bollywood_skin_colors.json";
import { sortPeopleByYear } from "./helpers/groupByDebutYear";
import ColorSpectrum from "./components/ColorSpectrum";
import DebutTimeline from "./components/DebutTimeline";
import OverallGrid from "./components/OverallGrid";
import Methodology from "./components/Text/Methodology";
import Introduction from "./components/Text/Introduction";
import Conclusion from "./components/Text/Conclusion";
// import ReactGA from 'react-ga';

// const trackingId = "UA-170819826-1"; // Replace with your Google Analytics tracking ID
// ReactGA.initialize(trackingId);

function App() {
  const womenSortedByYear = sortPeopleByYear(personData);

  return (
    <Container maxWidth={"lg"}>
      <Introduction/>
      <Methodology/>
      <LargeTextCallout text={`${womenSortedByYear.length} actresses analyzed`} />
      <OverallGrid data={womenSortedByYear}/>
      <EndorsedFairnessCreamsGrid data={womenSortedByYear} />
      <ColorSpectrum data={womenSortedByYear} />
      <DebutTimeline data={womenSortedByYear} />
      <Conclusion/>
      <div style={{marginBottom: "50px"}}></div>
    </Container>
  );
}

export default App;
