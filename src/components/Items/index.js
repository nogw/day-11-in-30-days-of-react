import React from 'react';
import { Container, Item } from './styles';

const Input = ({ type, style, placeholder, nameClass = 'default' }) => {
  return (
    <input 
      type={type} 
      style={style} 
      placeholder={placeholder} 
      className={nameClass}  
    />
  )
}

const InputWithStyles = (ComponentInput) => {
  return (props) => {
    return <ComponentInput {...props}/>
  }
}

const FirstInput = InputWithStyles(Input)
const PasswordInput = InputWithStyles(Input)
const RangeInput = InputWithStyles(Input)
const MonthInput = InputWithStyles(Input)
const ColorInput = InputWithStyles(Input)

function Items() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2, delay: `${0.3}` }}
    >
      <Item
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: `${0.3}` }}
      >
        <FirstInput type="text" placeholder="text me"/>
      </Item>
      <Item
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: `${0.6}` }}
      >
        <PasswordInput type="password" placeholder="write password in me"/>
      </Item>
      <Item
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: `${0.9}` }}
      >
        <RangeInput type="range" nameClass='range'/>
      </Item>
      <Item
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: `${1.2}` }}
      >
        <MonthInput type="date" nameClass='date'/>
      </Item>
      <Item
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: `${1.5}` }}
      >
        <ColorInput type="color" nameClass="color"/>
      </Item>
    </Container>
  );
}

export default Items;