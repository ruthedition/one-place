import { Button, Card, Icon, List, Segment, Popup } from "semantic-ui-react";
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
    id,
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
          {renderListItem(`Favorite Color: ${color}`, 'circle', `${color}`)}
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
        <Popup
          content='Edit family member'
          trigger={
            <Button icon='pencil'
              color='linkedin'
              size='massive'
              onClick={() => props.handleEdit(props.member)}
            />
          } />
        <Popup
          content='Remove family member'
          trigger={
            <Button
              icon='trash'
              color='youtube'
              size='massive'
              onClick={() => props.removeMember(id)}
            />
          } />
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



