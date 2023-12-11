"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "./utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import { TContactSchema } from "./types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: TContactSchema) => {
  const firstName = formData.firstName;
  const senderEmail = formData.senderEmail;
  const message = formData.message;

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "cliff@10strata.com",
      subject: `A Message from cliffrc site [${firstName}]`,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        firstName: firstName as string,
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
