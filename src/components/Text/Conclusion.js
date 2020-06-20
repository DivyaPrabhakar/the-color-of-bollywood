import React from "react"
import { Section, SectionTitle, SectionSubtitle } from "../../styles/SharedComponents"
import ContactInformation from "../ContactInformation"
import Markdown from "react-remarkable"
import FurtherReading from "../FurtherReading"

function Conclusion() {
    return (
        <Section>
            <SectionTitle>Conclusion</SectionTitle>
            <SectionSubtitle>
                <Markdown>
                    {`As [media critic Anita Sarkeesian said](https://www.theverge.com/2014/11/14/7222007/value-of-criticism), "It's both possible and even necessary to simultaneously enjoy a piece of media while also being critical of its more problematic or pernicious aspects." 
                    That principle is one that Bollywood fans, beginning with myself, must keep in mind. An industry that is so dear to so many needs to both acknowledge 
                    this legacy — as illustrated above — and unite in a push to do better, and lead by example.  
  
  
 Bollywood is often slave to abstract, theoretical conversations about the perceived effects of harmful norms such as the bias towards fair skin in casting or the effects of nepotism. Armed with data, we can illustrate 
 both the existence of these issues, and their severity. Together, we can look at it and change the industry for the better.  
   
 I am adding to this data everyday and will continue to update it as I hit significant milestones. My next focuses are going to compare skin tones of lead actor-actress pairings in Bollywood, and leveraging the same 
 metrics presented above to analyze actresses in the next industry, Kollywood. I am also actively working on a separate data visualization surrounding nepotism in the industry.
                    `}
                </Markdown>
            </SectionSubtitle>
                <br/>
            <ContactInformation/>
            <FurtherReading/>
        </Section>
    )
}

export default Conclusion