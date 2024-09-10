import styled from "@emotion/styled";
import image from '../assets/hero.svg'


const Hero = () =>{
    return(
        <Container>
            <HeroWrapper>
                <LeftHero>
                    <SmallText>Home and Services</SmallText>
                    <BoldText>Our Services</BoldText>
                </LeftHero>
                <RightHero>
                    <ImageHolder>
                    <img src= {image} />
                    </ImageHolder>
                    </RightHero>
            </HeroWrapper>
        </Container>
    )
}

export default Hero;

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: #E9EDF0;
`
const HeroWrapper = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
}

@media (max-width: 480px) {
    gap: 10px;
}
`
const LeftHero = styled.div`
flex: 1;

@media (max-width: 768px) {
    text-align: center;
    padding-top: 20px;
}
`
const SmallText = styled.p`
color: #F0A5DD;
font-size: 17px;
`
const BoldText = styled.h1`
font-size: 50px;
color: #3F3D86;

@media (max-width: 768px) {
    font-size: 45px;
}
@media (max-width: 480px) {
    font-size: 35px;
}
`
const RightHero = styled.div`
flex: 1;
`
const ImageHolder = styled.div`
width: 480px;
height: 400px;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    width: 450px;
    height: 350px;
}

@media (max-width: 480px) {
    width: 330px;
    height: 350px;
}
`