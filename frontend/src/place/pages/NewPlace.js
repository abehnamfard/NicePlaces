import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

import "./NewPlace.css";

const NewPlace = () => {
  const layout = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  };

  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="عنوان محل"
            name="title"
            rules={[
              {
                required: true,
                message: "عنوان محل اجباری می باشد"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="توضیحات" name="description">
            <Input.TextArea rows="8" />
          </Form.Item>

          <Form.Item
            label="آدرس"
            name="address"
            rules={[
              {
                required: true,
                message: "آدرس اجباری می باشد"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="آدرس تصویر"
            name="imageUrl"
            rules={[
              {
                required: true,
                message: "آدرس تصویر اجباری می باشد"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                label="طول جغرافیایی"
                name="lng"
                rules={[
                  {
                    required: true,
                    message: "طول جغرافیایی اجباری می باشد"
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                label="عرض جغرافیایی"
                name="lat"
                rules={[
                  {
                    required: true,
                    message: "عرض جغرافیایی اجباری می باشد"
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button size="large" shape="round" type="primary" htmlType="submit">
              ثبت
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default NewPlace;
//     location: {
//       lat: 40.7484405,
//       lng: -73.9878584
//     },
//     creator: "user1"
