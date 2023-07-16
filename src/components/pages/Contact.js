import React, { Fragment } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Hero from "../Hero";
import "./Contact.css";
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  textarea: Yup.string().required("Message is required"),
});
const Contact = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate form submission
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 500);
  };

  return (
    <Fragment>
      <Hero />
      <div className="contact-map_container">
        <h1>Contact Info</h1>
        <iframe className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47214.91533256289!2d45.00965955455988!3d41.54925360637675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044041e49c55c0b%3A0xc559e7b06d25ce7a!2z4YOb4YOQ4YOT4YOQ4YOS4YOd4YOc4YOY!5e1!3m2!1ska!2sge!4v1688045785531!5m2!1ska!2sge"
          loading="lazy"
          title="map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-form_container">
        <div className="address-form_container">
          <h1>ADDRESS</h1>
          <p>9870 ST VINCENT PLACE,{<br />} GLASGOW, DC 45 FR 45.</p>
          <h3>Freephone: +1 800 559 6580</h3>
          <h3>Telephone: +1 800 603 6035</h3>
          <h3>FAX: +1 800 889 9898</h3>
          <h3>FAX: +1 800 889 9898</h3>
          <h3>E-mail: mail@demolink.org</h3>
        </div>

        <div className="contact-form">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              textarea: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            
            <Form>
              <h1 className="contact-title">Contact Form</h1>
              <div>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  className="from-field_style"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  className="from-field_style"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone*"
                  className="from-field_style"
                />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>

              <div>
                <Field
                  as="textarea"
                  id="textarea"
                  className="textarea"
                  name="textarea"
                  placeholder="Message*"
                />
                <ErrorMessage
                  name="textarea"
                  component="div"
                  className="error"
                />
              </div>

              <button type="submit" className="contact-btn">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
