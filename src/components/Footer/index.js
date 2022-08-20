import React from 'react'
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        
                    </FooterLinkItems>

                    
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                    
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        logo
                    </SocialLogo>
                    <WebsiteRights>logo © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='//www.facebook.com' target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href='//www.instagram.com' target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='//www.youtube.com' target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                        <SocialIconLink href='//www.twitter.com' target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href='//www.Linkedin.com' target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
      
    </FooterContainer>
  )
}

export default Footer