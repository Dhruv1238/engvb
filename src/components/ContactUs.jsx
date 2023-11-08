import { Button, Input, Textarea } from '@material-tailwind/react';
import React, { useState } from 'react';

const ContactForm = () => {
    const [formState, setFormState] = useState({});

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const config = {
        SecureToken: "2748f8f9-f38a-49fb-afc2-7bb986e30eab",
        To: "dhruv.sharma@somaiya.edu",
        From: "dhruv4075@gmail.com",
        Subject: "Enquiry From ENGVB Learning Website",
        Body: formState,
    }

    const sendEmail = async () => {
        // console.log(window.Email);
        console.log(config);
        await window.Email.send(config).then(console.log(window.Email.send(config)));
    };

    // console.log(formState.subject);
    console.log(formState);
    console.log(window.Email);

    return (
        <>
            <form className='flex flex-col gap-3 justify-center items-center' onChange={changeHandler}>
                <Input type="text" name="systum" label='subject' />
                <Textarea name="message" label='message' />
                {/* <input type="submit" value="Submit" /> */}
                <Button color='blue' onClick={sendEmail}> Submit </Button>
            </form>
        </>
    )
};

export default ContactForm;
