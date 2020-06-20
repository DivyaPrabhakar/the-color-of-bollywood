import styled from "styled-components"
import { SMALL_BOX_SIZE } from "../constants"

export const DebutTimelineContainer = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    flex-wrap: wrap;
`

export const PersonColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 16px;
    justify-content: flex-end;
`

export const TimelineLabel = styled.div`
    height: ${SMALL_BOX_SIZE};
    width: 100%;
`

export const YearLabel = styled.div`
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 0;
`