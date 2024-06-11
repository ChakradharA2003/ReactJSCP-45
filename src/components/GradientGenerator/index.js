import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem/index'
import {
  BgContainer,
  MainHeading,
  SideHeadings,
  UnOrderList,
  ColorInputParaContainer,
  ColorInputContainer,
  ColorPara,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    finalColor1: '#8ae323',
    finalColor2: '#014f7b',
    finalDirection: gradientDirectionsList[0].value,
  }

  onToggleDirection = value => {
    this.setState({
      direction: value,
    })
  }

  onChangeColor1 = event => {
    console.log(event.target)
    this.setState({
      color1: event.target.value,
    })
  }

  onChangeColor2 = event => {
    console.log(event.target)
    this.setState({
      color2: event.target.value,
    })
  }

  onSubmitColorForm = event => {
    event.preventDefault()
    const {color1, color2, direction} = this.state
    this.setState({
      finalColor1: color1,
      finalColor2: color2,
      finalDirection: direction,
    })
  }

  render() {
    const {
      direction,
      color1,
      color2,
      finalColor1,
      finalColor2,
      finalDirection,
    } = this.state
    return (
      <BgContainer
        data-testid="gradientGenerator"
        direction={finalDirection}
        color1={finalColor1}
        color2={finalColor2}
        as="form"
        type="submit"
        onSubmit={this.onSubmitColorForm}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <SideHeadings>Choose Direction</SideHeadings>
        <UnOrderList>
          {gradientDirectionsList.map(dir => (
            <GradientDirectionItem
              key={dir.directionId}
              selectedDirection={direction === dir.value}
              value={dir.value}
              displayText={dir.displayText}
              onToggleDirection={this.onToggleDirection}
            />
          ))}
        </UnOrderList>
        <SideHeadings>Pick the Colors</SideHeadings>
        <ColorInputParaContainer>
          <ColorInputContainer>
            <ColorPara>{color1}</ColorPara>
            <ColorInput
              type="color"
              value={color1}
              onChange={this.onChangeColor1}
            />
          </ColorInputContainer>
          <ColorInputContainer>
            <ColorPara>{color2}</ColorPara>
            <ColorInput
              type="color"
              value={color2}
              onChange={this.onChangeColor2}
            />
          </ColorInputContainer>
        </ColorInputParaContainer>
        <GenerateButton type="submit" onClick={this.onSubmitColorForm}>
          Generate
        </GenerateButton>
      </BgContainer>
    )
  }
}
export default GradientGenerator
