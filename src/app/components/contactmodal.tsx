"use client";
import { useState } from "react";
import { Modal, Input, Button, Form, message } from "antd";

interface ContactModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ContactModal({ visible, onClose }: ContactModalProps) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSendMessage = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      // TODO: Replace with actual email sending logic
      console.log("Message Sent:", values);

      message.success("Message sent successfully!");
      form.resetFields();
      onClose();
    } catch {
      message.error("Please fill in all fields correctly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Send Me a Message"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose} disabled={loading}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleSendMessage}>
          Send
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Your Name" rules={[{ required: true, message: "Please enter your name" }]}>
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item name="email" label="Your Email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter your message" }]}>
          <Input.TextArea rows={4} placeholder="What can I do for you?" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
