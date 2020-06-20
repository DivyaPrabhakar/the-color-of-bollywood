import React from "react";
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  MainTitle,
  MainSubtitle,
} from "../../styles/SharedComponents";
import Markdown from "react-remarkable";

function Introduction() {
  return (
    <Section style={{ margin: "32px 0" }}>
      <MainTitle>The Color of Bollywood</MainTitle>
      <MainSubtitle>
        A data visualization looking at the skin tones of actresses with skin in
        the game.
      </MainSubtitle>

      <SectionTitle style={{ marginTop: "16px" }}>Introduction</SectionTitle>
      <SectionSubtitle>
        <Markdown>
          {`For me, Bollywood was love at first sight — beginning when my mom took me to see *Hum Aapke Hai Kaun* (3 hours 26 minutes) 
            at age two in Calcutta. I sat through most of the film, and the next year I made it all the way through *Dilwale Dulhaniya Le Jayenge* (3 hours, 10 minutes). 
            Since then, I have followed movie releases and industry gossip closely, bought the official *Mujhse Dosti Karoge*'s Tina merchandise 
            from Pantaloons, and phonetically memorized hundreds of Hindi song lyrics.  
  
  
  In that same time — across two decades — I've also lived in multiple cities across the U.S. and in Chennai, India. Both
            countries have unique and violent experiences with systems of oppression, and share elements of rampant anti-Black sentiment in the 
            forms of racism and colorism. The anti-racism groundswell in the United States has inspired me to help enable a similar 
            push for accountability in Indian film, starting with Bollywood. In this post, I'll be sharing some data related to color and 
            opportunity in Bollywood — beginning to quantify just how far the industry, and we as its sponsors, consumers, and fans, have to go.
              `}
        </Markdown>
      </SectionSubtitle>
    </Section>
  );
}

export default Introduction;
