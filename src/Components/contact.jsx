import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@mui/material";

function Contact() {
    //const [show, setShow] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_76rkata', 'template_k45twpd', form.current, '2BYNTyQuI7AkqPAQf')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            },
                (error) => {
                    console.log(error.text);
                });
    };

    return (
        <>


            <div className="my-10">

                <div className="">

                    <form ref={form} onSubmit={sendEmail} className="">


                        <div className="md:flex items-center">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <input tabIndex={0} type="text" name="user_name" className="text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="NAME*" />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <input tabIndex={0} type="email" name="user_email" className="text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="EMAIL*" />
                            </div>
                        </div>

                        <div className="md:flex items-center mt-5">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-400"></label>
                                <input tabIndex={0} type="date" name="event_date" className="text-base leading-none
                             text-gray-400 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="EVENT DATE*" />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <input tabIndex={0} type="number" name="guest_count" className="text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="GUEST COUNT*" />
                            </div>
                        </div>

                        <div className="md:flex items-center mt-5">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <input tabIndex={0} type="number" name="budget" className="text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="BUDGET*" />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <input tabIndex={0} type="tel" name="phone_number" className="text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="PHONE NUMBER*" />
                            </div>
                        </div>
                        {/* <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
                            <input tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                            <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div> */}
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <textarea tabIndex={0} role="textbox" type="text" name="message" className="h-36 text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400 resize-none" placeholder="TELL US ABOUT YOUR EVENT PLEASE*" />
                                {/* <input type="submit" value="Send" /> */}
                            </div>
                        </div>
                        {/* <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p> */}
                        <div className="flex items-center justify-center w-full mt-7">

                            <button className="text-lg font-thin px-7 py-2 rounded-full bg-card-foreground tracking-tighter bg-blue-900 text-white" type="submit" value="Send" >SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact;