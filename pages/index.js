import React from "react";
import Image from "next/image";
import Head from "next/head";
import LocationImage from "../public/location.png";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Event Page</title>
        <meta name="description" content="Event details page" />
      </Head>
      <div className="relative w-screen h-300 sm:hidden">
        <Image src={"/headimage375.png"} alt="head image" layout="fill" />
      </div>

      <div className="relative hidden sm:block w-screen h-80 lg:hidden">
        <Image src={"/headimage640.png"} alt="head image" layout="fill" />
      </div>

      <div className="relative hidden lg:block w-screen h-360 xl:hidden">
        <Image src={"/headimage1024.png"} alt="head image" layout="fill" />
      </div>

      <div className="relative hidden xl:block w-screen h-400 2xl:hidden">
        <Image src={"/headimage1280.png"} alt="head image" layout="fill" />
      </div>

      <div className="relative hidden 2xl:block w-screen h-400 3xl:hidden">
        <Image src={"/headimage1536.png"} alt="head image" layout="fill" />
      </div>

      <div className="relative hidden 3xl:block w-screen h-480">
        <Image src={"/headimage1920.png"} alt="head image" layout="fill" />
      </div>

      <div className="bg-background p-6 sm:px-[6.3rem] lg:pt-6 lg:pb-20 lg:px-28 xl:px-40 2xl:px-52 3xl:px-[390px] 3xl:pb-[160px]">
        <h1 className="text-2xl text-white pb-2 font-bold lg:text-[32px]">
          Event name
        </h1>
        <span className="text-sm text-grey font-normal sm:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quam
          eget nulla lacus, volutpat integer lorem. Sociis suspendisse mi purus
          sit erat dictum dignissim
        </span>

        {/* icons section - event */}
        <div className="pt-5">
          <div className="flex justify-between">
            <div>
              <Image src={"/pinIcon.png"} width="16" height="16" />
              <span className="align-top text-sm text-white pl-2">
                Lorem Ipsum
              </span>
            </div>
            <div>
              <Image src={"/calendar.png"} width="16" height="16" />
              <span className="align-top text-sm text-white pl-2">
                10th May
              </span>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <div>
              <Image src={"/mic.png"} width="16" height="16" />
              <span className="align-top text-sm text-white pl-2">
                Dance and arts
              </span>
            </div>
            <div>
              <Image src={"/clock.png"} width="16" height="16" />
              <span className="align-top text-sm text-white pl-2">
                07:00 PM
              </span>
            </div>
          </div>
        </div>
        {/* icons section - event */}

        <div className="flex flex-col lg:flex-row justify-between py-4 sm:py-8 lg:-mb-16">
          <div className="relative w-auto h-[188px] sm:w-auto sm:h-[240px] lg:w-[372px] lg:h-[192px] xl:w-[450px] xl:h-[240px] 2xl:w-[528px] 2xl:h-[240px] mb-4 sm:mb-8">
            <Image src={"/location.png"} alt="location image" layout="fill" />
          </div>

          <div className="hidden lg:block lg:mt-1">
            <hr className="border-1 border-grey pb-6" />
            <div className="flex justify-between pb-4">
              <div className="flex mr-28 xl:mr-52 2xl:mr-72">
                <div className="pr-2">
                  <Image src={"/profilepic.png"} width="48" height="48" />
                </div>
                <div>
                  <h2 className="text-base text-white font-bold pt-1">
                    Event Organiser name
                  </h2>
                  <span className="align-top text-xs text-grey font-semibold">
                    12 events
                  </span>
                </div>
              </div>
              <div className="">
                <Image src={"/globeicon.png"} width="36" height="36" />
              </div>
            </div>
            <hr className="border-1 border-grey pb-1" />
            <div className="flex justify-between sm:pt-7">
              <div>
                <span className="align-top text-sm text-grey font-medium">
                  Ticket starts at
                </span>
                <div className="flex">
                  <h2 className="text-lgx text-white font-bold pt-1">15,00</h2>
                  <div className="mt-3.5 pl-2">
                    <span className="text-xs text-white font-semibold">
                      EUR
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button className="text-black bg-white font-bold w-[168px] lg:w-[200px] xl:w-[240px] sm:w-60 h-12 rounded-1xl">
                  Buy a Ticket
                </button>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="py-2">
              <hr className="bg-grey-500 p-3" />
              <div className="flex justify-between pb-4">
                <div className="flex">
                  <div className="pr-2">
                    <Image src={"/profilepic.png"} width="48" height="48" />
                  </div>
                  <div>
                    <h2 className="text-base text-white font-bold pt-1">
                      Event Organiser name
                    </h2>
                    <span className="align-top text-xs text-grey font-semibold">
                      12 events
                    </span>
                  </div>
                </div>
                <div className="">
                  <Image src={"/globeicon.png"} width="36" height="36" />
                </div>
              </div>
              <hr className="bg-grey-500" />
            </div>

            {/* event image section - 375px+ screen */}
            <div className="relative py-3 sm:mt-4 xl:mt-8 2xl:mt-24">
              <h2 className="text-base text-white font-bold pt-1 pb-3 lg:pt-6">
                Event Images
              </h2>
              <div className="hidden sm:block sm:grid sm:place-items-center sm:absolute sm:border-2 sm:border-white-400 sm:py-1.5 sm:px-2 sm:mt-[10%] sm:rounded-lg lg:mt-16 xl:mt-20 2xl:mt-24 sm:-ml-10 ">
                <Image src={"/leftArrow.png"} width="6" height="12" />
              </div>

              <div className=" flex gap-x-2.5 overflow-hidden sm:rounded-lg">
                <div className="min-w-max">
                  <Image src={"/eventImage1.png"} width="120" height="120" />
                </div>

                <div className="min-w-max">
                  <Image src={"/eventImage2.png"} width="120" height="120" />
                </div>
                <div className="min-w-max">
                  <Image src={"/eventImage3.png"} width="120" height="120" />
                </div>
                <div className="min-w-max">
                  <Image src={"/eventImage4.png"} width="120" height="120" />
                </div>
                <div className="min-w-max">
                  <Image src={"/eventImage5.png"} width="120" height="120" />
                </div>
              </div>

              <div className="hidden sm:block sm:grid sm:place-items-center sm:absolute sm:border-2 sm:border-white-400 sm:py-1.5 sm:px-2 sm:-mt-[78px] sm:mr-1 xl:-mt-24 2xl:-mt-28 -right-10 sm:rounded-lg">
                <Image src={"/rightArrow.png"} width="6" height="12" />
              </div>
            </div>
            {/* event images section - 375px+ screen */}

            {/* ticket section */}
            <div className="flex justify-between sm:pt-7">
              <div>
                <span className="align-top text-sm text-grey font-medium">
                  Ticket starts at
                </span>
                <div className="flex">
                  <h2 className="text-lgx text-white font-bold pt-1">15,00</h2>
                  <div className="mt-3.5 pl-2">
                    <span className="text-xs text-white font-semibold">
                      EUR
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button className="text-black text-base bg-white font-bold w-[168px] sm:w-60 h-12 rounded-1xl">
                  Buy a Ticket
                </button>
              </div>
            </div>
            {/* ticket section */}
          </div>
        </div>

        {/* event image section 1024px+ screens */}
        <div className="hidden lg:block relative py-0 sm:mt-4 xl:mt-8 2xl:mt-12 lg:mb-20">
          <h2 className="text-base xl:text-xl text-white font-bold pt-1 pb-3 lg:pt-6">
            Event Images
          </h2>
          <div className="hidden sm:block sm:grid sm:place-items-center sm:absolute sm:border-2 sm:border-white-400 sm:py-1.5 sm:px-2 sm:mt-[10%] sm:rounded-lg lg:mt-16 xl:mt-20 2xl:mt-24 sm:-ml-10 ">
            <Image src={"/leftArrow.png"} width="6" height="12" />
          </div>

          {/* 1024px screen event images */}
          <div className=" flex lg:gap-x-6 overflow-hidden sm:rounded-lg xl:hidden">
            <div className="min-w-max">
              <Image src={"/eventImage1.png"} width="140" height="140" />
            </div>

            <div className="min-w-max">
              <Image src={"/eventImage2.png"} width="140" height="140" />
            </div>
            <div className="min-w-max">
              <Image src={"/eventImage3.png"} width="140" height="140" />
            </div>
            <div className="min-w-max">
              <Image src={"/eventImage4.png"} width="140" height="140" />
            </div>
            <div className="min-w-max">
              <Image src={"/eventImage5.png"} width="140" height="140" />
            </div>
          </div>

          {/* 1280px screen event images */}
          <div className="hidden xl:flex flex lg:gap-x-8 overflow-hidden sm:rounded-lg 2xl:hidden">
            <div className="min-w-max">
              <Image src={"/eventImage1.png"} width="180" height="180" />
            </div>

            <div className="min-w-max">
              <Image src={"/eventImage2.png"} width="180" height="180" />
            </div>
            <div className="min-w-max">
              <Image src={"/eventImage3.png"} width="180" height="180" />
            </div>
            <div className="min-w-max">
              <Image src={"/eventImage4.png"} width="180" height="180" />
            </div>
            <div className="min-w-max">
              <Image src={"/eventImage5.png"} width="180" height="180" />
            </div>
          </div>

          {/* 1536+px screen event images */}
          <div className="hidden 2xl:flex flex lg:gap-x-8 overflow-hidden sm:rounded-lg">
            <div className="min-w-max">
              <Image src={"/eventImage1.png"} width="200" height="200" />
            </div>

            <div className="min-w-max">
              <Image src={"/eventImage2.png"} width="200" height="200" />
            </div>
            <div className="min-w-max">
              <Image src={"/eventImage3.png"} width="200" height="200" />
            </div>
            <div className="min-w-max">
              <Image src={"/eventImage4.png"} width="200" height="200" />
            </div>
            <div className="min-w-max">
              <Image src={"/eventImage5.png"} width="200" height="200" />
            </div>
          </div>

          <div className="hidden sm:block sm:grid sm:place-items-center sm:absolute sm:border-2 sm:border-white-400 sm:py-1.5 sm:px-2 sm:-mt-[78px] sm:mr-1 xl:-mt-24 2xl:-mt-28 -right-10 sm:rounded-lg">
            <Image src={"/rightArrow.png"} width="6" height="12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
