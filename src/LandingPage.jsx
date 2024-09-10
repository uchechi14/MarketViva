import styled from '@emotion/styled'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Card from './Components/Card'
import Details from './Components/Details'
import Footer from './Components/Footer'

const LandingPage = () => {
    return(
        <Container>
            <Header />
            < Hero/>
            <CardHolder>
            < Card 
                TitleName= 'Social Media Marketing'
                Content= 'Connect with your customers on social media and build a strong online presence.'
                iconA = 'ff' iconB= '' iconC= '' iconD= '' iconE= '' iconF= ''
            />
            < Card 
                TitleName= 'Search Engine Optimization (SEO)'
                Content= 'Improve your website search engine ranking and drive more organic traffic in your site.'
                 iconA = '' iconB= 'rr' iconC= '' iconD= '' iconE= '' iconF= ''
            />
            < Card 
                TitleName= 'Content Marketing'
                Content= 'Create valuable digital content that attracts and engages your target audience;'
                 iconA = '' iconB= '' iconC= 'rr' iconD= '' iconE= '' iconF= ''
            />
            < Card 
                TitleName= 'Email Marketing'
                Content= 'Reach your customers directly with targeted email campaigns and regular newsletter'
                 iconA = '' iconB= '' iconC= '' iconD= 'rr' iconE= '' iconF= ''
            />
            < Card 
                TitleName= 'Web Design & Optimization'
                Content= 'Create a professional and user friendly website that helps you stand out from the competition.'
                 iconA = '' iconB= '' iconC= '' iconD= '' iconE= 'dd' iconF= ''
            />
            < Card 
                TitleName= 'Web Analytics & Reporting'
                Content= 'Help you set up and manage website analytics and provide regular reporting analysis for improvement'
                iconA = '' iconB= '' iconC= '' iconD= '' iconE= '' iconF= 'dd'
            />
            </CardHolder>
            < Details />
            <Footer />
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
width: 100% ;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #FDFBFC;
font-family: calibri;
`
const CardHolder = styled.div`
width: 80%;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 25px;
margin-top: 30px;
`