import React, { useState } from "react";
import {
  SkinColorGridContainer,
  NameBox,
  PhotoLink,
  HighlightDot,
} from "../styles/SkinColorGridStyleComponents";
import { PersonBox } from "../styles/SharedComponents";
import { LARGE_BOX_SIZE } from "../constants";

export const PersonContainer = ({
  data,
  showHighlight,
  highlightProperty,
  photoLink,
}) => {
  const { name, skin_color, skin_tone_photo } = data;
  const [isHovered, updateIsHovered] = useState(false);

  const isHighlighted = showHighlight && data[highlightProperty] === "TRUE" 

  return (
    <>
      {photoLink && (
        <PhotoLink href={skin_tone_photo}
          target="blank">
          <PersonBox
            color={skin_color}
            height={LARGE_BOX_SIZE}
            width={LARGE_BOX_SIZE}
            onMouseLeave={() => updateIsHovered(false)}
            onMouseEnter={() => updateIsHovered(true)}
          >
            {isHighlighted && <HighlightDot/>}
            {isHovered && <NameBox photoLink={photoLink}>{name}</NameBox>}
          </PersonBox>
        </PhotoLink>
      )}
      
      {!photoLink && (
        <PersonBox
          color={skin_color}
          height={LARGE_BOX_SIZE}
          width={LARGE_BOX_SIZE}
          onMouseLeave={() => updateIsHovered(false)}
          onMouseEnter={() => updateIsHovered(true)}
        >
          {isHighlighted && <HighlightDot className="dot"/>}
          {isHovered && <NameBox>{name}</NameBox>}
        </PersonBox>
      )}
    </>
  );
};

function SkinColorGrid({
  showHighlight = false,
  highlightProperty,
  data,
  photoLink = false,
}) {
  return (
    <>
      <SkinColorGridContainer>
        {data.map((d) => (
          <PersonContainer
            key={`${d.name}_skin_color_grid`}
            showHighlight={showHighlight}
            photoLink={photoLink}
            highlightProperty={highlightProperty}
            data={d}
          />
        ))}
      </SkinColorGridContainer>
    </>
  );
}

export default SkinColorGrid;
