import { useRef } from "react";
import axios from 'axios';
import { useState } from "react";


function Contact() {
    //const [show, setShow] = useState(false);

    const form = useRef();

    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [guest, setGuest] = useState('');
    const [budget, setBudget] = useState();
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        //your emailjs information
        const serviceId = 'service_117ximo';
        const templateId = 'template_67dwvav';
        const publicKey = 'yOSb0j9NhfIDcblIn';

        //create a object that contains dynamic template params
        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                user_name: username,
                phone_number: mobile,
                user_email: email,
                guest_count: guest,
                budget: budget,
                event_date: date,
                message: details
               
            }
        };

        try {
            const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            console.log(res.data);
            setUsername('');
            setMobile('');
            setEmail('');
            setGuest('');
            setBudget('');
            setDate('');
            setDetails('');
           
            alert('order placed successfully');
        } catch (error) {
            console.error(error);
            alert('something went wrong');
        }
    }

    return (
        <>

            <div className="my-10">

                <div className="">

                    <form ref={form} onSubmit={handleSubmit} className="">


                        <div className="md:flex items-center">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <input tabIndex={0} type="text" name="user_name" value={username} onChange={(e) => setUsername(e.target.value)} required className="text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="NAME*" />
                            </div>

                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <input tabIndex={0} type="tel" name="phone_number" value={mobile} onChange={(e) => setMobile(e.target.value)} required className="text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="PHONE NUMBER*" />
                            </div>

                        </div>

                        <div className="md:flex items-center mt-5">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <input tabIndex={0} type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required className="text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="EMAIL*" />
                            </div>

                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <input tabIndex={0} type="number" name="guest_count" value={guest} onChange={(e) => setGuest(e.target.value)} required  className="text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="GUEST COUNT*" />
                            </div>
                        </div>

                        <div className="md:flex items-center mt-5">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800"></label>
                                <input tabIndex={0} type="number" name="budget" value={budget} onChange={(e) => setBudget(e.target.value)} required  className="text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="BUDGET*" />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-sm font-extralight leading-none text-gray-800"></label>
                                <input tabIndex={0} type="date" name="event_date" value={date} onChange={(e) => setDate(e.target.value)} required  className="text-base leading-none
                             text-gray-400 p-3 focus:oultine-none focus:border-indigo-700 mt-1
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400" placeholder="EVENT DATE*" />
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
                                <textarea tabIndex={0} role="textbox" type="text" name="message" value={details} 
                                onChange={(e) => setDetails(e.target.value)} required  
                                className="h-36 text-base leading-none
                             text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4
                              bg-blue-50 border rounded border-gray-200 placeholder-gray-400 resize-none" 
                              placeholder="TELL US ABOUT YOUR EVENT PLEASE*" />
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