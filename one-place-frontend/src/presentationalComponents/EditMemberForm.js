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

  return (
    <div>
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => toggleModal(false)}
      >
        <Modal.Content>
          <FormContainer
            member={member}
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