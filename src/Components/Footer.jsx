import styled from "@emotion/styled"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaRegRegistered } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6"

const Footer = () =>{
    return(

        <Container>  
        <FooterWrapper>
            <Detail>
                <Title>MarketViva.</Title>
                <Content>All content on this website is protected by copyright and may not be used without permission from MarketViva.</Content>
                <CircleIcon>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                </CircleIcon>
            </Detail>
            <Detail>
                <Title>Company</Title>
                <ContentHolder>
                <Content>About Us</Content>
                <Content>Our Services</Content>
                <Content>Our Projects</Content>
                <Content>Blogs & Updates</Content>
                </ContentHolder>
            </Detail>
            <Detail>
                <Title>Links</Title>
                <ContentHolder>
                <Content>FAQ</Content>
                <Content>Testimonials</Content>
                <Content>Recent Work</Content>
                <Content>Features</Content>
                </ContentHolder>
            </Detail>
            <Detail>
                <Title>Contact</Title>
                <Content>
                    <Icon><FaPhoneAlt /> +234 801 485 294 33</Icon>
                    <Icon><CiMail /> infoMarketviva@gmail.com</Icon>
                    <Icon><FaLocationDot />No 204 Muyiwa Surulere, Lagos</Icon>
                    </Content>
            </Detail>
        </FooterWrapper>

            <FooterBottom>
           <Circle> <FaArrowUp /></Circle>
            <Copy>Copyright <FaRegRegistered /> 2024. All Right Reserved </Copy>
            </FooterBottom>

        </Container>
    )
}

export default Footer;


const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: #3F3D86;
flex-direction: column;
align-items: center;
`
const FooterWrapper = styled.div`
width: 80%;
display: flex;
align-items: center;
gap: 25px;
padding: 30px 0px;
flex-wrap: wrap;
`
const Detail = styled.div`
width: 250px;
display: flex;
flex-direction: column;
gap: 10px;
color: white;
`
const Title = styled.b`
font-size: 20px;
`
const Content = styled.p`
font-size: 15px;
margin-top: 7px;
`
const CircleIcon = styled.div`
display: flex;
gap: 15px;
font-size: 25px;
`
const Icon = styled.div`
display: flex;
gap: 7px;
margin-bottom: 10px;
`
const ContentHolder = styled.div`
margin-top: 2px;
`
const FooterBottom = styled.div`
color: white;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px 0px;
`
const Circle = styled.div`
width: 30px;
height: 30px;
border-radius: 50px;
background-color: #F0A5DD;
display: flex;
justify-content: center;
align-items: center;
`
const Copy = styled.p`
font-size: 13px;
margin-top: 15px;
`