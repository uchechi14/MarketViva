import styled from "@emotion/styled"
import { IoMdMenu } from "react-icons/io";

const Header = () =>{
    return(
          <HeaderWrapper>
                <Logo>MarketViva.</Logo>
                <NavHolder>
                    <Nav>Home</Nav>
                    <Nav>About</Nav>
                    <Nav>Services</Nav>
                    <Nav>Contact</Nav>
                    <Nav>Project</Nav>
                    </NavHolder>
                    <HeaderButton>
                        <Button>Register </Button>
                        <BurgerMenu>
                        <IoMdMenu />
                        </BurgerMenu>
                        </HeaderButton>
          </HeaderWrapper>      
    )
}

export default Header;


const HeaderWrapper = styled.div`
width: 80%;
height: 80px;
background-color: #FDFBFC;
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.div`
font-size: 25px;
color: #3F3D86;
font-weight: bold;
`
const NavHolder = styled.div`
display: flex;
gap: 17px;
color: #3F3D86;

@media (max-width: 768px){
    display: none;
}
`
const Nav = styled.b`
font-size: 17px;
cursor: pointer;
`
const HeaderButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
align-items: center;
gap: 20px;
`
const BurgerMenu = styled.div`
font-size: 35px;
display: none;
color: #3F3D86;
margin-top: 5px;

@media (max-width: 768px){
    display: block;
}
`
const Button = styled.button`
padding: 10px 20px;
border-radius: 9px;
border: 1.5px solid #3F3D86;
color: #3F3D86;
font-size: 15px;
font-weight: bold;
background-color:#FDFBFC;
cursor: pointer;

@media (max-width: 480px){
    display: none;
}
`