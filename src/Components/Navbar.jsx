import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import {mobile} from "../Responsive"
const Container = styled.div`
height: 60px;
${mobile({ backgroundColor: "red" })}
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px; 
cursor: pointer;
`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: none;`

const Input  = styled.input`
border: none;
flex:9;
`


const Center = styled.div`
flex: 1;
text-align: center;`


const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end`

;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;`


const Logo = styled.h1`
font-weight: bold 
`


const Navbar = () => {
  return (
    <Container>
     <Wrapper>
     <Left>
       <Language>EN</Language>
       <SearchContainer>
       <Input />
         <Search style={{color:"gray", fontSize:18}} />
       </SearchContainer>
       </Left>
     <Center><Logo>Across</Logo></Center>
     <Right>
       <MenuItem>REGISTER</MenuItem>
       <MenuItem>SIGN IN</MenuItem>
       <MenuItem>
       <Badge badgeContent={4} color="primary">
  <ShoppingCartOutlined />
</Badge>
       </MenuItem>
     </Right>
     </Wrapper>
    </Container>
  )
}

export default Navbar
