import { Button, Card, Icon, List, Segment } from "semantic-ui-react";
import styled from 'styled-components'


const HoverCard = styled(Card)`
  &:hover .hiddenButton{
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.4);
  }
`

const MemberCard = (props) => {

  const {
    first_name,
    last_name,
    birthday,
    diet,
    shoe_size,
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
          {renderListItem(`Shoe Size: ${shoe_size}`, 'shopping bag', 'blue')}
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
          {first_name} {last_name}
        </Card.Header>

        <Card.Meta>
          <Icon name='birthday cake' color='purple' />
          {console.log(birthday)}
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

  const renderButtons = () => {
    return (
      <div className='hiddenButton' hidden >
        <Button icon color='linkedin' size='massive'>
          <Icon name='pencil' />
        </Button>
        <Button icon color='youtube' size='massive'>
          <Icon name='trash' />
        </Button>
      </div>
    )
  }

  return (
    <Segment vertical style={{ margin: '1em 0em 0em', padding: '2em 5em 2em', border: 'none' }} >
      <HoverCard raised >
        {renderContent()}
        {renderExtraContent()}
        {renderButtons()}
      </HoverCard>
    </Segment>
  )
}

export default MemberCard



