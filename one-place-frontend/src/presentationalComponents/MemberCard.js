import { Button, Card, Icon, List, Segment } from "semantic-ui-react";

const MemberCard = (props) => {

  const {
    firstName,
    lastName,
    birthday,
    diet,
    shoeSize,
    gifts,
    items,
    color,
    notes
  } = props.member

  const renderListItem = (content, icon, iconColor) => {
    return (
      <List.Item>
        <List.Icon name={icon} color={iconColor} />
        <List.Content>
          {content}
        </List.Content>
      </List.Item>
    )
  }
  const renderDescription = () => {
    return (
      <Card.Description>
        <List>
          {renderListItem(`Diet: ${diet}`, 'food', 'grey')}
          {renderListItem(`Shoe Size: ${shoeSize}`, 'shopping bag', 'blue')}
          {renderListItem(`Gift Ideas: ${gifts}`, 'gift', 'teal')}
          {renderListItem(`Favorite Items: ${items}`, 'heart', 'red')}
          {renderListItem(`Favorite Color: ${color}`, 'circle full', `${color}`)}
        </List>
      </Card.Description>
    )
  }

  const renderContent = () => {
    return (
      <Card.Content>
        <Card.Header>
          <Icon name='user circle' color='grey' />
          {firstName} {lastName}
        </Card.Header>
        <Card.Meta>
          <Icon name='birthday cake' color='purple' />
          {birthday}
        </Card.Meta>
        {renderDescription()}
      </Card.Content>
    )
  }

  const renderExtraContent = () => {
    return (
      <Card.Content extra>
        <Icon name='paperclip' color='yellow' />
        notes: {notes}
      </Card.Content>
    )
  }

  return (
    <Segment vertical style={{ margin: '1em 0em 0em', padding: '2em 5em 2em', border: 'none' }}>
      <Card raised>
        {renderContent()}
        {renderExtraContent()}
      </Card>
    </Segment>
  )
}

export default MemberCard