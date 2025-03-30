import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid4 } from "uuid";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // Load contacts
  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts && retrieveContacts.length > 0) {
      setContacts(retrieveContacts);
    }
  }, []);

  // Save contacts to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // Add new contact
  const addContactHandler = (contact) => {
    const newContact = { id: uuid4(), ...contact };
    setContacts([...contacts, newContact]);
  };

  // Remove contact
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  return (
    <div className="ui container">
      <Router basename="/contacts_management_system">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/contact/:id"
            element={<ContactDetail contacts={contacts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { v4 as uuid4 } from "uuid";
// import "./App.css";
// import Header from "./components/Header";
// import AddContact from "./components/AddContact";
// import ContactList from "./components/ContactList";
// import ContactDetail from "./components/ContactDetail";

// function App() {
//   const LOCAL_STORAGE_KEY = "contacts";
//   const [contacts, setContacts] = useState([]);

//   // Add new contact
//   const addContactHandler = (contact) => {
//     console.log(contact);
//     setContacts([...contacts, { id: uuid4(), ...contact }]);
//   };

//   // Remove contact
//   const removeContactHandler = (id) => {
//     const newContactList = contacts.filter((contact) => {
//       return contact.id !== id;
//     });
//     setContacts(newContactList);
//   };

//   // Load contacts on component mount
//   useEffect(() => {
//     const retrieveContacts = JSON.parse(
//       localStorage.getItem(LOCAL_STORAGE_KEY)
//     );
//     if (retrieveContacts) setContacts(retrieveContacts);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div className="ui container">
//       <Router>
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <ContactList
//                 contacts={contacts}
//                 getContactId={removeContactHandler}
//               />
//             }
//           />
//           <Route
//             path="/add"
//             element={<AddContact addContactHandler={addContactHandler} />}
//           />
//           <Route path="/contact/:id" element={<ContactDetail />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
