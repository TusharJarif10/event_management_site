
export default function Location() {
  return (
    <>
    <section className="">
    <div className=" max-w-7xl mx-auto py-16 md:px-0 px-4 md:py-20  ">
        <div className="text-center bg-gradient-to-b from-slate-300 to-blue-200 py-5 max-w-screen-xl mx-auto ">
            <h2>
                <span className="text-blue-800 pr-3">
                VISIT OUR
                </span>
                <span className="text-blue-500">
                LOCATION
                </span>
                 </h2>
                 <p className="text-xl text-wrap flex-wrap px-2 mx-2 max-w-screen-xl text-center pt-4">
                    You are always welcome to visit our office.
                 </p>
          
        </div>
        <div className="mt-5 md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">

              

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.3765578503343!2d90.37211796961314!3d23.836151198663288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1005c48efb1%3A0xd6688f471baecb3a!2sMirpur%20DOHS!5e0!3m2!1sen!2sbd!4v1719571642110!5m2!1sen!2sbd"
                        width="600"
              height="450"
              
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"></iframe>
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-bold text-blue-800 ">Our Address</h3>
                            <p className="text-lg text-blue-800 text-justify flex-wrap text-wrap px-2 mx-2">460/A Road 6, Avenue 7, Mirpur DOHS, Dhaka, Bangladesh</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4 ">
                            <h3 className="text-lg font-bold text-blue-800">Hours</h3>
                             <p className="text-lg text-blue-800 text-justify flex-wrap text-wrap px-2 mx-2"> Always Open (24/7)</p>
                        </div>

                        <div className="border-t border-gray-200 px-6 py-4 ">
                            <h3 className="text-lg font-bold text-blue-800">Contact</h3>
                            <p className="text-lg text-blue-800 text-justify flex-wrap text-wrap px-2 mx-2"> +880 1304177789</p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</>
  )
}