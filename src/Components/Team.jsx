
import Jayanta from "../assets/jayanta.jpg";
import chayan from "../assets/chayan.jpg";
import babor from "../assets/babor.jpg";
import shila from "../assets/shila.jpg";
import moynal from "../assets/moynal.jpg";

const Team = () => {
    return (
        <div>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="uppercase text-blue-500"> <span className="text-blue-800">Meet the </span>brains</h2>
                        <p className=" text-center pt-5  flex-wrap text-wrap px-2 text-xl max-w-screen-xl mx-auto">Talent wins games, but teamwork and intelligence win championships.</p>
                    </div>

                    <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-6 md:gap-x-0">
                        <div>
                            <img className="object-cover object-top mx-auto rounded-full w-full
                 md:h-[135px] h-[172px] " src={Jayanta} alt="" />
                            <p className="mt-8 text-lg font-semibold leading-tight text-black">Jayanta Karmaker</p>
                            <p className="mt-1 text-base leading-tight text-gray-600">Chairman</p>
                        </div>

                        <div className="hidden lg:block"></div>

                        <div>
                            <img className="object-cover object-top mx-auto rounded-full w-full
                  md:h-[135px] h-[172px] " src={babor} alt="" />
                            <p className="mt-8 text-lg font-semibold leading-tight text-black">Zahir Uddin Md. Babor</p>
                            <p className="mt-1 text-base leading-tight text-gray-600">Managing Director</p>
                        </div>


                        <div className="hidden lg:block"></div>
                        <div>
                            <img className="object-cover object-top mx-auto rounded-full w-full
                  md:h-[135px] h-[172px] " src={shila} alt="" />
                            <p className="mt-8 text-lg font-semibold leading-tight text-black">Shila Debi</p>
                            <p className="mt-1 text-base leading-tight text-gray-600">CEO</p>
                        </div>


                        <div className="hidden lg:block"></div>
                        <div>
                            <img className="object-cover object-top mx-auto rounded-full w-full
                 md:h-[135px] h-[172px] " src={chayan} alt="" />
                            <p className="mt-8 text-lg font-semibold leading-tight text-black">Chayan Debnath</p>
                            <p className="mt-1 text-base leading-tight text-gray-600">Cheif Executive Officer</p>
                        </div>

                        <div className="hidden lg:block"></div>
                        <div>
                            <img className="object-cover object-top mx-auto rounded-full w-full
                  md:h-[135px] h-[172px] " src={moynal} alt="" />
                            <p className="mt-8 text-lg font-semibold leading-tight text-black">Moynal Hossain Saeed</p>
                            <p className="mt-1 text-base leading-tight text-gray-600">Executive Director</p>
                        </div>

                        {/* <div className="hidden lg:block"></div>

            <div>
                <img className="object-cover mx-auto rounded-full w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-7.jpg" alt="" />
                <p className="mt-8 text-lg font-semibold leading-tight text-black">Dianne Russell</p>
                <p className="mt-1 text-base leading-tight text-gray-600">Front-end Developer</p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
                <img className="object-cover mx-auto rounded-full w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-8.jpg" alt="" />
                <p className="mt-8 text-lg font-semibold leading-tight text-black">Kristin Watson</p>
                <p className="mt-1 text-base leading-tight text-gray-600">H.R</p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
                <img className="object-cover mx-auto rounded-full w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-9.jpg" alt="" />
                <p className="mt-8 text-lg font-semibold leading-tight text-black">Eleanor Pena</p>
                <p className="mt-1 text-base leading-tight text-gray-600">UI Designer</p>
            </div> */}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Team;
