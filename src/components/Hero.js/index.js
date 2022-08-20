import React from 'react';
import {Button} from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img  } from './HeroElements';

import main from './main.svg'

const HeroSection = ({ id,  primary, dark,  }) => {
  return (
    <>
      <InfoContainer  id={id}>
        <InfoWrapper>
            <InfoRow >
                <Column1>
                <TextWrapper>
                    <TopLine>Lorem, ipsum dolor.</TopLine>
                    <Heading >Lorem, ipsum dolor.</Heading>
                    <Subtitle >Lorem ipsum dolor sit amet.</Subtitle>
                    <BtnWrap>
                        <Button to="home" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 0 : 1}
                        dark={ dark ? 0 : 1}
                        // dark2= {dark2 ? 1 : 0}
                        >Get Started</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img className='img' src={main} alt='no'/>
                </ImgWrap></Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default  HeroSection
