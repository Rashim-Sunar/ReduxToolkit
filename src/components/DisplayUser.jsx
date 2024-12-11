import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

// useSelector helps to get the access to the state of global store. 
//Here, the state means the complete data of userSlice, which was intially an empty array.



  const deleteUser = (user) => {
    dispatch(removeUser(user));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User List</h2>
      {data.length > 0 ? (
        <ul style={styles.userList}>
          {data.map((user, index) => (
            <li key={index} style={styles.userItem}>
              <span style={styles.userName}>{user}</span>
              <button
                onClick={() => deleteUser(user)}
                style={styles.deleteBtn} 
                aria-label={`Delete ${user}`}
              >
                <MdDeleteForever style={styles.deleteIcon} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={styles.noUsers}>No users available. Please add some users.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  userList: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  userItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 15px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    borderRadius: "4px",
    marginBottom: "10px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  userName: {
    fontSize: "16px",
    color: "#333",
  },
  deleteBtn: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  deleteIcon: {
    fontSize: "20px",
    color: "red",
    transition: "transform 0.2s ease",
  },
  deleteIconHover: {
    transform: "scale(1.2)",
  },
  noUsers: {
    textAlign: "center",
    fontSize: "16px",
    color: "#888",
  },
};

export default DisplayUser;



