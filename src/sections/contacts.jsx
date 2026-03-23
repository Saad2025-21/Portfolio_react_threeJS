import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/alert";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("");
    const [alertMessage, setAlertMessage] = useState("");




    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            console.log("Form submitted", formData)

            await emailjs.send(
                "service_hbirq3b",
                "template_php2h62", {
                form_name: formData.name,
                to_name: "Saad",
                form_email: formData.email,
                to_email: "oworks2006@gmail.com",
                message: formData.message,
            }, "nl7cdFEczD9VgJPlB"
            )

            setFormData({
                name: "",
                email: "",
                message: "",
            })
            setIsLoading(false)
            showAlertMessage("success","Email sent successfully")
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            showAlertMessage("failed","An error occured")
        }


    };

    return (
        <section className="relative flex items-center c-space section-spacing  " id="contact">

            {showAlert && <Alert type={alertType} text={alertMessage} />}
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto  bg-[linear-gradient(to_bottom,rgba(18,23,37,0.9),rgba(11,13,18,0.9))]
            border border-(--border-soft) rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Let's Talk</h2>
                    <p className="font-normal text-[#a9adbd]">
                        Whether you're looking to build a new website, improve your existing
                        platform, or bring a unique project to life, I'm here to help
                    </p>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="feild-label">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="John Doe"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="feild-label">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="field-input field-input-focus"
                            placeholder="JohnDoe@email.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            rows="4"
                            className="field-input field-input-focus"
                            placeholder="Share your thoughts..."
                            autoComplete="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-1 py-3 text-lg text-center cursor-pointer  font-extralight bg-[linear-gradient(135deg,#E7D7B1,#CBB98A)] text-primary rounded-xl  shadow-[0_8px_30px_rgba(231,215,177,0.35)] hover:-translate-y-1 duration-200"
                    >
                        {!isLoading ? "Send" : "Sending..."}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;