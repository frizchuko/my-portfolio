"use client";
import { Form, Input, Button, message } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: FormValues) => {
    setLoading(true);
    try {
      console.log('Received values:', values);
      message.success('Your message has been sent successfully!');
    } catch {
      message.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen p-4">
        {/* Left Column - Placeholder Image */}
        <div className=" lg:flex items-center justify-center">
          <div className="w-3/4 h-3/4">
            <Image 
              src="/contact.gif" 
              alt="contact illustration" 
              width={500} 
              height={500} 
              priority 
              unoptimized 
            />
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex items-center justify-center">
          <Form
            name="contact"
            layout="vertical"
            className="w-full max-w-lg"
            onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Enter your name" autoFocus />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea placeholder="Enter your message" rows={4} />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="w-full" 
                loading={loading}  
                style={{ backgroundColor: "#737373", borderColor: "#737373" }}
              >
                Send Me A Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <section className="py-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Let&apos;s have a chat</h2>
          <p className="text-gray-600 mt-2">We&apos;ll bring your projects to life.</p>
          <div className="flex justify-center gap-4 mt-6">
            <Button icon={<GithubOutlined />} shape="circle" />
            <Button icon={<LinkedinOutlined />} shape="circle" />
            <Button icon={<MailOutlined />} shape="circle" />
          </div>
        </div>
      </section>
    </div>
  );
}
