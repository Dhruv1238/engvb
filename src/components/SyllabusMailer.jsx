import { Alert, Button, Input, Textarea, Typography, Spinner, Dialog, DialogHeader, Card, CardHeader } from '@material-tailwind/react';
import React, { useState } from 'react';


const SyllabusMailer = ({courses, onClose}) => {
    const [open, setOpen] = useState(true);
    const [formState, setFormState] = useState({});
    const [emailSent, setEmailSent] = useState(false);
    const [errors, setErrors] = useState({});
    const [spin, setSpin] = useState(false);

    const course = courses;

    console.log(course);

    // const handleOpen = () => {
    //     return setOpen(!open);
    // };

    const handleClose = () => {
        setOpen(!open);
        // Call the onClose callback to inform the parent component about the close event
        if (onClose) {
          onClose();
        }
      };

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

        // if (!formState.course) {
        //     errors.course = "Please enter the course you are interested in.";
        // }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const sendEmail = async () => {
        if (!validateForm()) {
            return;
        }
        setSpin(true);

        const pdfFile = `${course}.pdf`;
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
            Subject: `Enquiry from ENGVB Learning Website for ${course}`,
            Body: `Name: ${formState.name}  Email: ${formState.email}

            requested the syllabus for Course: ${course} 
            
            \nAdditional Query: ${formState.message}`,
        }

        const configClient = {
            SecureToken: "cd0bcde3-6ca4-4f06-83bb-7ee9d9e14ab2",
            To: formState.email,
            From: "info@engvblearning.com",
            Subject: "Thank you for contacting ENGVB-Learning!",
            Body: `Hi ${formState.name},
            
            \n\nPFA the syllabus for ${course}.
            
            \n\nRegards,
            \nTeam ENGVB Learning`,
            Attachments: [
                {
                    name: `${course}.pdf`,
                    data: pdfBase64,
                }
            ],
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
            handleClose();
        }

        console.log("Email 1 sent:", email1);
        console.log("Email 2 sent:", email2);
    };

    return (
        <>
            <Dialog size="sm" open={open} handler={handleClose} className=' dialog-card'>
                <Card className="dialog-card p-5" >
                    <CardHeader
                        variant="gradient"
                        className=" dialog-card mb-4 grid h-20 place-items-center text-center"
                    >
                        <Typography color="white" className='text-xl md:text-3xl font-bold'>
                            Syllabus Will Be mailed to you
                        </Typography>
                    </CardHeader>
                    <form
                        className="flex flex-col gap-3 justify-center text-white"
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
                        <Typography color="white" variant="h6" className='flex items-center'><div className='text-white m-1'>Course :</div><div className='text-gradient m-1'>{course}</div></Typography>
                        <Textarea name="message" label="Anything Else" className="text-white" value={formState.message} />
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
                </Card>
            </Dialog>
        </>
    )
};

export default SyllabusMailer;
