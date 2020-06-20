import React from "react";
import { groupByDirection } from "../helpers/groupByState";
import {
  Section,
  SectionTitle,
  PersonBox,
  FlexWrap,
  FlexRow,
  SectionSubtitle,
} from "../styles/SharedComponents";
import Markdown from "react-remarkable"
import { SMALL_BOX_SIZE } from "../constants";
import { Table } from "semantic-ui-react";

function StateTimeline({ data }) {
  const { north, west, south, east, international } = groupByDirection(
    data
  );

  return (
    <Section>
      <SectionTitle>Skin tone by area of India the actresses grew up in </SectionTitle>
      <SectionSubtitle>
        <Markdown>
          {`Because India is essentially a state of nations, another way to look at the data is by where each actress is from. 
          Bollywood does not represent the nation as a whole in terms of skin tone diversity, as seen in the visuals above. When broken further into cardinal 
          directions, we can see from which regions Bollywood lead actress talent typically flows, and their associated skin tones. Looking at these tables, 
          talent from the Indian diaspora and Southern India appears particularly at odds with the skin tones typically associated with their members — or 
          at the very least, suspiciously monochrome. In addition, based on personal knowledge, we need to increase the number of actresses who hail from 
          states like Assam, Sikkim, Nagaland, and Manipur, to name a few, to [increase visibility specifically](https://www.scoopwhoop.com/inothernews/bollywood-mary-kom-priyanka/) from North East India.`}
        </Markdown>
      </SectionSubtitle>
      <FlexRow style={{alignItems: "flex-start", marginTop: "24px", width: "100%"}}>
        <Table fixed style={{ width: "25%", marginRight: "16px" }}>
          <Table.Body>
            <Table.Row>
          <Table.Cell>
            <div>Grew up outside of India</div>
            <FlexWrap>
              {international.map((p, index) => (
                <PersonBox
                  key={`international_${p}_${index}`}
                  color={p}
                  width={SMALL_BOX_SIZE}
                  height={SMALL_BOX_SIZE}
                />
              ))}
            </FlexWrap>
          </Table.Cell>
          </Table.Row>
          </Table.Body>
        </Table>

        <Table fixed style={{ width: "70%", marginTop: 0 }}>
          <Table.Body>
            {/* ROW 1 */}
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div>Northern India</div>
                <FlexWrap>
                  {north.map((p, index) => (
                    <PersonBox
                      key={`north_${p}_${index}`}
                      color={p}
                      width={SMALL_BOX_SIZE}
                      height={SMALL_BOX_SIZE}
                    />
                  ))}
                </FlexWrap>
              </Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            {/* ROW 2 */}
            <Table.Row>
              <Table.Cell>
                <div>Western India</div>
                <FlexWrap>
                  {west.map((p, index) => (
                    <PersonBox
                      key={`west_${p}_${index}`}
                      color={p}
                      width={SMALL_BOX_SIZE}
                      height={SMALL_BOX_SIZE}
                    />
                  ))}
                </FlexWrap>
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div>Eastern India</div>

                <FlexWrap>
                  {east.map((p, index) => (
                    <PersonBox
                      color={p}
                      key={`east_${p}_${index}`}
                      width={SMALL_BOX_SIZE}
                      height={SMALL_BOX_SIZE}
                    />
                  ))}
                </FlexWrap>
              </Table.Cell>
            </Table.Row>
            {/* ROW 3 */}
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div>Southern India</div>

                <FlexWrap>
                  {south.map((p, index) => (
                    <PersonBox
                      color={p}
                      key={`south_${p}_${index}`}
                      width={SMALL_BOX_SIZE}
                      height={SMALL_BOX_SIZE}
                    />
                  ))}
                </FlexWrap>
              </Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </FlexRow>

    </Section>
  );
}

export default StateTimeline;
