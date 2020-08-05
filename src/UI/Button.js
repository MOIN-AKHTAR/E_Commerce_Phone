import Styled from 'styled-components';

export const Button=Styled.button`
text-transform:capitalize;
border:none;
padding:0.2rem 0.5rem;
font-size:1.4rem;
border:1px solid var(--lightBlue);
background:transparent;
color:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
border-color:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
border-radius:0.5rem;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
cursor:pointer;
&:hover{
    background:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
    color:var(--mainBlue);
}
&:focus{
   outline:none;
}
`