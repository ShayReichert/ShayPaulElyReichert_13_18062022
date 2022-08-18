import styled from "styled-components";
import colors from "../utils/style/colors";
import Button from "../components/Button";

const Account = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: ${colors.backgroundLight};
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const AccountContentWrapper = styled.section`
  width: 100%;
  flex: 1;

  &.cta {
    @media (min-width: 720px) {
      flex: 0;
    }
  }
`;

const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AccountAmountDescription = styled.p`
  margin: 0;
`;

function AccountCard(props) {
  return (
    <Account>
      <AccountContentWrapper>
        <AccountTitle>{props.transaction.title}</AccountTitle>
        <AccountAmount>${props.transaction.amount}</AccountAmount>
        <AccountAmountDescription>{props.transaction.amountDescription}</AccountAmountDescription>
      </AccountContentWrapper>
      <AccountContentWrapper className="cta">
        <Button className="transaction-button">View transactions</Button>
      </AccountContentWrapper>
    </Account>
  );
}

export default AccountCard;
