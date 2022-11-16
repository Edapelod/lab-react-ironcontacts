import React, { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";
function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(0, 20));
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  // check if there is a contact list
  if (contactsList) {
    console.log(contactsList);
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      {/* <button onClick={toggleShowMovies}>{showMovies ? "Hide" : "Show"}</button> */}
      <table>
        <thead>
          <tr>
            <th>
              <h2>Picture</h2>
            </th>
            <th>
              <h2>Name</h2>
            </th>
            <th>
              <h2>Popularity</h2>
            </th>
            <th>
              <h2>Won an Oscar</h2>
            </th>
            <th>
              <h2>Won an Emmy</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((celebrity) => {
            return (
              <div key={celebrity.id}>
                <tr>
                  <td>
                    <img
                      style={{ height: "200px" }}
                      src={celebrity.pictureUrl}
                      alt="celebrity"
                    />
                  </td>
                  <td>
                    <h4>{celebrity.name}</h4>
                  </td>
                  <td>
                    <h4>{celebrity.popularity}</h4>
                  </td>
                  <td>
                    <h4>{celebrity.wonOscar ? "🏆" : ""}</h4>
                  </td>
                  <td>
                    <h4>{celebrity.wonEmmy ? "🏆" : ""}</h4>
                  </td>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
