import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Add, Remove } from '@material-ui/icons'
import {useSelector} from "react-redux"
import StripeCheckout from 'react-stripe-checkout'
import { mobile } from '../responsive'

const Container = styled.div`
background-color: #001747;
`;

const Wrapper = styled.div`
 padding: 20px;
 background-color: white;
 ${mobile({ padding: "10px"})};
`;

const Title = styled.h1`
font-weight: 200;
text-align: center;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "#001747" : "transparent"};
color: ${props => props.type === "filled" && "white"};

`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopTexts = styled.div `
${mobile({ display: "none" })};
`;

const TopText = styled.span `
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })};
`;


const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
${mobile({ marginRight: "0px" })};
`;

const Image = styled.img`
width: 200px;
background-size: cover;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span`
margin-bottom: 20px;
`;
const ProductId = styled.span`
margin-bottom: 20px;
`;

const ProductColor= styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin-bottom: 20px;
`;
const ProductSize = styled.span`
margin-bottom: 20px;
`;

const PriceDetail = styled.span`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Hr = styled.hr`
background-color: #f3e7e7;
border: none;
height: 1px;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.span`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })};
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;

`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: #001747;
color: white;
font-weight: 600;
`;


const Cart = () => {
  const cart = useSelector(state=>state.cart)

  return (
    <Container>
      <Navbar />
      <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>

            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping bags</TopText>
              <TopText>Your Wishlist</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cart.products.map(product=>(

                <Product key={cart}>
                <ProductDetail>
                  <Image src= {product.img} />
                  <Details>
                    <ProductName><b>Product:</b> {product.title}</ProductName>
                    <ProductId><b>ID:</b>{product._id}</ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                      </ProductSize>

                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>${product.price * product.quantity}</ProductPrice>
                </PriceDetail>
                <Hr/>
              </Product>
            
                ))}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemPrice>{cart.total}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>N2,500</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>-N2,500</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem type = 'total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>${cart.total}</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>

            </Summary>
          </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
