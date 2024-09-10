import styled from "@emotion/styled";
import { BsMegaphone } from "react-icons/bs";
import { FaSearchengin } from "react-icons/fa6";
import { MdContentPasteGo } from "react-icons/md";
import { TbMailForward } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";

const Card = ({iconA, iconB, iconC, iconD, iconE, iconF, TitleName, Content}) =>{
    return(

            <Cards>
                <CardWrapper>
                    <IconHolder>
                   {iconA&& <BsMegaphone />}
                   {iconB&& <FaSearchengin />}
                   {iconC&& <MdContentPasteGo />}
                   {iconD&& <TbMailForward />}
                   {iconE&& <TbWorld />}
                   {iconF&& <MdOutlineAnalytics />}
                    </IconHolder>
                    <TextHolder>
                    <Title>{TitleName}</Title>
                    <Details>{Content}</Details>
                    </TextHolder>
                    <Button>Read More</Button>
                </CardWrapper>
            </Cards>

    )
}

export default Card;


const Cards = styled.div`
width: 335px;
height: 300px;
background-color: #FCEFF8;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px
`
const CardWrapper = styled.div`
width: 85%;
height: 80%;
color: #3F3D86;
display: flex;
justify-content:space-between;
flex-direction: column;
`
const IconHolder = styled.div`
width: 35px;
height: 35px;
background-color: #F0A5DD;
border-radius: 50px;
border: none;
font-size: 25px;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
const TextHolder = styled.div``
const Title = styled.b`
font-size: 32px;
`
const Details = styled.p`
font-size: 15px;
margin-top: 5px;
`
const Button = styled.button`
width: 150px;
height: 45px;
border-radius: 6px;
border: none;
color: white;
font-size: 14px;
font-weight: bold;
background-color: #3F3D86;
cursor: pointer;
`