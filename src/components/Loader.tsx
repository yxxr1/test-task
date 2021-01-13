import React from 'react'
import styled from 'styled-components'
import LoaderSpinner from 'react-loader-spinner'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Loader = () => (
    <Container>
        <LoaderSpinner type="ThreeDots" color="#00BFFF" height={40} width={40} />
    </Container>
)