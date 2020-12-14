import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import FormContainer from '../containerComponents/FormContainer'

export const EditMemberForm = (props) => {

  const {
    member,
    open,
    dimmer,
    editMember,
    toggleModal,
    handleChange
  } = props

  const getFormattedMember = () => {
    if (member) {
      const date = new Date(member.birthday)
      return { ...member, birthday: date.toISOString().substr(0, 10) }
    }
  }
  return (
    <div>
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => toggleModal(false)}
      >
        <Modal.Content>
          <FormContainer
            member={getFormattedMember()}
            handleSubmit={editMember}
            handleChange={handleChange}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            onClick={() => toggleModal(false)}
          >
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}