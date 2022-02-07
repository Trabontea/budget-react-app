import React from 'react'
import { Button, Modal, ModalContent } from 'semantic-ui-react'
import EntryForm from './EntryForm'
import { useDispatch } from 'react-redux'
import { closeEditModal } from '../actions/modals.action'
import  useEntryDetails  from '../hooks/useEntryDetails'

const ModalEdit = ({isOpen, description, value, isExpense, id}) => {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense)

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <ModalContent>
        <EntryForm 
          description={entryUpdate.description}
          value={entryUpdate.value}
          isExpense={entryUpdate.isExpense}
          setDescription={entryUpdate.setDescription}
          setValue={entryUpdate.setValue}
          setIsExpense={entryUpdate.setIsExpense}
        />
      </ModalContent>
      <Modal.Actions>
        <Button onClick={()=> dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary> Save</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
