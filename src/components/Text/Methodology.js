import React from 'react'
import { SectionTitle, SectionSubtitle, Section } from '../../styles/SharedComponents'
import Markdown from "react-remarkable"

function Methodology() {
    return (
        <Section>
            <SectionTitle>Methodology</SectionTitle>
            <SectionSubtitle>
                <Markdown>
                    {` This analysis begins with actresses and their Bollywood debut year in a lead role, as found on 
                    [this Wikipedia page](https://en.wikipedia.org/wiki/List_of_Bollywood_actresses). For each individual, I looked for a 
                    picture to sample that is:  
* Preferably a selfie, as it represents how they wish to be seen  
* Minimal in makeup, filters, and set in outdoor light  
* Ideally posted on their personal Instagrams  
  
While imperfect, this approach focuses on images that they deemed appropriate and accurate representations of themselves. 
If an individual's skin tone seems off to you, consider how they present themselves on social media or how the media we 
consume might be misrepresenting their skin tone (most often lightening it).
                    `}
                </Markdown>
            </SectionSubtitle>
        </Section>
    )
}


export default Methodology