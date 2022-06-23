import React from "react";
import s from "./Message.module.css";

type MessagePropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

export function Message(props: MessagePropsType) {
  return (
    <div className={s.message}>
      <img src={props.avatar} alt="avatar" />

      <div className={s.cloud}>
        <div className={s.angle}></div>
        <div className={s.textWrapper}>
          <div>
            <p className={s.name}>{props.name}</p>
            <p className={s.messageText}>{props.message}</p>
          </div>
          <p className={s.time}>{props.time}</p>
        </div>
      </div>
    </div>
  );
}
