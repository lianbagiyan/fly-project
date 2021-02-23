import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Row, Col } from "antd";
import { FC } from "react";
import LeftSide from "./LeftSide";
import { Form, Input, Button } from "antd";
import imgURL from "../../assets/img/kingdom-11.png";
import { Typography } from "antd";

const { Text, Link, Title } = Typography;

const SignIn: FC = () => {
  function clickHandler() {
    console.log("Button clicked");
  }

  return (
    <>
      <Row>
        <Col span={6}>
          <LeftSide imgURL={imgURL} />
        </Col>
        <Col span={18}>
          <ContentBox>
            <TopLine>
              <Row justify="end">
                <Col>
                  <Text style={{ fontSize: "16px", paddingRight: "16px" }}>
                    Not a member?
                  </Text>
                  <Text type="success">
                    <Link href="/signup" style={{ fontSize: "16px" }}>
                      Sign up
                    </Link>
                  </Text>
                </Col>
              </Row>
            </TopLine>
            <SignUpBox>
              <FormContainer>
                <Form
                  name="normal_login"
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Title
                    level={3}
                    style={{ textAlign: "center", fontWeight: "normal" }}
                  >
                    Sign in to Fly
                  </Title>
                  <Form.Item
                    label="Email"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input type="email" style={{ padding: "8px 12px" }} />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input.Password
                      type="password"
                      style={{ padding: "8px 12px" }}
                    />
                    <a href="">Forgot password?</a>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      block
                      size="large"
                      type="primary"
                      htmlType="submit"
                      onClick={clickHandler}
                    >
                      Sign in
                    </Button>
                  </Form.Item>
                </Form>
              </FormContainer>
            </SignUpBox>
          </ContentBox>
        </Col>
      </Row>
    </>
  );
};

export default SignIn;

const ContentBox = styled.section`
  height: 100vh;
  background: #e8e8e8;
`;

const TopLine = styled.div`
  margin-right: 42px;
  padding-top: 48px;
`;

const SignUpBox = styled.div`
  height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 420px;
`;
