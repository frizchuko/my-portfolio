"use client";
import { FloatButton } from "antd";
import {
  MessageOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";

const FloatingContactButton: React.FC = () => {
  return (
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{ right: 24 }}
      icon={<MessageOutlined />}
    >
      <FloatButton
        icon={<WhatsAppOutlined />}
        onClick={() => window.open("https://wa.me/your-number", "_blank")}
      />
      <FloatButton
        icon={<TwitterOutlined />}
        onClick={() => window.open("https://twitter.com/your-handle", "_blank")}
      />
      <FloatButton
        icon={<LinkedinOutlined />}
        onClick={() =>
          window.open("https://www.linkedin.com/in/your-profile", "_blank")
        }
      />
      <FloatButton
        icon={<MailOutlined />}
        onClick={() => window.location.href = "mailto:your-email@example.com"}
      />
    </FloatButton.Group>
  );
};

export default FloatingContactButton;
