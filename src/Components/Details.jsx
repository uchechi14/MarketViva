import styled from "@emotion/styled";
import DetailDesign from "./DetailDesign";
import image from '../assets/thoughts.svg'

const Details = () =>{
    return(
        <Wrapper>
            <LeftDetail>
                <Title>
                    <SmallText>How it works</SmallText>
                    <LargeText>Our Process Workflow</LargeText>
                </Title>
                <Text>
                    <DetailDesign 
                        Number= '01'
                        TextTitle='Consultation'
                        TextDetail= 'Schedule a consultation to discuss your business goals and digital marketing needs with our team'
                        height= '50px;'
                    />
                    <DetailDesign 
                        Number= '02'
                        TextTitle= 'Strategy Development'
                        TextDetail= 'Our team will develop a customized digital marketing strategy tailored to your business'
                        height= '50px;'
                    />
                     <DetailDesign 
                        Number= '03'
                        TextTitle= 'Implemetation'
                        TextDetail= 'We will put the strategy into action and launch your digital marketing campaigns'
                    />
                </Text>
            </LeftDetail>
            <RightDetail>
                <ImgHolder>
                 <img src={image} />
                </ImgHolder>
                    <Text>
                    <DetailDesign 
                           Number= '04'
                            TextTitle= 'Strategy Development'
                            TextDetail= 'Our team will develop a customized digital marketing strategy tailored to your business'
                             height= '50px;'
                    />
                     <DetailDesign 
                           Number= '05'
                            TextTitle= 'Implemetation'
                            TextDetail= 'We will put the strategy into action and launch your digital marketing campaigns'
                    />
                    </Text>
            </RightDetail>
        </Wrapper>
    )
}

export default Details;

const Wrapper = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 50px 0px;

@media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
}
`
const LeftDetail = styled.div`
width: 100%;
flex: 1;
`
const Title = styled.div`
@media (max-width: 800px) {
    width: 100%;    
}
`
const SmallText = styled.p`
color: #F0A5DD;
font-size: 17px;
`
const LargeText = styled.h1`
width: 250px;
font-size: 50px;
color: #3F3D86;

@media (max-width: 800px) {
    width: 100%;  
}
`
const Text = styled.div`
margin-top: 20px;
`

const RightDetail = styled.div`
width: 100%;
flex: 1;
display: flex;
flex-direction: column;

@media (max-width: 800px) {
    flex-direction: column-reverse;
    margin-top: -15px;
}
`
const ImgHolder = styled.div`
width: 380px;
height: 235px;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media (max-width: 800px) {
    width: 400px;
    height: 300px;
    margin-top: 30px;
}
@media (max-width: 480px) {
    width: 320px;
    height: 230px;
}
`
