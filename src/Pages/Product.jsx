import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from "../Components/Navbar"
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'



const Container = styled.div`
background-color: #001747;
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
background-color: white;
`;

const ImgContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;
const Title = styled.h1`
font-weight: 300;
`;
const Description = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
border-radius: 15px;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=> props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover {
    background-color: #909e9e85;
}
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async()=> {
            try{
                const res = await axios.get("http://localhost:5000/api/products/find/"+ id);
                setProduct(res.data);
            }catch{} 
              
        };
        getProduct()
    }, [id]);

    const handleQuantity = (type) => {
      // update product quantity
      if (type === "inc") {
        setQuantity(quantity + 1)
      }
      else {
        quantity >1 && setQuantity(quantity - 1)
      }
    }

    const handleClick = () => {
      // update cart quantity. i.e no of objects in cart
        dispatch(addProduct({ ...product, quantity, color, size }));
    };
    return (
        <Container>
          <Navbar />
          <Wrapper>
            <ImgContainer>
              <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{product.title}</Title>
              <Description>{product.desc}</Description>
              <Price>&#8358;{product.price}</Price>
              <FilterContainer>
              <Filter>
                    <FilterTitle style={{backgroundColor:color}}>Color</FilterTitle>
                    {product.color ? product.color.map((c)=> (
                      <FilterColor color={c} key={c} onClick={()=> setColor(c)}/>

                    )) : "Loading..."}
                    
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize onChange={(e)=> setSize(e.target.value)}>
                      {product.size ? product.size.map((s) => (
                        <FilterSizeOption key={s} >{s}</FilterSizeOption>
                      )) : "Loading..."}
                        
                        
                    </FilterSize>
                </Filter>
            </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <Remove onClick={() => handleQuantity("dec")} />
                  <Amount>{quantity}</Amount>
                  <Add onClick={() => handleQuantity("inc")} />
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer />
        </Container>
      );
    };

    export default Product;