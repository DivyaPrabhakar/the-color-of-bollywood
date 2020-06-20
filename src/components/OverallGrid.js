import React from "react";
import {
  SectionTitle,
  SectionSubtitle,
  Section,
} from "../styles/SharedComponents";
import SkinColorGrid from "./SkinColorGrid";
import Markdown from "react-remarkable";

function OverallGrid({ data }) {
  return (
    <Section>
      <SectionTitle>
        Skin tones of the actresses in Bollywood debuted in a lead role (1990 -
        2020)
      </SectionTitle>
      <SectionSubtitle style={{marginBottom: "24px"}}>
        <Markdown>
          {`This grid displays the skin tones of Bollywood actresses who debuted in a lead role, between the years of 1990 to 2020. 
            Each square represents one person.  
  
  
  While by definition Bollywood doesn't represent the [entire Indian cinema](https://www.statista.com/statistics/235837/value-of-the-film-industry-in-india) industry,
[a 2014 study](https://www2.deloitte.com/content/dam/Deloitte/in/Documents/technology-media-telecommunications/in-tmt-economic-contribution-of-motion-picture-and-television-industry-noexp.pdf) showed it brings in 43%
of the next box-office revenue and is the largest and widest-reaching branch of the industries. Decades of unparalleled 
success have in turn yielded [higher budgets](https://www.cnbc.com/2018/08/03/indian-films-attract-millions-globally-and-it-appears-to-be-growing.html), driving
a virtuous cycle of promotion and success. [Hindi continues to be the most popular language](https://www.statista.com/topics/2140/film-industry-in-india/) for Indian cinephiles, regardless 
of region domestically or abroad. Thus, it is imperative for Bollywood and its constituents to responsibly reflect the vast 
diversity present in India and its own consumers — both directly in film and indirectly in its influence on beauty standards worldwide 
for women of color.  
  
Unfortunately this table begins to tell a different story — one of large scale similarity, if not uniformity, over the last 30 years.  
  
  
Hover or touch a square to see the name. Click on a square to see the photo used for skin tone sampling.
            `}
        </Markdown>
      </SectionSubtitle>
      <SkinColorGrid data={data} photoLink={true} />
    </Section>
  );
}

export default OverallGrid;
