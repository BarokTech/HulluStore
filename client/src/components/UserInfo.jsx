import { useContext } from "react";
import { UserContext } from "../App";

function UserInfo() {
  const { currentUser } = useContext(UserContext)

  return (
    <div className="container p-5 user-info">
      <div className="row">
        <div className="col-3 user-detail " style={{ fontWeight: "bold" }}>
          Name:
        </div>
        <div className="col">{currentUser.name.firstname} {currentUser.name.lastname}</div>
      </div>
      <div className="row">
        <div className="col-3 user-detail ">Email:</div>
        <div className="col">{currentUser.email}</div>
      </div>
      <div className="row">
        <div className="col-3 user-detail ">Phone:</div>
        <div className="col">{currentUser.phone}</div>
      </div>
      <div className="row">
        <div className="col-3 user-detail ">Address</div>
        <div className="col">{currentUser.address.street}</div>
      </div>
      <div className="row">
        <div className="col-3 user-detail ">Total Purchase:</div>
        <div className="col">${currentUser.address.totalPurchase}</div>
      </div>
    </div>
  );
}

export default UserInfo;
