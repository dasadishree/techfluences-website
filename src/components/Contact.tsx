import { useState } from "react";
import { Col, Row } from "react-bootstrap";

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '', 
        email: '',
        phone: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState<{ message?: string; success?: boolean }>({});

    const onFormUpdate = (category: any, value: any) =>{
        setFormDetails(
            {
                ...formDetails,
                [category]: value
            }
        )
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText('Sending...');
        
        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8", // Note the lowercase 'application'
                },
                body: JSON.stringify(formDetails),
            });
            
            // Await the JSON parsing of the response
            const result = await response.json();
            
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            
            // Check the result
            if (result.code === 200) {
                setStatus({ success: true, message: "Message Sent" });
            } else {
                setStatus({ success: false, message: "Error, Please try again" });
            }
        } catch (error) {
            console.error("Error:", error);
            setButtonText("Send");
            setStatus({ success: false, message: "An error occurred" });
        }
    };
    
    return (
        <section>
            <Row className="contact align-items-center">
            <Col xs={12} className="formUp">
                <h2>Get In Touch</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="flex">
                        <label>
                            <input
                                required
                                type="text"
                                className="input"
                                value={formDetails.firstName}
                                placeholder=""
                                onChange={(e) => onFormUpdate('firstName', e.target.value)}
                            />
                            <span>First Name</span>
                        </label>

                        <label>
                            <input
                                required
                                type="text"
                                className="input"
                                value={formDetails.lastName}
                                placeholder=""
                                onChange={(e) => onFormUpdate('lastName', e.target.value)}
                            />
                            <span>Last Name</span>
                        </label>
                    </div>
                    
                    <label>
                        <input
                            required
                            type="email"
                            className="input"
                            value={formDetails.email}
                            placeholder=""
                            onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                        <span>Email</span>
                    </label>

                    <label>
                        <input
                            required
                            type="tel"
                            className="input"
                            value={formDetails.phone}
                            placeholder=""
                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                        <span>Contact Number</span>
                    </label>

                    <label>
                        <textarea
                            required
                            className="input01"
                            value={formDetails.message}
                            placeholder=""
                            onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        <span>Message</span>
                    </label>
                    /* From Uiverse.io by adamgiebl */ 
                    <button className="send">
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                                </svg>
                                </div>
                                </div>
                                <span>{buttonText}</span>
                                </button>


                    {status.message && (
                        <p className={status.success === false ? "danger" : "success"}>
                            {status.message}
                        </p>
                    )}
                </form>
            </Col>
        </Row>
        </section>
    );

}

export default Contact;
