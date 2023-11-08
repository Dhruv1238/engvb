import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';

const ContactForm = () => {
    const [formState, setFormState] = useState({});

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const sendEmail = async () => {
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
            Body: JSON.stringify(formState),
        }

        const configClient = {
            SecureToken: "cd0bcde3-6ca4-4f06-83bb-7ee9d9e14ab2",
            To: formState.email,
            From: "info@engvblearning.com",
            Subject: "Thank you for contacting ENGVB-Learning!",
            Body: `Hi ${formState.name},\n\nThank you for contacting us. We will get back to you as soon as possible.\n\nRegards,\nTeam ENGVB Learning`,
            Attachments: [
                {
                    name: "MEP.pdf",
                    data: pdfBase64,
                }
            ],
        }

        const [email1, email2] = await Promise.all([
            window.Email.send(config),
            window.Email.send(configClient),
        ]);

        console.log("Email 1 sent:", email1);
        console.log("Email 2 sent:", email2);
    };

    console.log(JSON.stringify(formState));
    console.log(window.Email);

    return (
        <>
            <div className=' grid grid-cols-1 md:grid-cols-2 items-center md:px-20 pt-0 p-9 gap-14'>
                <Typography className='text-3xl sm:text-5xl lg:text-5xl text-gradient font-bold text-center'>Contact Us</Typography>
                <form className='flex flex-col gap-3 justify-center items-center text-white' onChange={changeHandler}>
                    <Input type="text" name="name" label='Your Name' className='text-white' />
                    <Input type="email" name="email" label='Your Email' className='text-white' />
                    <Input type="text" name="course" label='Course Interested In?' className='text-white' />
                    <Textarea name="message" label='Anything Else' className='text-white' />
                    {/* <input type="submit" value="Submit" /> */}
                    <Button color='white' variant='outlined' onClick={sendEmail} fullWidth > Submit </Button>
                </form>
            </div>
        </>
    )
};

export default ContactForm;
