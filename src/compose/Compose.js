import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import "../css/compose.css";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import firebase from "firebase/compat/app";

import { db } from "../app/firebase";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(to, subject, message);
    if (to === "") {
      return alert("Email is required");
    }
    if (subject === "") {
      return alert("Subject is required");
    }
    if (message === "") {
      return alert("Message is required");
    }
    db.collection("emails").add({
      to,
      subject,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setTo("");
    setSubject("");
    setMessage("");

    alert("sucess");
  };
  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__headerLeft">
          <span>New Message</span>
        </div>
        <div className="compose__headerRight">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <div className="compose__body">
          <div className="compose__bodyform">
            <input
              type="email"
              placeholder="Recipents"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows="20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="compose__footer">
          <div className="compose__footerLeft">
            <button type="submit">
              Send <ArrowDropDownIcon />
            </button>
          </div>
          <div className="compose__footerRight">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <LinkIcon />
            <PhotoIcon />
            <PhonelinkLockIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Compose;
