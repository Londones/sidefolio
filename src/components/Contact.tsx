"use client";
import React, { useState } from "react";
import { toast } from "sonner";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setFormData(defaultFormState);
      toast("Message sent successfully");
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-muted focus:outline-none focus:ring px-2 py-2 rounded-md text-sm text-muted-foreground w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-muted focus:outline-none focus:ring px-2 py-2 rounded-md text-sm text-muted-foreground w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-muted focus:outline-none focus:ring px-2 mt-4 py-2 rounded-md text-sm text-muted-foreground w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-muted rounded-md font-bold text-muted-foreground"
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );
};
