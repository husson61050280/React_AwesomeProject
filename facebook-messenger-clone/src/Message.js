//rfce == form react
import React , { forwardRef } from "react";

import { Card, CardContent, Typography } from "@material-ui/core";
//import card
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  //เช็คว่า user ที่ลงชื่อเข้ามา ตรงกับข้อความที่ตัวเองพิมไหม ถ้าตรงให้เปลี่ยนเป็นสีฟ้า
  const isUser = username === message.username;

  return (

      <div ref={ref} className={`message ${isUser && "message__user"}`}>
        {/* เช็คว่าข้อความที่เป็นเป็นของ user หรือ guest */}
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
          <CardContent>
            <Typography color="white" variant="h5" component="h2">
              {!isUser && `${message.username || 'Unknown user'}:`} {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>

  );
})

export default Message;
