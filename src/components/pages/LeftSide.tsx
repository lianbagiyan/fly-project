import "antd/dist/antd.css";
import styled from "styled-components";
import FlyIcon from "../../icons/FlyIcon";
import { Typography } from "antd";

const { Text } = Typography;

type Props = {
  imgURL: string;
};

export default function LeftSide(props: Props) {
  const { imgURL } = props;
  return (
    <>
      <Section>
        <Block>
          <FlyIcon />
          <Text
            style={{
              display: "block",
              maxWidth: "300px",
              fontSize: "20px",
              paddingTop: "16px",
              color: "white",
            }}
          >
            Follow your interests & hear what people are talking about.
          </Text>
        </Block>
        <ImgContainer>
          <img width={348} height={366} src={imgURL} />
        </ImgContainer>
      </Section>
    </>
  );
}

const Section = styled.section`
  height: 100vh;
  background: #000c17;
`;

const Block = styled.div`
  padding: 48px 0 0 48px;
`;

const ImgContainer = styled.div`
  height: calc(100% - 304px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
