"use client";
import React from "react";
import { Form, Formik, Field, ErrorMessage, useFormikContext } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { contactSchema } from "../../service/zod";
import { darkTheme } from "@/hooks/useTheme";
import { auth } from "@/firebase/firebase";
import { createRequest } from "@/service/api";

type ErrorProps = {
  name: string;
};

function Contact() {
  return (
    <div className="">
      <div className="px-10 py-6" style={{ color: darkTheme.text }}>
        <div>
          <Formik
            initialValues={{
              name: "",
              email: "",
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
                  authorId: auth.currentUser?.uid,
                  displayName: auth.currentUser?.displayName,
                },
              };
              createRequest(data)
            }}
          >
            <Form
              className="space-y-1 p-6 border-2 rounded-lg max-w-[600px]"
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
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2"
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
                    className="w-1/4 p-3 border rounded-md focus:outline-none focus:ring-2"
                    style={{
                      borderColor: darkTheme.border,
                      backgroundColor: darkTheme.rootBg,
                    }}
                  />
                  <Field
                    type="text"
                    name="number"
                    placeholder="Enter your number (optional)"
                    className="w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2"
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
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2"
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
                    className="w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2"
                    style={{
                      borderColor: darkTheme.border,
                      backgroundColor: darkTheme.rootBg,
                    }}
                  />
                  <Field
                    as="select"
                    name="socialHandleUrlType"
                    className="w-1/4 p-3 border rounded-md focus:outline-none focus:ring-2 cursor-pointer"
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
                  placeholder="Message (max 300 characters)"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2"
                  rows={4}
                  style={{
                    borderColor: darkTheme.border,
                    backgroundColor: darkTheme.rootBg,
                  }}
                />
                <Error name="message" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full font-semibold p-3 rounded-md transition"
                style={{
                  backgroundColor: darkTheme.button1,
                  color: darkTheme.textLight,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    darkTheme.buttonHover1)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = darkTheme.button1)
                }
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

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

export default Contact;
