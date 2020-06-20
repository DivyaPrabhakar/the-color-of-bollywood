import React from "react"
import SkinColorGrid from "./SkinColorGrid"
import { SectionTitle, SectionSubtitle, Section, FlexRow } from "../styles/SharedComponents"
import LargeTextCallout from "./LargeTextCallout"
import Markdown from "react-remarkable"
import { calculateFairnessCreamPercentage } from "../helpers/calculateStats"
import { HighlightDot } from "../styles/SkinColorGridStyleComponents"

function EndorsedFairnessCreamsGrid({data}) {
    const endorsedPercentage = calculateFairnessCreamPercentage(data)

    return (
        <Section>
        <SectionTitle>Bollywood actresses who have endorsed skin lightening products</SectionTitle>
        <SectionSubtitle>
            <Markdown>
                {`The [impact of colorism](https://go.gale.com/ps/anonymous?id=GALE|A452881509&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=15466981&p=AONE&sw=w) in 
                India has been well-documented, with lighter skin being advantageous economically and culturally, especially for women. 
                [Colorism — defined by Alice Walker](https://en.wikipedia.org/wiki/In_Search_of_Our_Mothers%27_Gardens) in 1980 — is the differential treatment 
                associated with a shade and tone of skin due to social value, not a perceived racial category. Look up the [Brown Paper Bag test](https://www.nccj.org/colorism-0) as an example.  
  
Colorism is rampant in India. 
                Beauty companies take advantage of this systemic discrimination and [shove skin lightening products](https://www.nytimes.com/2007/05/30/business/media/30adco.html?_r=0) down the throats 
                of the Indian population, especially towards women. There are even [vaginal bleaching products](https://theconversation.com/bleached-girls-india-and-its-love-for-light-skin-80655) on the market.  
  
A 2017 report showed the global spending on skin lightening will reach [$31.2 billion by 2024](https://brightthemag.com/fair-but-not-so-lovely-indias-obsession-with-skin-whitening-beauty-body-image-bleaching-4d6ba9c9743d), with India
and China leading the way. A [2014 marketing study](https://theconversation.com/bleached-girls-india-and-its-love-for-light-skin-80655) cited 90% of Indian girls as considering skin 
lightening a high need, and a [2018 study by Vice](https://medium.com/@d_dsouza26/vice-says-60-of-indian-women-use-fairness-products-how-do-they-know-this-2bd9249202d4) said 60% of Indian women and 10% of Indian men use fairness products. 
These bleaching products often use mercury, which is a toxic substance, to suppress the production of melanin, amid a variety of other heavy metals and chemicals that damage the kidneys, brain, and other organs. This connection is so acute and such a widespread 
problem that in 2007 the World Health Organization launched a campaign [promoting eradication and regulation of lightening creams in India](https://scholarsbank.uoregon.edu/xmlui/bitstream/handle/1794/20709/Sambhi_oregon_0171N_11702.pdf?sequence=1).  
  
Unfortunately, the influence of top actresses in Bollywood has not been used for good in this arena. In fact, a number of actresses are profiting off of the exact industry that may kill their fans. 
(Note: [The recent news from Unilever](https://www.cnn.com/2020/06/25/business/hindustan-unilever-fair-and-lovely-intl-hnk/index.html) to rebrand from using "fair" to "glow and radiance" is a complete marketing farce to hide behind while still serving the
market poisonous products.)  
  
Hover over or touch a square to see the name.`
                }
            </Markdown>
        </SectionSubtitle>
        <LargeTextCallout text={`${endorsedPercentage} of the actresses have endorsed skin lightening products`}/>
        <FlexRow style={{marginBottom: "16px"}}>
            <HighlightDot style={{position: "relative", height:"15px", width: "15px"}}/>
            <div style={{fontSize: "16px"}}>{"= endorsed a skin lightening product"}</div>
        </FlexRow>
        <SkinColorGrid data={data}
            showHighlight={true} highlightProperty={"skin_lightening"}/>
        </Section>

    )
}

export default EndorsedFairnessCreamsGrid