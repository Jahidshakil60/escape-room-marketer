 "use client"
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { RiErrorWarningFill } from "react-icons/ri";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const { ref: myRef, inView: myElementIsVisible } = useInView();

	return (
		<>
			<Head>
				<title>Escaperoom Marketer</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className=" mb-10">
				<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-8 bg-[#FAFAFA]"></div>
				<div className="hero_cover g-page_structure h-[600px] md:h-[550px] lg:h-[670px] w-full bg-[#FAFAFA]  md:pt-12 relative">
					<div>
						<img
							src="/heroimg_left.avif"
							className="absolute left-0 bottom-0 lg:h-[400px] md:h-[280px] lg:w-[400px] md:w-[300px] xl:h-[400px] xl:w-[550px] 2xl:w-[550px] 2xl:h-[400px]"
							alt=""
						/>
					</div>
					<div>
						<img
							src="/heroimg_right.avif"
							className="absolute right-0 bottom-0 lg:h-[400px] md:h-[280px] lg:w-[400px] md:w-[300px] xl:h-[400px] xl:w-[550px] 2xl:w-[550px]"
							alt=""
						/>
					</div>
					<div className="text-container  m-auto">
						<h1 className=" text-center md:px-16 pt-4 md:pt-10 text-2xl md:text-3xl xl:text-5xl font-extrabold ">
							The Performance Marketing Agency That Moves Fast & Breaks Things
						</h1>
						<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto pt-4">
							Like sales records, plateaus, and your competitors hearts. The only things we don`t break? Our promises and the bank.
						</p>
						<div className="flex justify-center mt-6">
							<button className="bg-[#ff5056] py-3 px-5 text-white lg:text-lg 2xl:text-2xl rounded font-semibold">
								Get Your Free Marketing Plan
							</button>
						</div>
						<p className="md:text-sm 2xl:text-xl font-medium text-center md:w-[30%] m-auto pt-4 pb-6 md:py-6">
							Get 17+ new marketing ideas that are better than what you have
						</p>
					</div>
				</div>
				<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-6 rotate-180"></div>
				<div className="multiple_agency g-page_structure">
					<div className="m-auto">
						<h1 className="text-center md:px-16 text-xl md:text-3xl xl:text-5xl font-bold">
							One Agency + Multiple Marketing Channels = More Money In Your Pocket
						</h1>
						<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-4">
							We know you’re in the industry of Professional Services, have around 11-50 employees, and who your competitors are.
						</p>
					</div>
					<div className="section-img flex justify-center">
						<div ref={myRef} className=" md:h-[400px] md:w-[600px] relative">
							<img src="/multiple-marketing.jpg" className="md:h-[400px] md:w-[600px] mt-4 " alt="" />
							<div className="cta-mobileresponsive flex md:flex-none flex-col gap-4">
								<div className={`${myElementIsVisible ? styles.cta : ""}`}>
									<div className="overflow-hidden rounded  shadow pl-3 pr-8 block md:absolute top-6 left-0 md:translate-x-[-80%] bg-white ">
										<div className="flex items-center gap-3">
											<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
											<div className={`${myElementIsVisible ? styles.text_wrapper : ""}`}>
												<h5 className="text-lg font-semibold">Email marketing</h5>
												<p className="text-lg">3 opportunities found</p>
											</div>
										</div>
									</div>
								</div>
								<div className={`${myElementIsVisible ? styles.cta : ""}`}>
									<div className="rounded shadow  pl-3 pr-8 md:absolute top-6 right-0  md:translate-x-[80%] bg-white ">
										<div className="flex items-center gap-3">
											<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
											<div className={`${myElementIsVisible ? styles.text_wrapper : ""}`}>
												<h5 className="text-lg font-semibold">Email marketing</h5>
												<p className="text-lg">3 opportunities found</p>
											</div>
										</div>
									</div>
								</div>
								<div className={`${myElementIsVisible ? styles.cta : ""}`}>
									<div className="rounded shadow  pl-3 pr-8 md:absolute bottom-8 left-0 md:translate-x-[-80%] bg-white ">
										<div className="flex items-center gap-3">
											<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
											<div className={`${myElementIsVisible ? styles.text_wrapper : ""}`}>
												<h5 className="text-lg font-semibold">Email marketing</h5>
												<p className="text-lg">3 opportunities found</p>
											</div>
										</div>
									</div>
								</div>
								<div className={`${myElementIsVisible ? styles.cta : ""}`}>
									<div className="rounded shadow pl-3 pr-8 md:absolute bottom-8 right-0  md:translate-x-[80%] bg-white ">
										<div className="flex items-center gap-3">
											<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
											<div className={`${myElementIsVisible ? styles.text_wrapper : ""}`}>
												<h5 className="text-lg font-semibold">Email marketing</h5>
												<p className="text-lg">3 opportunities found</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<button className="bg-[#ff5056] mt-8 py-3 px-5 text-white lg:text-lg 2xl:text-2xl rounded font-semibold">
							Get Your Free Marketing Plan
						</button>
					</div>
				</div>
				<div className="successfull-stories px-[15px] md:w-[60%] m-auto">
					<h1 className=" mt-20 md:mt-32 text-center text-xl md:text-3xl xl:text-5xl font-bold">
						We Have More Success Stories Than Other Agencies Have Clients
					</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:w-[70%] m-auto py-4">
						We help scrappy startups to massive brands, from straightforward products to ultra-complex services.
					</p>
					<div className=" grid grid-cols-2 px-4 pb-10 md:px-0 md:grid-cols-5 mt-16 gap-x-4 gap-y-6 md:gap-x-12 md:gap-y-8">
						<img src="/export-logo-Airbnb.png" alt="" />
						<img src="/export-logo-Justworks.png" alt="" />
						<img src="/export-logo-Stanford.png" alt="" />
						<img src="/export-logo-Upwork.png" alt="" />
						<img src="/export-logo-Wunderkind.png" alt="" />
						<img src="/export-logo-Upwork.png" alt="" />
						<img src="/export-logo-Airbnb.png" alt="" />
						<img src="/export-logo-Justworks.png" alt="" />
						<img src="/export-logo-Wunderkind.png" alt="" />
						<img src="/export-logo-Upwork.png" alt="" />
						<img src="/export-logo-Stanford.png" alt="" />
						<img src="/export-logo-Wunderkind.png" alt="" />
						<img src="/export-logo-Justworks.png" alt="" />
						<img src="/export-logo-Stanford.png" alt="" />
						<img src="/export-logo-Airbnb.png" alt="" />
					</div>
					<Link href={"/"} className="group  text-lg md:text-2xl list-none text-red-500">
						<p className="font-medium text-center leading-[0px]">
							Check out some of the 617+ client wins we`ve published
							<span class="material-symbols-outlined translate-y-2 pl-2 text-3xl">arrow_right_alt</span>
						</p>
						{/* <HiArrowNarrowRight className="text-3xl font-bold group-hover:translate-x-1 absolute right-0 translate-y-[-90%] translate-x-[-250%] md:static" /> */}
					</Link>
				</div>
				<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center mt-6 md:mt-12 bg-[#FAFAFA]"></div>
				<div className="last-marketing g-page_structure bg-[#FAFAFA]">
					<div className="main-content  m-auto">
						<h1 className="text-center md:px-16 md:pt-14 pt-4 text-xl md:text-3xl xl:text-5xl font-bold">
							We’ll Be The Last Marketing Agency You Ever Work With
						</h1>
						<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-4">
							Work with an agency that works as hard to earn your trust as they do to earn you results.
						</p>
					</div>
					<div className="q-card mt-20 grid gap-x-20 gap-y-12 md:grid-cols-2">
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
							<p className="font-bold text-xl text-center">
								They make you big promises. <br /> We make you big bucks.
							</p>
							<img src="/DollarBills.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
							<p className="font-bold text-xl text-center">
								They make you big promises. <br /> We make you big bucks.
							</p>
							<img src="/Dictionaries.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
							<p className="font-bold text-xl text-center">
								They make you big promises. <br /> We make you big bucks.
							</p>
							<img src="/ChampagneBottles.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
							<p className="font-bold text-xl text-center">
								They make you big promises. <br /> We make you big bucks.
							</p>
							<img src="/LightBulbs.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
							<p className="font-bold text-xl text-center">
								They make you big promises. <br /> We make you big bucks.
							</p>
							<img src="/Folders.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
							<p className="font-bold text-xl text-center">
								They make you big promises. <br /> We make you big bucks.
							</p>
							<img src="/Trophies.svg" alt="" className="mt-6 w-" />
						</div>
					</div>
					<Link href={"/"} className="group flex items-center justify-center gap-4 md:text-2xl list-none text-red-500 mt-12 pb-8">
						<p className="font-medium text-center leading-[0px]">
							All of that and fairer pricing that you will see in your free marketing plan
							<span class="material-symbols-outlined translate-y-2 pl-2 text-3xl font-medium">arrow_right_alt</span>
						</p>
						{/* <HiArrowNarrowRight className="text-3xl font-bold group-hover:translate-x-1 mt-2" /> */}
					</Link>
				</div>
				<div className="break_line image bg-[url('/page_brokefafafa2.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#FAFAFA]   rotate-180"></div>
				<div className="work-together g-page_structure bg-[#FAFAFA] relative">
					<div className="main-content  m-auto">
						<h1 className="text-center md:px-16 md:pt-14 md:text-3xl xl:text-5xl font-bold">
							Choose How We Work Together: From One-Time Audits to Done-For-You-Everything
						</h1>
						<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-4">
							Outsource all your marketing to us or have us help your internal team get better. You choose the style of engagement.
						</p>
					</div>
					<div className="q-card mb-8 mt-10 md:mt-20 grid gap-x-20 gap-y-12 md:grid-cols-2">
						<div className="px-10 pt-10 pb-4 md:col-span-2 rounded bg-white shadow-md  grid md:grid-cols-2 items-center">
							<div className=" text-center ">
								<p className="font-bold text-xl">Ongoing Expert Management</p>
								<p className="text-lg mt-2">
									We’ll do everything, take care of everything,
									<br /> and report directly to you.
								</p>
							</div>
							<img src="/wateringCan.svg" alt="" className="mt-6 " />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
							<p className="font-bold text-xl text-center">
								They make you big promises. <br /> We make you big bucks.
							</p>
							<img src="/MagGlass.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
							<p className="font-bold text-xl text-center">
								They make you big promises. <br /> We make you big bucks.
							</p>
							<img src="/Hardhat.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
							<p className="font-bold text-xl text-center">
								They make you big promises. <br /> We make you big bucks.
							</p>
							<img src="/SpeechBubbles.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
							<p className="font-bold text-xl text-center">
								They make you big promises. <br /> We make you big bucks.
							</p>
							<img src="/Speedometer.svg" alt="" className="mt-6 w-" />
						</div>
					</div>

					<Link href={"/"} className="group  text-lg md:text-2xl list-none text-red-500">
						<p className="font-medium pb-8 text-center leading-[0px] px-4">
							Let us know which partnership you prefer
							<span class="material-symbols-outlined translate-y-2 pl-2 text-3xl">arrow_right_alt</span>
						</p>
						{/* <HiArrowNarrowRight className="text-3xl font-bold group-hover:translate-x-1 absolute right-0 translate-y-[-90%] translate-x-[-250%] md:static" /> */}
					</Link>
					{/* <HiArrowNarrowRight className="text-3xl font-bold group-hover:translate-x-1 mt-2" /> */}
				</div>
				<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center   rotate-180 bg-[#FAFAFA]"></div>
				<div className="custom_marketing_plan g-page_structure">
					<div className="main-content  m-auto">
						<h1 className="text-center md:px-16 md:pt-14 pt-4 text-xl md:text-3xl xl:text-5xl font-bold">
							Your Custom Marketing Plan Shows The Exact Steps We’ll Take To Hit Your Goals
						</h1>
						<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-6">
							Get years of data-driven experimentation, through hundreds of millions of marketing spend, across thousands of companies, absolutely
							free.
						</p>
					</div>
					<div className="flex justify-center my-10">
						<Image src="/proposal-manila-folder.svg" width={400} height={400} />
					</div>
					<Link href={"/"} className="group  text-lg md:text-2xl list-none text-red-500">
						<p className="font-medium pb-8 text-center leading-[0px] px-4 mb-10">
							See what we`d fix, how we`d fix it, and what it`d cost
							<span class="material-symbols-outlined translate-y-2 pl-2 text-3xl">arrow_right_alt</span>
						</p>
					</Link>
				</div>
				<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-6 bg-[#FAFAFA] "></div>
				<div className="dedicated_marketing_team g-page_structure bg-[#FAFAFA] ">
					<div className="main-content  m-auto">
						<h1 className="text-center md:px-16 md:pt-14 pt-4 text-xl md:text-3xl xl:text-5xl font-bold">
							Meet Your Dedicated Marketing Team Before You Start Working With Us
						</h1>
						<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-6">
							Grill us on our approach and make sure you`ve got the right people working with you before you pay us a penny.
						</p>
					</div>
					<div className="flex justify-center my-10">
						<Image src="/TeamInABox.webp" width={400} height={400} className="" />
					</div>
					<Link href={"/"} className="group  text-lg md:text-2xl list-none text-red-500">
						<p className="font-medium pb-8 text-center leading-[0px] px-4 ">
							See what we`d fix, how we`d fix it, and what it`d cost
							<span class="material-symbols-outlined translate-y-2 pl-2 text-3xl">arrow_right_alt</span>
						</p>
					</Link>
				</div>
				<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center  rotate-180 bg-[#FAFAFA] "></div>
				<div className="big_goals g-page_structure relative">
					<div className="main-content  m-auto">
						<h1 className="text-center md:px-16 md:pt-8 md:text-3xl xl:text-5xl font-bold">
							Like Your Big Goals, Your Team Will Be Surprisingly Easy To Reach
						</h1>
						<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-4">
							You tell us how (and how often) you want to communicate. We`ll connect the way you prefer.
						</p>
					</div>
					<div className="q-card mb-8 mt-10 md:mt-20 grid gap-x-20 gap-y-12 md:grid-cols-2">
						<div className="px-10 pt-10 pb-4 md:col-span-2 rounded bg-white shadow-2xl  grid md:grid-cols-2 items-center">
							<div className=" text-center ">
								<p className="font-bold text-xl">BoostFlow</p>
								<p className="text-lg mt-2">
									See past experiments, what we’re working on today, and what we plan for the future. We score, track, and prioritize marketing
									experiments in a process we call BoostFlow™ that you get access to.
								</p>
							</div>
							<img src="/Boostflow.svg" alt="" className="mt-6 " />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-2xl">
							<p className="font-bold text-xl text-center">Reporting Dashboards</p>
							<p className="text-lg pt-2 text-center">
								See all your important metrics for all your acquisition channels at a glance, while being able to change the date ranges as well.
							</p>
							<img src="/MagGlass.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-2xl">
							<p className="font-bold text-xl text-center">Quarterly Business Reviews</p>
							<p className="text-lg pt-2 text-center">
								Get detailed analysis of winning and losing experiments in relation to your goals. We’ll also share future strategies and tactics.
							</p>
							<img src="/Hardhat.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-2xl">
							<p className="font-bold text-xl text-center">Email Updates</p>
							<p className="text-lg pt-2 text-center">
								Got questions that need faster answers? Email us at any time and we’ll reply to make sure you have everything you need.
							</p>
							<img src="/SpeechBubbles.svg" alt="" className="mt-6 w-" />
						</div>
						<div className="px-10 pt-10 pb-4  rounded bg-white shadow-2xl">
							<p className="font-bold text-xl text-center">Scheduled Calls</p>
							<p className="text-lg pt-2 text-center">
								We’ll set ongoing time aside to keep you in the loop and get feedback from you on which things to prioritize and plan for.
							</p>
							<img src="/Speedometer.svg" alt="" className="mt-6 w-" />
						</div>
					</div>

					<Link href={"/"} className="group  text-lg md:text-2xl list-none text-red-500">
						<p className="font-medium pb-8 text-center leading-[0px] px-4">
							See live examples of our reporting and communication in your marketing plan
							<span class="material-symbols-outlined translate-y-2 pl-2 text-3xl">arrow_right_alt</span>
						</p>
						{/* <HiArrowNarrowRight className="text-3xl font-bold group-hover:translate-x-1 absolute right-0 translate-y-[-90%] translate-x-[-250%] md:static" /> */}
					</Link>
					{/* <HiArrowNarrowRight className="text-3xl font-bold group-hover:translate-x-1 mt-2" /> */}
				</div>
				<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center"></div>
				<div className="better_perform g-page_structure">
					<div className="main-content  m-auto">
						<h1 className="text-center md:px-16 md:pt-8 md:text-3xl xl:text-5xl font-bold">Your Marketing Will Perform Better With Us</h1>
						<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-4">
							Your custom marketing plan from us will beat your current one. Here`s why...
						</p>
					</div>
					<div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-0 justify-around items-center pt-8">
						<p className="text-center text-xl xl:px-36">
							You’ll get insider knowledge around what <b>new marketing strategies and tactics</b> perform best across 250+ other companies.
						</p>
						<Image src="/game-plan.svg" alt="" width={300} height={100} className="w-[200px] lg:w-[300px]" />
					</div>
					<div className="flex md:flex-row-reverse flex-col md:flex-row gap-8 md:gap-4 lg:gap-0 justify-around items-center pt-8">
						<p className="text-center text-xl xl:px-36">
							You’ll get insider knowledge around what <b>new marketing strategies and tactics</b> perform best across 250+ other companies.
						</p>
						<Image src="/brain.svg" alt="" width={300} height={100} className="w-[200px] lg:w-[300px]" />
					</div>
				</div>
				<div className=" w-full  bg-repeat pt-12">
					<h1 className="text-center mt-6 font-bold text-5xl ">Better Marketing Performance <br /> Is Ready For You - Are You?</h1>
					<div className="flex justify-center mt-10">
						<button className="bg-[#ff5056] py-3 px-5 text-white lg:text-lg 2xl:text-2xl rounded font-semibold">Get Your Free Marketing Plan</button>
					</div>
					
				</div>
			</main>
		</>
	);
}
