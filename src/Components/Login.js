import styled from "styled-components";

const Login = (props) => {
    return(
   <Container>
       <Content>
           <CTA>
               <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
               <SignUp>GET ALL THERE</SignUp>
               <Description>
                   Get Premier Access to Falcon and Winter Soldier 
                   with an addition fee with a Disney+ Subscription. 
                   As of 25/04/21, the price of Disney+ Bundle will increase by Rss 500.
               </Description>
               <CTALogoTwo src="/images/cta-logo-two.png"/>
           </CTA>
           <BgImage />
       </Content>
   </Container>
    );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: columns;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
position: absolute;
top: 0;
left: 0;
right: 0;
z-index: -1;
`;

const CTA = styled.div`
max-width: 650px;
display: flex;
width: 100%;
flex-direction: column;
transition-timing-function: ease-out;
transition: opacity 0.2s;
`;

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 12px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
width: 100%;
margin-bottom: 20px;
max-width: 600px;
display: inline-block;
vertical-align: bottom;
`;

export default Login;