import styled from "styled-components"

export const MainTitle = styled.div`
    font-size: 45px;
    font-family: 'Karla', sans-serif;
    line-height: 4.2rem;
`

export const MainSubtitle = styled.div`
    font-size: 20px;
    margin-bottom: 64px;
    line-height: 2rem;
`

export const PersonBox = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: ${props => props.color};
    position: relative;
    cursor: default;
`

export const SectionTitle = styled.p`
    font-size: 30px;
    font-family: 'Karla', sans-serif;
`

export const SectionSubtitle = styled.div`
    font-size: 20px;
    line-height: 2rem;
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
`

export const Section = styled.section`
    margin: 64px 0;
`

export const FlexWrap = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`