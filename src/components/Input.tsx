import React, {forwardRef} from 'react'
import styled from "styled-components";


export interface Props {
    onChange: (value: string) => any,
    value: string,
    [key: string]: any
}

const InputC = styled.input`
      height: 30px;
      border: solid 1px #eee;
      border-radius: 3px;
      font-size: 18px;
      color: #555;
      outline: none;
      padding: 4px 10px;
      margin: 5px 0;
    `
export default forwardRef(({value, onChange, ...props}: Props, ref: any) => {
    return (<InputC
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
        ref={ref}
    />)
})