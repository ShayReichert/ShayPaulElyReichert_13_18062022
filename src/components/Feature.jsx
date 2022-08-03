import styled from "styled-components";
import colors from "../utils/style/colors";

const FeatureItemTitle = styled.h3`
  color: ${colors.dark};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid ${colors.primary};
  border-radius: 50%;
  padding: 1rem;
`;

function Feature(props) {
  return (
    <FeatureItem>
      <FeatureIcon src={props.feature.icon} alt="Chat Icon" />
      <FeatureItemTitle>{props.feature.title}</FeatureItemTitle>
      <p>{props.feature.text}</p>
    </FeatureItem>
  );
}
export default Feature;
