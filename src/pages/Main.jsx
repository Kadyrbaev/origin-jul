import React, { useState } from 'react'
import { styled } from 'styled-components'
import FormaInput from './FormaInput'
import mom3 from "../assets/mom3.jpg"
import mom4 from "../assets/mom4.jpg"
import mom5 from "../assets/mom5.jpg"
import mom2 from "../assets/mom2.jpg"
import mom from "../assets/mom.jpg"
import Render from './Render'


let arr=[]

const Main = () => {
  const arr2 = JSON.parse(localStorage.getItem("mom"))
  arr = arr2!==null ? arr2 : []
  const [state, setState] = useState(arr)
  localStorage.setItem("mom", JSON.stringify(state))
  
  function getForm(data){
    console.log(data);
    setState((prev)=>[...prev,data])
  }

  return (
    <MainStyle>
      <Mark>
          <marquee>Mom happy birthday</marquee>
      </Mark>
      <ImgCont>
      <marquee>

          <img src={mom3} alt="" />
          <img src={mom5} alt="" />
          <img src={mom4} alt="" />
          <img src={mom2} alt="" />
          <img src={mom} alt="" />
      </marquee>
      </ImgCont>
      <h1 style={{color: "red"}}>Арыкбаева Бубайша</h1>
      <FormaInput ongetForm={getForm}/>
      {state.map((el)=>(
        <Render key={el.id} aty={el.value} text={el.text}/>
      ))}
    </MainStyle>
  )
}

export default Main

const MainStyle = styled.div`
  /* border: 2px solid blue; */
  /* width: 100vw;
  height: 100vh; */
  background-image: url("https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758_1280.jpg");
  background-size: cover;
  width: 800px;
  height: 200vh;
`
const Mark = styled.h1`
  color: aqua;
  box-shadow: 0px 0px 12px 1px;
`
const ImgCont = styled.div`
  img{
    width: 300px;
    margin-left: 40px;
    border-radius: 20px;
  }
  marquee{
    width: 800px;
  }
`