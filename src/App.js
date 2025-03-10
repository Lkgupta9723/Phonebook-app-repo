import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Vinod Kumar Kayartaya",
      email: "vinod@vinod.co",
      phone: "9731424344",
      city: "Bangalore",
      avatar: "https://avatar.iran.liara.run/public/1",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      city: "New York",
      avatar: "https://avatar.iran.liara.run/public/2",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "098-765-4321",
      city: "Los Angeles",
      avatar: "https://avatar.iran.liara.run/public/3",
    },
  ]);

  const addContact = (newContact) => {
    const newId = 1 + Math.max(...contacts.map((c) => c.id));
    newContact.id = newId;
    newContact.avatar = `https://avatar.iran.liara.run/public/${newId}`;
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <Header />
      <div
        className="container"
        style={{
          minHeight: "500px",
        }}
      >
        <div className="row">
          <div className="col-md-5">
            <ContactForm addContact={addContact} />
          </div>
          <div className="col-md-7">
            <ContactList contacts={contacts} deleteContact={deleteContact} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
