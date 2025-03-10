import React from "react";

const ContactList = ({ contacts, deleteContact }) => {
  const contactsJsx = contacts.map((c) => (
    <tr className="contactRow" key={c.id}>
      <td>{c.id}</td>
      <td>
        <img
          style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          src={c.avatar ? c.avatar : "/default-profile.png"}
          alt={c.name}
          title={c.name}
          className="img-thumbnail"
        />{" "}
        {c.name}
      </td>
      <td>{c.email}</td>
      <td>{c.city}</td>
      <td>
        <button
          onClick={() => deleteContact(c.id)}
          className="btnDeleteContact btn btn-link text-danger bi bi-person-x-fill"
        ></button>
      </td>
    </tr>
  ));

  return (
    <div className="mt-3">
      <h3>Contact List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{contactsJsx}</tbody>
      </table>
    </div>
  );
};

export default ContactList;
