import React from "react";
import hexSorter from "hexsorter";
import numeral from "numeral";
import {
  SpectrumContainer, CenteredContent, MedianColumn,
} from "../styles/ColorSpectrumComponents";
import { PersonBox, SectionTitle, Section, SectionSubtitle } from "../styles/SharedComponents";
import {
  getSkinColorArray,
  getQuartileMedians,
} from "../helpers/filterData";
import { LARGE_BOX_SIZE } from "../constants";
import { YearLabel } from "../styles/DebutTimelineComponents";
import Markdown from "react-remarkable"

function ColorSpectrum({ data }) {
  const unsortedColors = getSkinColorArray(data);
  const brightColors = hexSorter
    .sortColors(unsortedColors, "mostBrightColor")
    .reverse();
  const entryWidth = numeral(100 / brightColors.length).format("0.0");
  const medianMap = getQuartileMedians(brightColors);

  return (
    <>
    <Section>
      <SectionTitle>
        Ordered spectrum of all the skin tones, from darkest to lightest
      </SectionTitle>
      <SectionSubtitle>
        <Markdown>
          {`This spectrum captures actresses' skin tones, ordered from [darkest to lightest](https://www.npmjs.com/package/hexsorter). Looking closer at the lower, middle, and upper quartiles, we 
          find remarkably little variation. While locating an illustrated range of skin tones present in India has proven a challenge, [multiple](http://usd475.maps.arcgis.com/apps/MapSeries/index.html?appid=50915a00abd544c88b86529f8c2aa176) 
          [scientific](https://external-preview.redd.it/eMDH0irnZzzsf6Tu3y_lC7IWFjlec7I1822dY9eYrTE.jpg?auto=webp&s=573317b78eafa1ebc2ba5fe5ae26de1c3359e87f) 
          [studies](https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1003912#pgen.1003912.s006) 
          [show](https://onlinelibrary.wiley.com/doi/epdf/10.1002/ajpa.23737?author_access_token=F5g4jNGmxSr93uxLz_AMBE4keas67K9QMdWULTWMo8NacSMxISjLOiDFNl6w20opBLXg_UCxxDHI3rPd9OjxKVfS3PiKveuLlh9p4slHM5JIbOVJFqczWI5uJpAVrw-h) that 
          Indian ethnic groups are remarkably varied; the Melanin Index for Indians runs from the same levels recorded for Northern European natives all the way to the recorded levels for 
          African natives. However, despite this extreme diversity, Bollywood actresses over the last 30 years have skewed towards fairer complexion, consolidated in a remarkably narrow band.`}
        </Markdown>
      </SectionSubtitle>

      <SpectrumContainer>
        {brightColors.map((c, index) => (
          <PersonBox color={c} key={`${c}_${index}_color_spectrum`}
            height={LARGE_BOX_SIZE} width={`${entryWidth}%`} />
        ))}
      </SpectrumContainer>
      <CenteredContent>
        {Object.entries(medianMap).map(([percentile, median]) => (
          <MedianColumn key={`median_column_${percentile}`} style={{alignItems: "center"}}>
            <PersonBox
              height={LARGE_BOX_SIZE}
              color={median}
              width={`${LARGE_BOX_SIZE}`}
            />
            <YearLabel>{percentile}</YearLabel>
          </MedianColumn>
        ))}
      </CenteredContent>
    </Section>
    </>
  );
}
export default ColorSpectrum;
