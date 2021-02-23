import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Row, Col } from "antd";
import { FC } from "react";
import LeftSide from "./LeftSide";
import { Form, Input, Button, Checkbox } from "antd";
import imgURL from "../../assets/img/kingdom-1.png";
import { Typography } from "antd";

const { Text, Link, Title } = Typography;

const SignUp: FC = () => {
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
                    Already a member?
                  </Text>
                  <Text type="success">
                    <Link href="/signin" style={{ fontSize: "16px" }}>
                      Sign in
                    </Link>
                  </Text>
                </Col>
              </Row>
            </TopLine>
            <SignUpBox>
              <FormContainer>
                <Form
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Title
                    level={3}
                    style={{ textAlign: "center", fontWeight: "normal" }}
                  >
                    Sign up to Fly
                  </Title>
                  <Row justify="space-between">
                    <Col span={11}>
                      <Form.Item
                        label="Name"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[
                          {
                            required: true,
                            message: "Please input your Username!",
                          },
                        ]}
                      >
                        <Input style={{ padding: "8px 12px" }} />
                      </Form.Item>
                    </Col>
                    <Col span={11}>
                      <Form.Item
                        label="Surname"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[
                          {
                            required: true,
                            message: "Please input your Username!",
                          },
                        ]}
                      >
                        <Input style={{ padding: "8px 12px" }} />
                      </Form.Item>
                    </Col>
                  </Row>
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
                    <Input
                      type="password"
                      placeholder="6+ characters"
                      style={{ padding: "8px 12px" }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Text type="secondary" style={{ fontSize: "12px" }}>
                          Creating an account means you’re okay with our Terms
                          of Service, Privacy Policy, and our default
                          Notification Settings.
                        </Text>
                      </Checkbox>
                    </Form.Item>
                  </Form.Item>
                  <Form.Item>
                    <Button block size="large" type="primary" htmlType="submit">
                      Create an account
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

export default SignUp;

const ContentBox = styled.section`
  height: 100vh;
  background: #e8e8e8;
`;

const TopLine = styled.div`
  margin-right: 42px;
  padding-top: 48px;
`;

const SignUpBox = styled.div`
  width: 100%;
  height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 420px;
`;
