// Write your code here
import {
  SelectedListItem,
  Button,
  SelectedButton,
  ListItem,
} from './styledComponents'

const GradientDirectionItem = props => {
  const {selectedDirection, value, displayText, onToggleDirection} = props
  const onClickedDirection = () => {
    onToggleDirection(value)
  }
  const renderListItem = selectedDirection ? (
    <SelectedListItem>
      <SelectedButton onClick={onClickedDirection}>
        {displayText}
      </SelectedButton>
    </SelectedListItem>
  ) : (
    <ListItem>
      <Button onClick={onClickedDirection}>{displayText}</Button>
    </ListItem>
  )
  return renderListItem
}
export default GradientDirectionItem
