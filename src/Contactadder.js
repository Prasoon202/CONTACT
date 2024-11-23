import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const clickHandle = (e) => {
    const contactData = {
      id: Math.random(),
      name: name,
      mobile: mobile,
      location: location,
    };
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill all fields");
    } else {
      props.onContacts(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  return (
    <>
      <>
        <div className="adder">
          Contact Adder:
          <br />
          <form onSubmit={clickHandle}>
            <input
              type="text"
              placeholder="Contact Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="number"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
            <br />
            <button type="summit">Add Contacts</button>
          </form>
        </div>
      </>
    </>
  );
};

export default ContactAdder;
