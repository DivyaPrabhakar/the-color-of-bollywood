import React from "react";
import {
  createYearToPeopleMap,
} from "../helpers/groupByDebutYear";
import {
  DebutTimelineContainer,
  PersonColumn,
  YearLabel,
  TimelineLabel,
} from "../styles/DebutTimelineComponents";
import {
  PersonBox,
  SectionTitle,
  FlexColumn,
  Section,
  SectionSubtitle,
} from "../styles/SharedComponents";
import Markdown from "react-remarkable"
import { SMALL_BOX_SIZE, LARGE_BOX_SIZE } from "../constants";
import StateTimeline from "./StateTimeline";

function DebutTimeline({ data }) {
  const yearToPeopleMap = createYearToPeopleMap(data);
  const entries = Object.entries(yearToPeopleMap)

  return (
    <>
      <Section>
        <SectionTitle>
          Skin tones (ordered from lightest to darkest) by debut year
        </SectionTitle>
        <DebutTimelineContainer>
          <PersonColumn>
            <TimelineLabel style={{ margin: "8px 0" }}>
              Year of debut
            </TimelineLabel>
            <TimelineLabel>Median skin color for year</TimelineLabel>
          </PersonColumn>
          {entries.map(
            ([year, { sortedArray, medianValue }, index]) => {
              return (
                <PersonColumn
                  key={`${year}_${index}_${medianValue}_debut_timeline`}
                >
                  {sortedArray.map((p, index) => {
                    return (
                      <PersonBox
                        key={`${p}_${index}_debut_timeline`}
                        width={SMALL_BOX_SIZE}
                        height={SMALL_BOX_SIZE}
                        color={p}
                      />
                    );
                  })}
                  <YearLabel>{year}</YearLabel>
                  <PersonBox
                    width={SMALL_BOX_SIZE}
                    height={SMALL_BOX_SIZE}
                    color={medianValue}
                  />
                </PersonColumn>
              );
            }
          )}
        </DebutTimelineContainer>
      </Section>
      <Section>
        <SectionTitle>
          Median skin tones in chronological order
        </SectionTitle>
        <SectionSubtitle>
          <Markdown>
            {`These are the median skin tones chosen from each list of actresses that debuted in a given year. Viewing 
            median skin tone by year, alongside the skin tone spectrum per year, is a useful proxy for detecting an increase in diversity over time. 
            We would hope to see a new trend in skin tone emerge as awareness has risen, especially within the past decade. Unfortunately, no such pattern exists.`}
          </Markdown>
        </SectionSubtitle>
        <DebutTimelineContainer style={{marginTop: "16px"}}>
          {entries.map(([year, {medianValue}]) => {
            return (
              <FlexColumn key={`${year}_${medianValue}_year_median`}>
                <PersonBox
                  style={{ margin: "0 8px" }}
                  color={medianValue}
                  height={LARGE_BOX_SIZE}
                  width={LARGE_BOX_SIZE}
                />
                <YearLabel>{year}</YearLabel>
              </FlexColumn>
            );
          })}
        </DebutTimelineContainer>
      </Section>
      <StateTimeline data={data}/>
    </>
  );
}

export default DebutTimeline;
