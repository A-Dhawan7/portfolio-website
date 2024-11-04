import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    PaddingContainer,
    Heading,
    FlexContainer,
    BlueText,
    MessageMeButton
} from '../styles/Global.styled';

import { fadeInBottomVariant } from '../utils/Variants';

import {
    ContactMe,
    FormLabel,
    FormInput
} from '../styles/Footer.styled';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        const formDataWithAccessKey = new FormData();
        formDataWithAccessKey.append('access_key', '56cad318-7675-472b-8ee8-355daef1fdd2');
        formDataWithAccessKey.append('name', formData.name);
        formDataWithAccessKey.append('email', formData.email);
        formDataWithAccessKey.append('message', formData.message);

        try {
            setIsLoading(true);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataWithAccessKey
            });

            const result = await response.json();

            if (result.success) {
                toast.success('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                toast.error('Oops! Something went wrong. Please try again.');
            }
        } catch (error) {
            toast.error('An error occurred, please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PaddingContainer id="Contact" top="5%" bottom="10%">
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />

            <Heading
                as={motion.h4}
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
                size="h4"
                align="center"
            >
                MY CONTACT
            </Heading>

            <Heading
                as={motion.h2}
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
                size="h2"
                align="center"
                top="0.5rem"
            >
                Contact <BlueText>Me Here</BlueText>
            </Heading>

            <PaddingContainer top="3rem">
                <FlexContainer justify="center">
                    <ContactMe
                        as={motion.form}
                        onSubmit={submitForm}
                        variants={fadeInBottomVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <PaddingContainer bottom="2rem">
                            <FormLabel>Name:</FormLabel>
                            <FormInput
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </PaddingContainer>
                        <PaddingContainer bottom="2rem">
                            <FormLabel>Email:</FormLabel>
                            <FormInput
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </PaddingContainer>
                        <PaddingContainer bottom="2rem">
                            <FormLabel>Message:</FormLabel>
                            <FormInput
                                as="textarea"
                                name="message"
                                placeholder="Enter your message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </PaddingContainer>

                        <FlexContainer justify="center" responsiveFlex>
                            <MessageMeButton type="submit" disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </MessageMeButton>
                        </FlexContainer>
                    </ContactMe>
                </FlexContainer>
            </PaddingContainer>
        </PaddingContainer>
    );
};

export default Footer;
