import React, { Component } from 'react'
import {TitleStyle} from './style'
type TitleProps = {
  children: React.ReactNode;
}

export const Title = ({children}:TitleProps) => {
  return (
    <TitleStyle>
      {children}
    </TitleStyle>
  )
}
