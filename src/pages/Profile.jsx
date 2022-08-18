import styled from "styled-components";
import Button from "../components/Button";
import { transactions } from "../utils/data/transactions";
import AccountCard from "../components/AccountCard";

const Header = styled.section`
  color: #fff;
  margin-bottom: 2rem;
`;

const Title1 = styled.h1`
  font-size: 2rem;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
`;

function Profile() {
  return (
    <main className="main bg-dark">
      <Header>
        <Title1>
          Welcome back
          <br />
          Tony Jarvis!
        </Title1>
        <Button className="edit-button">Edit Name</Button>
      </Header>
      <h2 className="sr-only">Accounts</h2>

      {transactions.map((transaction, key) => (
        <AccountCard transaction={transaction} key={key} />
      ))}
    </main>
  );
}

export default Profile;
