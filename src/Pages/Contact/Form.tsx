import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SectionTitle from "../../shared/SectionTitle";
import { FormButton } from "../../shared/Buttons";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  Container,
  FormField,
  FormGrid,
  FormTitle,
  LeftContainer,
  RightContainer,
  Wrapper,
} from "./FormElements";
import ContactItem from "./ContactItem";
import MyTextInput from "./MyTextInput";
import MyTextArea from "./MyTextArea";

const validationSchema = Yup.object({
  name: Yup.string().required("Your name is required"),
  email: Yup.string().required("Email is required").email(),
});

const SectionTitleStyle = {
  color: "var(--primary-purple)",
  paddingTop: "3.5rem",
};

const FormStyle = styled(Form)`
  width: 100%;
  font-size: 1.8rem;
`;

const phone = <PhoneIcon />;
const email = <EmailIcon />;
const location = <LocationOnIcon />;

const FormComponent = () => {
  const [formData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <Wrapper>
      <SectionTitle style={SectionTitleStyle}>Contact</SectionTitle>
      <Container>
        <FormGrid>
          <LeftContainer>
            <div className="contact-title">
              <FormTitle>Get In Touch</FormTitle>
            </div>
            <Formik
              enableReinitialize
              initialValues={formData}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                axios({
                  method: "POST",
                  url: `${process.env.FORMSPREE_ENDPOINT}`,
                  data: values,
                })
                  .then((response) => {
                    actions.setSubmitting(false);
                    actions.resetForm();
                    alert("Email sent successfully");
                  })
                  .catch((error) => {
                    actions.setSubmitting(false);
                    alert("Something went wrong.");
                  });
              }}
            >
              {({ handleSubmit, isValid, dirty, isSubmitting }) => (
                <FormStyle onSubmit={handleSubmit}>
                  <MyTextInput label="Full Name" name="name" />
                  <MyTextInput label="Email Address" name="email" />
                  <MyTextInput label="Subject" name="subject" />
                  <MyTextArea label="Message" name="message" rows={6} />
                  <FormField>
                    <FormButton
                      type="submit"
                      disabled={isSubmitting || !dirty || !isValid}
                      className="form-button"
                    >
                      Send Email
                    </FormButton>
                  </FormField>
                </FormStyle>
              )}
            </Formik>
          </LeftContainer>
          <RightContainer>
            <ContactItem
              title={"Phone"}
              icon={phone}
              contact={"801-928-6913"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              contact={"markell.b.richards@gmail.com"}
            />
            <ContactItem
              title={"Location"}
              icon={location}
              contact={"Nashville, TN"}
            />
          </RightContainer>
        </FormGrid>
      </Container>
    </Wrapper>
  );
};

export default FormComponent;
