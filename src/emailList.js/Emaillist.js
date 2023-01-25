import "../css/emaillist.css";
import EmailBody from "./EmailBody";
import EmailListSetting from "./EmailListSetting";
import Emailtype from "./Emailtype";
import { useEffect, useState } from "react";

import { db } from "../app/firebase";
const Emaillist = () => {
  const [emails, setEmails] = useState();

  useEffect(() => {
    let countmail = 1;
    db.collection("emails").onSnapshot((snapshot) => {
      //countmail = countmail + 1;
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
          countmail: countmail + 1
        }))
      );
    });
  }, []);
  console.log(emails);

  return (
    <div className="emaillist">
      <EmailListSetting />
      <Emailtype />
      {emails ? (
        emails.map(({ id, data, countmail }) => {
          return (
            <EmailBody
              key={id}
              name={data.to}
              subject={data.subject}
              message={data.message}
              time={new Date(
                data.timestamp?.seconds * 1000
              ).toLocaleTimeString()}
              countmail={countmail}
            />
          );
        })
      ) : (
        <h2>'loading'</h2>
      )}
    </div>
  );
};

export default Emaillist;

//    <EmailBody
// name="Mohit Rajpoot"
// subject="This is subject"
// message="I am learning React I am learning React I am learning React I am learning React I am learning React I am learning React I am learning React"
// time="03:30pm"
// />
