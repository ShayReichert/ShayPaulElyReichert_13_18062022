import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { transactions } from "../utils/data/transactions";
import AccountCard from "../components/AccountCard";
import { useSelector, useDispatch } from "react-redux";
import { editUserInfos } from "../features/userActions";

const Header = styled.section`
  color: #fff;
  margin-bottom: 2rem;
`;

const Title1 = styled.h1`
  font-size: 2rem;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
`;

const Input = styled.input`
  margin: 0 1rem;
  padding: 5px;
  font-size: 1.2rem;
`;

function Profile() {
  const { userInfo } = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(userInfo?.firstName);
    setLastName(userInfo?.lastName);
  }, [userInfo]);

  const handleClick = () => {
    setIsEdit((status) => !status);

    if (isEdit) {
      const userData = {
        firstName: firstName,
        lastName: lastName,
      };
      dispatch(editUserInfos(userData));
    }
  };

  const handleCancel = () => {
    setIsEdit(false);
    setFirstName(userInfo?.firstName);
    setLastName(userInfo?.lastName);
  };

  return (
    <main className="main bg-dark">
      <Header>
        <Title1>
          Welcome back
          <br />
          {isEdit ? (
            <>
              <Input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <Input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </>
          ) : (
            <>
              {userInfo?.firstName} {userInfo?.lastName}!
            </>
          )}
        </Title1>
        {isEdit ? (
          <div className="buttons">
            <Button className="edit-button" onPress={handleClick}>
              Save
            </Button>
            <Button className="edit-button" onPress={handleCancel}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button className="edit-button" onPress={handleClick}>
            Edit Name
          </Button>
        )}
      </Header>
      <h2 className="sr-only">Accounts</h2>

      {transactions.map((transaction, key) => (
        <AccountCard transaction={transaction} key={key} />
      ))}
    </main>
  );
}

export default Profile;
