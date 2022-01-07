import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:778-998-1428">778-998-1428</LinkItem>
        </LinkColumn>
        <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:nkrause.ebay@gmail.com">nkrause.ebay@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>Taking on each new project in stride</Slogan>       
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
