import React from "react"
import { Section, SectionTitle, SectionSubtitle } from "../styles/SharedComponents"
import Markdown from 'react-remarkable'

function FurtherReading() {
    return (
        <Section>
            <SectionTitle>
                Further reading
            </SectionTitle>
            <SectionSubtitle>
                <Markdown>
                    {`## Published papers:  
  
  [All is Not Fair: The Cosmetics War on Women in India](https://scholarsbank.uoregon.edu/xmlui/bitstream/handle/1794/20709/Sambhi_oregon_0171N_11702.pdf?sequence=1)  
  
  [India's Color Complex: One Day's Worth of Matrimonials](https://socialequity.duke.edu/wp-content/uploads/2019/10/Indias-Color-Complex.pdf)  

  
  [India and colorism: the finer nuances](https://go.gale.com/ps/anonymous?id=GALE%7CA452881509&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=15466981&p=AONE&sw=w)  
  ## Colorism in the news:  
  [Shaadi.com: Dating site removes skin tone filter after backlash](https://www.bbc.com/news/newsbeat-53146969)  
  
  [Abhay Deol Instagram post with data from Google Search Trends for lightening](https://www.instagram.com/p/CBDVJOHpMnK/?utm_source=ig_embed)  
  
  
  [Miss India releases contestants photos, all are light skinned women](https://twitter.com/Naa_Cheese/status/1133234160473116673)  
  ## Anti-blackness in India:  
  [Gandhi is Deeply Revered, But His Attitudes on Race and Are Under Scrutiny](https://www.npr.org/2019/10/02/766083651/gandhi-is-deeply-revered-but-his-attitudes-on-race-and-sex-are-under-scrutiny)  
  ## South Asian immigration to the U.S.: 
  [Bengali Harlem](http://news.mit.edu/2013/vivek-bald-hidden-history-of-bengali-harlem-0107)`}
                </Markdown>
            </SectionSubtitle>
        </Section>
    )
}

export default FurtherReading