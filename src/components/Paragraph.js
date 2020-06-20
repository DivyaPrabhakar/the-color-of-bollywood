import React from "react"
import { ParagraphContainer } from "../styles/ParagraphStyleComponents"

function Paragraph({header}) {
    return (
        <ParagraphContainer>
            {header}
        </ParagraphContainer>
    )
}

export default Paragraph