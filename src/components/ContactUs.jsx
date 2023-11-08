import { Button, Input, Textarea } from '@material-tailwind/react';
import React, { useState } from 'react';

const ContactForm = () => {
    const [formState, setFormState] = useState({});

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const config = {
        SecureToken: "2748f8f9-f38a-49fb-afc2-7bb986e30eab",
        To: "dhurv@weeshare.co",
        From: "dhruv.sharma@somaiya.edu",
        Subject: formState.subject,
        Body: formState.message,
    }

    const sendEmail = async () => {
        // console.log(window.Email);
        console.log(config);
        window.Email.send(config)
        console.log(window.Email.send(config));
    };

    console.log(formState.subject);
    console.log(formState.message);
    console.log(window.Email);

    return (
        <>
            <form className='flex flex-col gap-3 justify-center items-center' onChange={changeHandler}>
                <Input type="text" name="subject" label='subject' />
                <Textarea name="message" label='message' />
                {/* <input type="submit" value="Submit" /> */}
                <Button color='blue' onClick={sendEmail}> Submit </Button>
            </form>
        </>
    )
};

export default ContactForm;
