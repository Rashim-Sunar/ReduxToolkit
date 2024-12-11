import React from "react";
import styled from "styled-components";
import {clearAllUsers} from "../store/actions/";
import { useDispatch } from "react-redux";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const handleDeleteAllUsers = () =>{
    dispatch(clearAllUsers());
  }

  return (
    <Wrapper>
      <button className="clear-btn" onClick={handleDeleteAllUsers}>Delete All Users</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }

  .clear-btn:hover {
    background-color: #b0296d;
  }
`;
