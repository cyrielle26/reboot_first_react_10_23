import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faBackwardFast } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faForwardFast } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Section = styled.div`
  margin: 50px 21px;
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  cursor: pointer;
`;

export const Section_2 = () => {
  return (
    <Section>
      <FontAwesomeIcon
        icon={faShuffle}
        style={{ width: "15px", height: "15px" }}
      />
      <FontAwesomeIcon
        icon={faBackwardFast}
        style={{ width: "15px", height: "15px" }}
      />
      <FontAwesomeIcon
        icon={faCirclePlay}
        style={{ color: "#ee1148", width: "60px", height: "60px" }}
      />
      <FontAwesomeIcon
        icon={faForwardFast}
        style={{ width: "15px", height: "15px" }}
      />
      <FontAwesomeIcon
        icon={faRepeat}
        style={{ width: "15px", height: "15px" }}
      />
    </Section>
  );
};
