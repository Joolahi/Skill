import React, { useState } from "react";
import DataService from "../services/service";

export default function AdminBoard() {
  const [isAdmin, setIsAdmin] = useState(false);

  DataService.authenticateAdmin()
    .then((res) => {
      if (res.status === 200) setIsAdmin(true);
    })
    .catch((err) => {
      window.location.href = "/login";
    });
  return (
    <>
      {isAdmin ? (
        <div>
          <h1>Admin</h1>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
