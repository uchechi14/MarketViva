import styled from "@emotion/styled"

const DetailDesign = ({Number, TextTitle, TextDetail, height}) =>{
    return(
        <TextWrapper>
        <NumWrapper>
        <Num>{Number}</Num>  
        <Line height = {height}></Line>
        </NumWrapper>                       
        <SecondTitle> 
            <BoldText>{TextTitle}</BoldText>
            <ParaText>{TextDetail}</ParaText>
        </SecondTitle>
    </TextWrapper>
    )
}
export default DetailDesign

const TextWrapper = styled.div`
display: flex;
gap: 20px;

@media (max-width: 800px) {
    margin-top: 15px;
}
`
const NumWrapper= styled.div`
display:flex;
flex-direction: column;
align-items: center;
`
const Num = styled.div`
width: 30px;
height: 30px;
border-radius: 50px;
border: 1px solid #F0A5DD;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 15px;
color: #F0A5DD;
`
const Line= styled.div`
 border-left: 2px dashed #3F3D56;
 height: ${({height}) =>height};

 @media (max-width: 800px) {
    height: 0px;
}
`
const SecondTitle = styled.div`
color: #3F3D86;
`
const BoldText = styled.b`
font-size: 17px;
`
const ParaText = styled.p`

`