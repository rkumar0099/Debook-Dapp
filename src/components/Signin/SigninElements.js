import styled from 'styled-components';
import { Link} from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #0373f9;
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;

    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 400px) {
    height: 100%;
    }

    @media screen and (max-width: 768px) {
    padding-left: 20px;
    

    }

`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none; 
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
    }
`


export const FormContent = styled.div`
    height: 100%;
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 480px) {
    padding: 10px; 


}
`
export const Form = styled.form`

    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
  
    display: grid;
    margin: 0 auto;
    padding: 90px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
    padding: 32px 32px;
    }

    @media screen and (max-width: 768px) {
    width: 400px;

    
    }

`



export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;

`


export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;

`

export const FormButton = styled.button`
    background: #0373f9;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;


export const Texti = styled.div`

    width: 40px;
    display: grid;

`


export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    margin-top: 20px;
    grid-template-areas: "col1 col2"; 

    @media screen and (max-width: 768px) {

        grid-template-areas: "col1 col2"; 
    } 


`

export const Column1 = styled.div`

    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 28px;
     

    }

`

export const Column2 = styled.div`

    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const ImgWrap = styled.div`

    max-width: 555px;
    height: 100%;

`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    @media screen and (max-width: 768px) {
    display: none;
    }
`