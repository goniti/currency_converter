import React from 'react'
import styled from 'styled-components'
//import PropTypes from "prop-types";
import { gutter } from '../../styles/variables'
import {  lightTheme } from '../../styles/theme'

const HeaderContainer = styled.header`
  background-color: ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.secondaryColor};
  padding: calc(${gutter} * 3) 0;
`
const Header = () => <HeaderContainer theme={lightTheme}/>

// Header.propTypes = {
// }

export default Header
