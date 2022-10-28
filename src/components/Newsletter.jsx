import React from 'react'
import { Send } from '@material-ui/icons'
import styled from 'styled-components'

// const Container = styled.div``;
const Title = styled.h1``;
const Desc = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.div``;


const Newsletter = () => {
  return (
    <div>
       <Title>Newsletter</Title>
       <Desc>Get timely updates from your favourite products.</Desc>
       <InputContainer>
       <Input/>
       <Button>
       <Send/>
       </Button>
       </InputContainer>
    </div>
  )
}

export default Newsletter
