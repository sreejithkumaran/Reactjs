import { createContext } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  emailId: "",
  phoneNo: "",
};

const ContactContext = createContext(initialValues);

const ContactProvider = ({ children }) => {
  const value = {};

  return (
    <ContactContext.Provider value={value}>
        {children}
    </ContactContext.Provider>
  );
};
