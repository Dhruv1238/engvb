import { Alert, Button, Input, Textarea, Typography, Spinner } from '@material-tailwind/react';
import React, { useState } from 'react';


const ContactForm = () => {
    const [formState, setFormState] = useState({});
    const [emailSent, setEmailSent] = useState(false);
    const [errors, setErrors] = useState({});
    const [spin, setSpin] = useState(false);

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateForm = () => {
        const errors = {};

        if (!formState.name) {
            errors.name = "Please enter your name.";
        }

        if (!formState.email) {
            errors.email = "Please enter your email address.";
        } else if (!validateEmail(formState.email)) {
            errors.email = "Please enter a valid email address.";
        }

        if (!formState.course) {
            errors.course = "Please enter the course you are interested in.";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const sendEmail = async () => {
        if (!validateForm()) {
            return;
        }
        setSpin(true);

        const pdfFile = "/MEP.pdf";
        const pdfData = await fetch(pdfFile).then((res) => res.arrayBuffer());
        const pdfBase64 = btoa(
            new Uint8Array(pdfData).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
            )
        );

        const config = {
            SecureToken: "cd0bcde3-6ca4-4f06-83bb-7ee9d9e14ab2",
            To: "info@engvblearning.com",
            From: "info@engvblearning.com",
            Subject: "Enquiry form ENGVB Learning Website",
            Body: `Name: ${formState.name}\nEmail: ${formState.email}\nCourse: ${formState.course}\nMessage: ${formState.message}`,
        }

        const configClient = {
            SecureToken: "cd0bcde3-6ca4-4f06-83bb-7ee9d9e14ab2",
            To: formState.email,
            From: "info@engvblearning.com",
            Subject: "Thank you for contacting ENGVB-Learning!",
            Body: `Hi ${formState.name},\n\nThank you for contacting us. We will get back to you as soon as possible.\n\nRegards,\nTeam ENGVB Learning`,
        }

        const [email1, email2] = await Promise.all([
            window.Email.send(config),
            window.Email.send(configClient),
        ]);

        setFormState(formState => ({
            ...formState,
            name: "",
            email: "",
            course: "",
            message: "",
        }));

        if (email1 === "OK" && email2 === "OK") {
            setEmailSent(true);
            setSpin(false);
        }

        console.log("Email 1 sent:", email1);
        console.log("Email 2 sent:", email2);
    };

    return (
        <>
            <div id='contact' className=' grid grid-cols-1 md:grid-cols-2 items-center md:px-20 pt-16 p-9 gap-14'>
                <Typography className='text-3xl sm:text-5xl lg:text-5xl text-gradient font-bold text-center'>Contact Us</Typography>
                <form
                    className="flex flex-col gap-3 justify-center items-center text-white"
                    onChange={changeHandler}
                >
                    <Input
                        type="text"
                        name="name"
                        label="Your Name"
                        className="text-white"
                        error={errors.name}
                        value={formState.name}
                        color='white'
                    />
                    <Input
                        type="email"
                        name="email"
                        label="Your Email"
                        className="text-white"
                        error={errors.email}
                        value={formState.email}
                        color='white'
                    />
                    <Input
                        type="text"
                        name="course"
                        label="Course Interested In?"
                        className="text-white"
                        error={errors.course}
                        value={formState.course}
                        color='white'
                    />
                    <Textarea name="message" label="Anything Else" className="text-white border-white" value={formState.message} />
                    {spin ? <Spinner className="h-8 w-8 text-blue-500" /> : 
                    <Button color="white" variant="outlined" onClick={sendEmail} fullWidth>
                        Submit
                    </Button>}
                    {emailSent && (
                        <Alert className='text-white'>
                            Enquiry Submitted Successfully! (Don't forget to check your spam folder)
                        </Alert>
                    )}
                </form>
            </div>
        </>
    )
};

export default ContactForm;
