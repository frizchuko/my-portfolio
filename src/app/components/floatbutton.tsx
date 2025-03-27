"use client";
import { useState } from "react";
import { FloatButton } from "antd";
import {
  MessageOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";
import ContactModal from "./contactmodal";

const FloatingContactButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 24 }}
        icon={<MessageOutlined />} // Only acts as the trigger for the group, doesn't open modal
      >
        <FloatButton
          icon={<WhatsAppOutlined />}
          style={{ backgroundColor: "#25D366", color: "white" }}
          onClick={() => window.open("https://wa.me/+2348131384369", "_blank")}
          
        />
        <FloatButton
          icon={<TwitterOutlined />}
          style={{ backgroundColor: "#1DA1F2", color: "white" }}
          onClick={() => window.open("https://x.com/frizchuko", "_blank")}
        />
        <FloatButton
          icon={<LinkedinOutlined />}
          style={{ backgroundColor: "#0077b5", color: "white" }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/oriodofe-ochuko-608123237", "_blank")
          }
        />
        <FloatButton
          icon={<MailOutlined />}
          onClick={() => setIsModalOpen(true)}
        />
      </FloatButton.Group>

      {/* Contact Modal */}
      <ContactModal visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingContactButton;
