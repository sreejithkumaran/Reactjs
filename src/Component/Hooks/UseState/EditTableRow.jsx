import React from "react";

const EditTableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
  <React.Fragment>
        <tr>
        <td>
          <input
            type="text"
            name="name"
            required="required"
            placeholder="Enter a name .."
            value={editFormData.name}
            onChange={handleEditFormChange}
          />
        </td>
      {/* </tr>
      <tr> */}
        <td>
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Enter an address .."
            value={editFormData.address}
            onChange={handleEditFormChange}
          />
        </td>
      {/* </tr>
      <tr> */}
        <td>
          <input
            type="text"
            name="phoneNo"
            required="required"
            placeholder="Enter a phone no .."
            value={editFormData.phoneNo}
            onChange={handleEditFormChange}
          />
        </td>
      {/* </tr>
      <tr> */}
        <td>
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter an email id .."
            value={editFormData.email}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <button type="submit">Save</button>
          <button type="submit" onClick={handleCancelClick}>Cancel</button>
        </td>
      </tr>
      
      </React.Fragment>
  );
};

export default EditTableRow;
