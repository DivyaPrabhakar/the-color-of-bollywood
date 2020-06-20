import React from "react"
import { FlexRow, SectionSubtitle, FlexColumn, SectionTitle } from "../styles/SharedComponents"
import { Icon } from "semantic-ui-react"
import Markdown from "react-remarkable"

function ContactInformation() {
    return (
        <FlexColumn>
            <SectionTitle style={{color: "var(--link-color)", fontWeight: "bold"}}>
                Comments, questions, suggestions, amendments? Contact me:</SectionTitle>
                <FlexRow>
                    <Icon name="mail" style={{marginRight: "8px", marginBottom: "8px"}}/>
                    <SectionSubtitle>thecolorofbollywood at gmail dot com</SectionSubtitle>
                </FlexRow>
                <FlexRow>
                    <Icon name="twitter" style={{marginRight: "8px"}}/>
                    <SectionSubtitle>
                    <Markdown>{`Twitter: [divprabh](https://twitter.com/divprabh)`}</Markdown>
                    </SectionSubtitle>
                </FlexRow>
            
        </FlexColumn>
    )
}

export default ContactInformation