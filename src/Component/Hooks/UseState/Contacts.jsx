
import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid'
import ReadOnlyRow from './ReadOnlyRow';
import EditTableRow from './EditTableRow'

function Contacts() {

  const contactList = [
    {
      name: "sreejith kumaran",
      address: "RMZ EcoWorld Belendur Bangalore KA",
      phoneNo: "9098909899",
      email: "sreejith.kumaran@e.com",
    },
  ];

  const [contacts, setContacts] = useState(contactList);

  const [addFormData, setAddFormData] = useState({
    name : '',
    address : '',
    phoneNo : '',
    email : ''
  })

  const [editFormData, setEditFormData] = useState({
    name : '',
    address : '',
    phoneNo : '',
    email : ''
  })
  const [editContactId, setEditContactId] = useState(null)

  const handleAddFormChange = (event) => {

    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData ={ ...addFormData}
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)

  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = {...editFormData}
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)

  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      address: addFormData.address,
      phoneNo: addFormData.phoneNo,
      email: addFormData.email
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()
    
    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      address: editFormData.address,
      phoneNo: editFormData.phoneNo,
      email: editFormData.email
    }

    const newContact = [...contacts]
    const index = contacts.findIndex((contact) => contact.id === editContactId)

    newContact[index] = editedContact

    setContacts(newContact)
    setEditContactId(null)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id)

    const formValues = {
      name : contact.name,
      address : contact.address,
      phoneNo : contact.phoneNo,
      email : contact.email
    }

    setEditFormData (formValues)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === contactId)
    newContacts.splice(index,1)

    setContacts(newContacts)

  }

  return (
    <div>
      <h4>Contact Details </h4>
      <form onSubmit={handleEditFormSubmit}>
      <table align="center" border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <React.Fragment>
              {editContactId === contact.id ? (
              <EditTableRow 
                editFormData={editFormData}  
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}
              />
              ) 
              : 
              ( 
              <ReadOnlyRow 
                contact={contact} 
                handleEditClick={handleEditClick} 
                handleDeleteClick = {handleDeleteClick}
              />)}
            </React.Fragment>
            
          ))}
        </tbody>
      </table>
      </form>
      <h4>Add a Contact</h4>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name .."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address .."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNo"
          required="required"
          placeholder="Enter a phone no .."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter an email id .."
          onChange={handleAddFormChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Contacts;
