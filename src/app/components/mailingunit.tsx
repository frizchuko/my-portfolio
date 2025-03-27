"use client";
import { useState } from "react";
import { Input, Button, message } from "antd";
import { MailOutlined } from "@ant-design/icons";

export default function MailingUnit() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      message.warning("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    
    // Simulate API request (replace this with actual API call)
    setTimeout(() => {
      message.success("Subscribed successfully!");
      setEmail("");
      setLoading(false);
    }, 1500);
  };

  return (
    <div>

      
      <div className="mt-4 flex gap-2">
        <Input
          size="large"
          placeholder="Enter your email"
          prefix={<MailOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button 
          type="primary" 
          size="large" 
          loading={loading} 
          onClick={handleSubscribe}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
