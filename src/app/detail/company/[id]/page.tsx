import LatestJob from "@/components/organisms/LatestJob";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiOutlineFire } from "react-icons/ai";
import {BsPeople} from "react-icons/bs";
import { HiOutlineLocationMarker, HiOutlineOfficeBuilding } from "react-icons/hi";

interface DetailCompanyPageProps {
    
}
 
const DetailCompanyPage: FC<DetailCompanyPageProps> = () => {
    return ( 
        <>
            <div className="bg-slate-100 px-32 pt-16 pb-14">
                <div className="inline-flex gap-3 text-sm text-muted-foreground">
                    <Link href='/' className="hover:underline hover:text-black">Home</Link> / {" "}
                    <Link href='/find-companies' className="hover:underline hover:text-black">Companies</Link> / {" "}
                    <Link href='/detail/company/1' className="hover:underline hover:text-black">Twitter</Link>
                </div>
                <div>
                    <div className="mt-10 inline-flex gap-6 items-start">
                        <Image src="/images/company2.png" alt="/images/company2.png" width={150} height={150}/>
                        <div>
                            <div className="inline-flex gap-4 items-center">
                                <span className="text-4xl font-semibold">Twitter</span>
                                <Badge>10 Jobs</Badge>
                            </div>
                            <div className="mt-2">
                                <Link href="/" className="font-semibold text-primary">https://twitter.com</Link>
                            </div>
                            <div className="inline-flex items-center gap-10 mt-6">
                                <div className="inline-flex items-center gap-3">
                                    <div>
                                        <div className="bg-white p-3 rounded-full">
                                            <AiOutlineFire className="w-6 h-6 text-primary"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500">Founded</div>
                                        <div className="font-semibold">March, 06 2020</div>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-3">
                                    <div>
                                        <div className="bg-white p-3 rounded-full">
                                            <BsPeople className="w-6 h-6 text-primary"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500">Employees</div>
                                        <div className="font-semibold">151-250</div>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-3">
                                    <div>
                                        <div className="bg-white p-3 rounded-full">
                                            <HiOutlineLocationMarker className="w-6 h-6 text-primary"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500">Location</div>
                                        <div className="font-semibold">Indonesia</div>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-3">
                                    <div>
                                        <div className="bg-white p-3 rounded-full">
                                            <HiOutlineOfficeBuilding className="w-6 h-6 text-primary"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500">Industry</div>
                                        <div className="font-semibold">Advertising</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-32 py-16 flex flex-row items-start gap-10">
                <div className="w-3/4">
                    <div className="mb-16">
                        <div className="text-3xl font-semibold mb-3">Company Profile</div>
                                <div className="text-muted-foreground">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos iste doloremque odio suscipit nesciunt in itaque iusto assumenda amet dignissimos accusantium praesentium, necessitatibus ipsa tempora facere ipsum aut non earum porro harum aperiam repudiandae nobis quibusdam. Amet explicabo voluptatum, quia sapiente consectetur soluta laudantium reprehenderit neque tempora molestias omnis?</p>
                        </div>
                    </div> 
                    <div>
                        <div className="text-3xl font-semibold mb-4">
                            Contact
                        </div>
                        <div className="flex items-center gap-5 w-[400px] flex-wrap">
                            <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                                <FacebookIcon />
                                <span className="text-sm">
                                    https://facebook.com/twitter
                                </span>
                            </div>
                            <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                                <TwitterIcon />
                                <span className="text-sm">
                                    https://twitter.com/twitter
                                </span>
                            </div>
                            <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                                <LinkedinIcon />
                                <span className="text-sm">
                                    https://linkedin.com/twitter
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="text-3xl font-semibold mb-4">
                        Tech Stack
                    </div>
                    <div className="text-gray-500 text-sm">
                        Learn about the technology and tools that pattern uses.
                    </div>
                    <div className="mt-5 inline-flex gap-4">
                        <Badge>JavaScript</Badge>
                        <Badge>HTML</Badge>
                    </div>
                </div>
            </div>
            <div className="px-32">
                <Separator />
                <div className="my-16">
                    <div className="text-3xl font-semibold mb-4">Teams</div>
                    <div className="grid grid-cols-5 gap-5 mt-5">
                        {[0,1,2,3,4].map((i: number) => (
                            <div key={i} className="border border-border px-3 py-5">
                            <div className="w-16 h-16 rounded-full mx-auto bg-gray-500"></div>
                            <div className="text-center my-4">
                                <div className="font-semibold text-sm">
                                    M. Ilham Ferdiansyah
                                </div>
                                <div className="text-gray-500 text-xs">
                                    CEO & CO-Founder
                                </div>
                            </div>
                            <div className="mx-auto w-max">
                                <div className="inline-flex gap-2">
                                    <InstagramIcon className="w-4 h-4 text-gray-500" />
                                    <LinkedinIcon className="w-4 h-4 text-gray-500" />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <Separator />
            </div>
            <div className="px-32 mt-16">
                <LatestJob />
            </div>
        </>
     );
}
 
export default DetailCompanyPage;