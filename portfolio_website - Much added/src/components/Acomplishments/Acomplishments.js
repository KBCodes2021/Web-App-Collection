import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Completed Projects'},
  { number: 15, text: 'GitHub Pushes', },
  { number: 10, text: 'Live Apps Launched', },
  { number: 12, text: 'Months of Determination!', }
];

const Acomplishments = () => (


  <Section>
    <br />
    <br />
    <br />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
