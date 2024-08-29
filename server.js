// Import necessary modules
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

// Create an Express application
const app = express();
const router = express.Router();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use("/", router);

// Define the port and start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

// Log environment variables
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// Create a Nodemailer transport instance
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "hani.mahdi623@gmail.com", // Use environment variable
        pass: "yprg lkxa mzss rhpx" // Use environment variable
    }
});

// Verify the transport setup
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
});

// Define the POST route for /contact
router.post("/contact", (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;
    const name = `${firstName} ${lastName}`;
    
    const mail = {
        from: name,
        to: "hani.mahdi623@gmail.com",
        subject: "Contact Form Submission - Techfluence",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json({ code: 200, status: "Message Sent" });
        }
    });
});
