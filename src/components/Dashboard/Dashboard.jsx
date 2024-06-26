import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "@bdenzer/react-modal";
import Logo from "../../assets/logoo.png";
import "./Dashboard.css";
import DougBrook from "../AllUserTransactions/DougBrook";
import AnneMarie from "../AllUserTransactions/AnneMarie";
import EdwardJameson from "../AllUserTransactions/EdwardJameson";
import GlennAwong from "../AllUserTransactions/GlennAwong";
import SmithBrown from "../AllUserTransactions/SmithBrown";
import AlexaWilliams from "../AllUserTransactions/AlexaWilliams";
import JamesFletcher from "../AllUserTransactions/JamesFletcher";
import GregoryHartmann from "../AllUserTransactions/GregoryHartmann";
import ElsaMichelleJefferson from "../AllUserTransactions/ElsaMichelleJefferson";
import TanyaTateThomas from "../AllUserTransactions/TanyaTateThomas";

export default function Dashboard() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [recipientAccount, setRecipientAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); // get the user data

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // remove the user data
    navigate("/login");
  };

  const closeModal = () => {
    setShouldShowModal(false);
  };

  const openModal = () => {
    setShouldShowModal(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate recipientAccount and amount
    const newErrors = {};

    if (!recipientAccount) {
      newErrors.recipientAccount = "Recipient Account is required";
    }

    if (!amount) {
      newErrors.amount = "Amount is required";
    } else if (isNaN(amount)) {
      newErrors.amount = "Amount must be a number";
    }

    if (Object.keys(newErrors).length === 0) {
      // Submit the form if there are no errors
      setSuccessMessage(
        "You can't make a transaction at the moment, please contact the bank to fix this immediately."
      );
      setErrors({});
    } else {
      // Update the errors state with validation errors
      setErrors(newErrors);
    }
  };
  //   const { match } = props;
  return (
    <div className="dashboard">
      <div className="dashboard_header">
        <img className="Logo" src={Logo} alt="logo" />
        <button className="logout_btn" onClick={signOut} href="#">
          Logout
        </button>
      </div>
      <div className="main-account-balance">
        {user.avatar && (
          <div className="view-account">
          <img src={user.avatar} alt="" />
          <div className="account_text">
            <h2>Welcome back,<br /> {user.name}</h2>
          </div>
        </div>
        )}
        {!user.avatar && (
        <div className="account_text">
          <h2>Welcome back,<br /> {user.name}</h2>
        </div>
        )}
        <div className="account-details">
          <h2>Current Balance</h2>
          <span className="price">${user.amount}</span>
        </div>
        <div className="transaction_container">
          {user.id === 1000 && <AlexaWilliams />}
          {/* TESTING */}
          {user.id === 1 && <DougBrook />}
          {user.id === 2 && <AnneMarie />}
          {user.id === 3 && <EdwardJameson />}
          {user.id === 4 && <GlennAwong />}
          {user.id === 5 && <SmithBrown />}
          {user.id === 6 && <AlexaWilliams />}
          {user.id === 7 && <JamesFletcher />}
          {user.id === 8 && <GregoryHartmann />}
          {user.id === 9 && <ElsaMichelleJefferson />}
          {user.id === 10 && <TanyaTateThomas />}
        </div>
      </div>
      {/* <div className="credit_card">
        <img src={creditCard} alt="creditCard" />
        <span>{user.cardName}</span>
      </div> */}
      <div className="account-footer">
        <div>
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <span>Account</span>
        </div>
        <div onClick={() => openModal()}>
          <span>
            <i className="fa fa-exchange" aria-hidden="true"></i>
          </span>
          <span>Transfer</span>
        </div>

        <div>
          <span>
            <i className="fa-solid fa-angles-down"></i>
          </span>
          <span>Deposit</span>
        </div>
        <div>
          <span>
            <i className="fa fa-money" aria-hidden="true"></i>
          </span>
          <span>Pay</span>
        </div>
      </div>
      <Modal
        closeModal={closeModal}
        shouldShowModal={shouldShowModal}
        title="Transfer Fund"
      >
        {successMessage && (
          <div
            style={{
              color: "red",
              padding: 5,
              fontSize: "18px",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <i className="fa-solid fa-triangle-exclamation"></i>{" "}
            {successMessage}
          </div>
        )}
        <form className="modal_form" onSubmit={handleSubmit}>
          <div>
            <label>Recipient Account</label>
            <input
              type="number"
              value={recipientAccount}
              onChange={(e) => setRecipientAccount(e.target.value)}
            />
            {errors.recipientAccount && (
              <div style={{ color: "red", marginTop: 10 }}>
                {errors.recipientAccount}
              </div>
            )}
          </div>
          <div>
            <label>Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {errors.amount && (
              <div style={{ color: "red", marginTop: 10 }}>{errors.amount}</div>
            )}
          </div>
          <div>
            <button>Transfer</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
