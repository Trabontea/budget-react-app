import React from 'react'
import { Button, Modal, ModalContent } from 'semantic-ui-react'
import EntryForm from './EntryForm'
import { useDispatch } from 'react-redux'
import { closeEditModal } from '../actions/modals.action'

const ModalEdit = ({isOpen, description, value, isExpense, setDescription, setValue, setIsExpense}) => {
  const dispatch = useDispatch();

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
        <Button onClick={()=> dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => dispatch(closeEditModal())} primary> Save</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
