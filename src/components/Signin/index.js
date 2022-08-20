import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, Text, FormButton, FormInput, FormLabel, Texti, InfoRow, Column1, Column2, ImgWrap, Img } from './SigninElements'
import main from './main.svg'
const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
      
            <Icon to='/'>Logo</Icon>
            <InfoRow >
            <FormContent>
              <Column1>
                <Form action ="#">
                    <FormH1>Sign In </FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
                </Column1>

            </FormContent>
            <Column2>
                <ImgWrap>
                <Img className='img' src={main} alt='see'/>
                </ImgWrap>
                </Column2>
            </InfoRow >
        </FormWrap>
    </Container>
      
    </>
  )
}

export default SignIn
