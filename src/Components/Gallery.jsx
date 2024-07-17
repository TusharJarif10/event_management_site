import landscape1 from "../assets/landscape1.jpg"
import landscape2 from "../assets/landscape2.jpg"
import landscape3 from "../assets/landscape3.jpg"
import landscape4 from "../assets/landscape4.jpg"
import landscape5 from "../assets/landscape5.jpg"


import mainphoto1 from "../assets/main photo1.jpg"
import mainphoto2 from "../assets/main photo2.jpg"
import mainphoto3 from "../assets/main photo3.jpg"
import mainphoto4 from "../assets/main photo4.jpg"
import mainphoto5 from "../assets/main photo5.jpg"


import Portrait1 from "../assets/Portrait1.jpg"
import Portrait2 from "../assets/portrat2.jpg"
import Portrait3 from "../assets/portrait3.jpg"
import Portrait4 from "../assets/portrait4.jpg"
import Portrait5 from "../assets/Portrait5.jpg"


import smallone1 from "../assets/small one1.jpg"
import smallone2 from "../assets/small one2.jpg"
import smallone3 from "../assets/small one3.jpg"
import smallone4 from "../assets/small one4.jpg"
import smallone5 from "../assets/small one5.jpg"


import smalltwo1 from "../assets/small two1.jpg"
import smalltwo2 from "../assets/small two2.jpg"
import smalltwo3 from "../assets/small two3.jpg"
import smalltwo4 from "../assets/small two4.jpg"
import smalltwo5 from "../assets/small two5.jpg"






export default function Gallery() {
	return (
		<>

			<section className="">
				<div className="py-4 mx-auto max-w-screen-2xl sm:py-4">

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">

						<div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
								<img src= {mainphoto1} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
								
							</a>
						</div>
						<div className="col-span-2 sm:col-span-1 md:col-span-2 ">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
								<img src={landscape1} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
								
							</a>
							<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
								<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
									<img src= {smallone1} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									
								</a>
								<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
									<img src={smalltwo1} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									
								</a>
							</div>
						</div>
						<div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
								<img src={Portrait1} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
								
							</a>
						</div>
					</div>
					<div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">

						<div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
								<img src={Portrait2} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
								
							</a>
						</div>
						<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
								<img src={mainphoto2} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
								
							</a>
						</div>
						<div className="col-span-2 sm:col-span-1 md:col-span-2 ">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
								<img src={landscape2} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
								
							</a>
							<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
								<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
									<img src={smallone2} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									
								</a>
								<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
									<img src={smalltwo2} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									
								</a>
							</div>
						</div>

					</div>
					 <div className=" py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
						<div className="col-span-2 sm:col-span-1 md:col-span-2 ">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
								<img src={landscape3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
												</a>
							<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
								<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
									<img src={smallone3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									
								</a>
								<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
									<img src={smalltwo3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
																</a>
							</div>
						</div>

						<div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
								<img src={Portrait3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
															</a>
						</div>

						<div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
								<img src={mainphoto3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
														</a>
						</div>

					</div> 


					<div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">

						<div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
								<img src={Portrait4} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
															</a>
						</div>
						<div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
								<img src={mainphoto4} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
														</a>
						</div>
						<div className="col-span-2 sm:col-span-1 md:col-span-2 ">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
								<img src={landscape4} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
												</a>
							<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
								<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
									<img src={smallone4} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									
								</a>
								<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
									<img src={smalltwo4} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
																</a>
							</div>
						</div>

					</div> 


					 <div className=" py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
						<div className="col-span-2 sm:col-span-1 md:col-span-2 ">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
								<img src={landscape5} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
												</a>
							<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
								<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
									<img src={smallone5} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									
								</a>
								<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
									<img src={smalltwo5} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
																</a>
							</div>
						</div>

						<div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
								<img src={landscape5} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
															</a>
						</div>

						<div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
							<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
								<img src={mainphoto5} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
														</a>
						</div>

					</div> 
				</div>
			</section>

		</>
	)
}
