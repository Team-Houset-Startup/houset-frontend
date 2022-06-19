import React from "react";
import "./assets/style/profile-notification.css";

const NotificationBuilderComponent = ({ data }) => {
  return (
    <>
      <div className="notification-header">
        <h2>{data.name}</h2>
        <h4>{data.date} WIB</h4>
      </div>
      <div className="notification-body">
        <p className="notification-message">
            {data.message}
        </p>
      </div>
    </>
  );
};

export default function ProfileNotification() {
  const setAllNotificationToRead = () => {
    console.log("all notification is read");
  };

  return (
    <>
      <div className="profile-container-header notification">
        <h1 className="header-title">Notifikasi</h1>
        <button className="button-read-all" onClick={setAllNotificationToRead}>
          Tandai sebagai sudah dibaca
        </button>
      </div>
      <div className="profile-container-body notification"></div>
    </>
  );
}
