import React from 'react'
import { Button, Modal, ModalContent } from 'semantic-ui-react'

import EntryForm from './EntryForm'

const ModalEdit = ({isOpen, setIsOpen, description, value, isExpense, setDescription, setValue, setIsExpense}) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <ModalContent>
        <EntryForm 
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}/>
      </ModalContent>
      <Modal.Actions>
        <Button onClick={()=> setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary> Save</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
