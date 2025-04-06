"use client";

import { Form, Input, message, Select, DatePicker, Slider, Button } from "antd";

import {
  ArrowRightOutlined,
  BookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useState } from "react";

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
      console.log("Received values:", values);
      message.success("Your message has been sent successfully!");
    } catch {
      message.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen p-4 mt-12 lg:mt-4">
        {/* Left Column - Placeholder Image */}
        <div className=" lg:flex items-center justify-center">
          <div className="lg:w-3/4 lg:h-3/4 w-full ">
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
        <div className="flex items-center justify-center mt-12 ">
          <Form
            name="contact"
            layout="vertical"
            className="w-full max-w-2xl"
            onFinish={onFinish}
          >
            {/* Business/Company Name */}
            <Form.Item
              label="Business/Company Name"
              name="companyName"
              rules={[
                { required: true, message: "Please enter your company name" },
              ]}
            >
              <Input placeholder="Enter your company name" autoFocus />
            </Form.Item>

            {/* Business/Company Email */}
            <Form.Item
              label="Business/Company Email"
              name="companyEmail"
              rules={[
                { required: true, message: "Please enter your company email" },
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input placeholder="Enter your company email" />
            </Form.Item>

            {/* Services Required */}
            <Form.Item
              label="Services Required"
              name="services"
              rules={[
                {
                  required: true,
                  message: "Please select at least one service",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Select services"
                options={[
                  { label: "Website Creation", value: "website_creation" },
                  {
                    label: "Website Maintenance",
                    value: "website_maintenance",
                  },
                  { label: "Website Hosting", value: "website_hosting" },
                  { label: "UI/UX Design", value: "ui_ux_design" },
                  { label: "SEO Optimization", value: "seo" },
                ]}
              />
            </Form.Item>

            {/* Development Type */}
            <Form.Item
              label="Development Type"
              name="developmentType"
              rules={[
                { required: true, message: "Please select a development type" },
              ]}
            >
              <Select placeholder="Select development type">
                <Select.Option value="landing_page">Landing Page</Select.Option>
                <Select.Option value="booking_site">Booking Site</Select.Option>
                <Select.Option value="ecommerce_site">
                  E-Commerce Site
                </Select.Option>
                <Select.Option value="logistics_site">
                  Logistics Site
                </Select.Option>
                <Select.Option value="portfolio_site">
                  Portfolio Site
                </Select.Option>
                <Select.Option value="real_estate_site">
                  Real Estate Website
                </Select.Option>
              </Select>
            </Form.Item>

            {/* Time Frame */}
            <Form.Item
              label="Preferred Time Frame"
              name="timeFrame"
              rules={[
                {
                  required: true,
                  message: "Please select your project time frame",
                },
              ]}
            >
              <DatePicker.RangePicker
                format="YYYY-MM-DD"
                disabledDate={(current) =>
                  current &&
                  current.isBefore(
                    new Date(Date.now() + 1000 * 60 * 60 * 24 * 14),
                    "day"
                  )
                }
                className="w-full"
              />
            </Form.Item>

            {/* Budget */}
            <Form.Item label="Budget ($)" name="budget">
              <Slider
                min={150}
                max={5000}
                marks={{
                  150: "$150",
                  
                  600: "$600",
                
                  1000: "$1k",
                  1500: "$1.5k",
                  2000: "$2k",
                
                  3500: "$3.5k",
                  5000: "$5k",
                }}
                tooltip={{ formatter: (value) => `$${value}` }}
              />
            </Form.Item>

            {/* Comments */}
            <Form.Item
              label="Additional Comments"
              name="comments"
              rules={[
                { required: true, message: "Please add a brief comment" },
              ]}
            >
              <Input.TextArea
                placeholder="Any extra info, goals, or preferences?"
                rows={4}
              />
            </Form.Item>

            {/* Submit */}
            <Form.Item className="flex justify-center ">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full px-6 py-3 rounded-md"
                loading={loading}
                
                size="large"
                
              >
                Get your service
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <section className="py-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Want to see something new?
          </h2>
          <p className="text-gray-600 mt-2">
          
          </p>
          <div className="flex justify-center gap-4 mt-6">
          <a
                href="/blog"
                className="inline-block text-blue-600 hover:text-blue-800 px-6 py-3 rounded-lg  text-lg font-semibold transition"
              >
              <BookOutlined className="mx-2"/> Checkout my blog <ArrowRightOutlined className="mx-2"/>
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}
