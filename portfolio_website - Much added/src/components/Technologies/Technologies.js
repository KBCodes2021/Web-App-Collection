import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <br />
    <SectionDivider />
    <br />
    <br />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with both Front End, Back End, and UX/UI.
    </SectionText>
      <List>
        <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience: <br />
            React.js <br />
            WordPress
          </ListParagraph>
        </ListContainer>
        </ListItem>
        <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience: <br />
            Node <br />
            Mongo <br />
          </ListParagraph>
        </ListContainer>
        </ListItem>
        <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>
            Experience: <br />
            Figma (GPT-3) <br />
             <br />
          </ListParagraph>
        </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
