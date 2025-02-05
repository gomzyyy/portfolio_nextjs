"use client";
import Spinner from "@/components/mini-components/sub-components/spinner";
import { darkTheme } from "@/hooks/useTheme";
import { createRequest } from "@/service/api";
import { contactSchema } from "@/service/zod";
import { RootState } from "@/store/store";
import { Field, Form, Formik, useFormikContext } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toFormikValidationSchema } from "zod-formik-adapter";

const ContactForm = (): React.JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const author: any = useSelector((s: RootState) => s.admin.admin);

  return (
    <Formik
      initialValues={{
        name: "",
        email: author && author.email?.trim().length !== 0 ? author.email : "",
        countryCode: "+91",
        number: "",
        socialHandleUrl: "",
        socialHandleUrlType: "",
        message: "",
      }}
      validationSchema={toFormikValidationSchema(contactSchema)}
      onSubmit={(values) => {
        const data = {
          ...values,
          author: {
            authorId: author?.uid,
            displayName: author?.displayName,
          },
        };
        if (values.email.trim() === "gomzydhingra0001@gmail.com") {
          toast.error("Admin can't request to itself.");
          return;
        }
        const sendRequest = async () => {
          const res = await createRequest(data, setLoading);
          res.success ? toast.success(res.message) : toast.error(res.message);
          setTimeout(() => {
            toast.info("Admin will reach you through the request soon✅");
          }, 3000);
        };
        sendRequest();
      }}
    >
      <Form
        className="space-y-1 p-6 border-2 rounded-lg max-w-[600px] w-[100%]"
        style={{
          backgroundColor: darkTheme.rootBg,
          color: darkTheme.text,
          borderColor: darkTheme.border,
        }}
      >
        <div className="text-center text-xl font-bold">
          Enter your information
        </div>

        {/* Full Name */}
        <div>
          <Field
            type="text"
            name="name"
            placeholder="Full name (required)"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 "
            style={{
              borderColor: darkTheme.border,
              backgroundColor: darkTheme.rootBg,
            }}
          />
          <Error name="name" />
        </div>

        {/* Country Code & Number */}

        <div>
          <div className="flex gap-2">
            <Field
              type="text"
              name="countryCode"
              placeholder="(+91)"
              className="w-1/4 p-3 border rounded-md focus:outline-none focus:ring-2 ring-[#707070]"
              style={{
                borderColor: darkTheme.border,
                backgroundColor: darkTheme.rootBg,
              }}
            />
            <Field
              type="text"
              name="number"
              placeholder="Enter your number (optional)"
              className="w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2 "
              style={{
                borderColor: darkTheme.border,
                backgroundColor: darkTheme.rootBg,
              }}
            />
          </div>
          <Error name="number" />
        </div>

        {/* Email */}
        <div>
          <Field
            type="email"
            name="email"
            placeholder="Enter email (required)"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 "
            style={{
              borderColor: darkTheme.border,
              backgroundColor: darkTheme.rootBg,
              color: darkTheme.text,
            }}
          />
          <Error name="email" />
        </div>

        {/* Social Handle & Type */}

        <div>
          <div className="flex gap-2">
            <Field
              type="text"
              name="socialHandleUrl"
              placeholder="Social handle (i.e: @username)"
              className="w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2 "
              style={{
                borderColor: darkTheme.border,
                backgroundColor: darkTheme.rootBg,
              }}
            />
            <Field
              as="select"
              name="socialHandleUrlType"
              className="w-1/4 p-3 border rounded-md focus:outline-none focus:ring-2 cursor-pointer "
              style={{
                borderColor: darkTheme.border,
                backgroundColor: darkTheme.rootBg,
                color: darkTheme.text,
              }}
            >
              <option value="" disabled hidden>
                Type
              </option>
              <option value="linkedin">LinkedIn</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
            </Field>
          </div>
          <Error name="socialHandleUrl" />
        </div>
        {/* Message */}
        <div>
          <Field
            as="textarea"
            name="message"
            placeholder="Leave a message or provide a subject for more clarity."
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 "
            rows={4}
            style={{
              borderColor: darkTheme.border,
              backgroundColor: darkTheme.rootBg,
            }}
          />
          <Error name="message" />
        </div>

        {/* Submit Button */}
        {!loading ? (
          <button
            type="submit"
            className="w-full font-semibold p-3 rounded-md transition"
            style={{
              backgroundColor: darkTheme.button1,
              color: darkTheme.textLight,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = darkTheme.buttonHover1)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = darkTheme.button1)
            }
          >
            Submit
          </button>
        ) : (
          <div
            className="w-full font-semibold p-3 rounded-md transition flex items-center justify-center"
            style={{
              backgroundColor: darkTheme.button1,
              color: darkTheme.textLight,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = darkTheme.buttonHover1)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = darkTheme.button1)
            }
          >
            <Spinner />
          </div>
        )}
      </Form>
    </Formik>
  );
};

type ErrorProps = {
  name: string;
};

const Error: React.FC<ErrorProps> = ({ name }) => {
  const { errors, touched } = useFormikContext<any>();
  const errorMessage = errors[name] ? (errors[name] as string) : "";
  return (
    <div>
      {errorMessage && touched[name] ? (
        <span className="text-xs pl-3" style={{ color: darkTheme.text }}>
          {errorMessage}
        </span>
      ) : (
        <span className="text-xs pl-3" style={{ color: darkTheme.text }}>
          {""}
        </span>
      )}
    </div>
  );
};

export default ContactForm;
