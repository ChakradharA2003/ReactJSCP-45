// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 100vh;
    width: 100%;
  }
`
export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    text-align: center;
  }
`
export const SideHeadings = styled.p`
  color: #ffffff79;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 600;
`
export const UnOrderList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`
export const ColorInputParaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
  margin-left: 100px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    margin-right: 35px;
    margin-left: 35px;
  }
`
export const ColorPara = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
`
export const ColorInput = styled.input`
  border-width: 0px;
  border-radius: 10px;
  height: 40px;
  width: 80px;
  background-color: transparent;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border-width: 0px;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: 500;
  margin-top: 50px;
`
