import "./App.css";
import React, { useState } from "react";
import Contact from "./Contact";
import ContactAdder from "./Contactadder";

function App() {
  const getContacts = JSON.parse(localStorage.getItem("Contacts"));
  const [Contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContacts = (contactsData) => {
    const allContact = [contactsData, ...Contacts];
    setContacts(allContact);
    localStorage.setItem("Contacts", JSON.stringify(allContact));
  };
  const clickHandle = () => {
    localStorage.clear();
    setContacts([]);
  };
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <div className="navbar">CONTACT MANAGER</div>
      <div className="contactadder">
        <ContactAdder onContacts={addContacts} />
        <button onClick={clickHandle}>Clear</button>
      </div>
      <div className="content">
        <h3>Contact list:</h3>
        <div className="contacts">
          {Contacts.map((data) => (
            <Contact key={data.id} data={data}></Contact>
          ))}
        </div>
      </div>
      <div class="footer">
        prasoonkandel1029@gmail.com ©2024,All Rights Reserved.
      </div>
    </>
  );
}

export default App;
