import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import moment from "moment-timezone";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full overflow-hidden flex bg-gradient-to-t from-violet-950 via-slate-950 to-red-950 bg-slate-500">
            <div className="mt-20 p-5 w-full mx-auto lg:mt-30">
                <h1 className="text-3xl lg:text-6xl mb-10 lg:w-[70%] mx-auto">Commençons votre projet photo ensemble&nbsp;!</h1>
                <div className="flex w-full lg:w-[70%] mx-auto flex-col-reverse md:flex-row mb-20">
                    <div className="m-auto lg:w-full relative">
                        <Separator className="my-5 w-2/3" />
                        <div className="1 flex w-2/3">
                            <h5 className="mr-4 mt-1 text-xs lg:text-base font-bold text-gray-500 leading-[1]">01</h5>
                            <div className="w-full">
                                <div className="m-0 p-0 w-full">
                                    <span className="label-text m-0 leading-[1] text-lg lg:text-2xl font-semibold p-0 w-full">Quel&nbsp;est&nbsp;votre&nbsp;nom&nbsp;?</span>
                                </div>
                                <input type="text" placeholder="John Doe *" className="input p-0 outline-none focus-within:outline-0 outline-0 outline-offset-0 border-0 bg-transparent w-full max-w-xs mt-5 focus:none lg:text-lg" />
                            </div>
                        </div>
                        <Separator className="my-5 w-2/3" />
                        <div className="2 flex w-2/3">
                            <h5 className="mr-4 mt-1 text-xs lg:text-base font-bold text-gray-500 leading-[1]">02</h5>
                            <div className="w-full">
                                <div className="m-0 p-0 w-full">
                                    <span className="label-text m-0 leading-[1] text-lg lg:text-2xl font-semibold p-0 w-full">Quel&nbsp;est&nbsp;votre&nbsp;email&nbsp;?</span>
                                </div>
                                <input type="text" placeholder="john@doe.com *" className="input p-0 outline-none focus-within:outline-0 outline-0 outline-offset-0 border-0 bg-transparent w-full max-w-xs mt-5 focus:none lg:text-lg" />
                            </div>
                        </div>
                        <Separator className="my-5 w-2/3" />
                        <div className="3 flex w-2/3">
                            <h5 className="mr-4 mt-1 text-xs lg:text-base font-bold text-gray-500 leading-[1]">03</h5>
                            <div className="w-full">
                                <div className="m-0 p-0 w-full">
                                    <span className="label-text m-0 leading-[1] text-lg lg:text-2xl font-semibold p-0 w-full">Quel&nbsp;est&nbsp;l&apos;objet&nbsp;du&nbsp;message&nbsp;?</span>
                                </div>
                                <input type="text" placeholder="Informations, Rendez-vous ... *" className="input p-0 outline-none focus-within:outline-0 outline-0 outline-offset-0 border-0 bg-transparent w-full max-w-xs mt-5 focus:none lg:text-lg" />
                            </div>
                        </div>
                        <Separator className="my-5 w-2/3" />
                        <div className="3 flex w-2/3">
                            <h5 className="mr-4 mt-1 text-xs lg:text-base font-bold text-gray-500 leading-[1]">04</h5>
                            <div className="w-full">
                                <div className="m-0 p-0 w-full">
                                    <span className="label-text m-0 leading-[1] text-lg lg:text-2xl font-semibold p-0 w-full">Votre&nbsp;message&nbsp;?</span>
                                </div>
                                <textarea cols={5} placeholder="Bonjour, je souhaiterai avoir plus d'... *" className="input p-0 outline-none focus-within:outline-0 outline-0 outline-offset-0 border-0 bg-transparent w-full mt-5 focus:none lg:text-lg" />
                            </div>
                        </div>
                        <div className="send">
                        <Separator className="my-5 mt-20" />
                        <div className="flex w-full justify-end absolute bottom-0">
                            <Button className="w-fit mr-5">ENVOYER !</Button>
                        </div>
                        </div>
                    </div>
                    <div className="side w-full md:w-1/3">
                        <div className="contact">
                            <div className="avatar hidden lg:block mb-5">
                                <div className="w-40 rounded-full glass bg-slate-700">
                                    <Image 
                                        src={"/header.png"}
                                        width={1000}
                                        height={1000}
                                        alt="Image de profil"
                                    />
                                </div>
                            </div>
                            <h2 className="text-xs text-gray-500 pb-4">INFORMATIONS DE CONTACT</h2>
                            <a href="mailto:victoriadossantos92190@gmail.com" className="hover:border-b-slate-50 border-b-[1px] duration-300">victoriadossantos92190@gmail.com</a>
                            <p className="mt-3">Paris, Ile de France</p>
                        </div>
                    </div>
                </div>
                <div className="flex-col-reverse lg:flex-row-reverse lg:flex lg:justify-between lg:w-[90%] lg:mx-auto">
                    <div className="social py-5 mr-0">
                        <h2 className="text-xs text-gray-500">Social</h2>
                        <div className="flex mt-2">
                            <Link href="https://www.instagram.com/libre_vivant_photographie/?igshid=YmMyMTA2M2Y%3D" className="text-sm text-left text-white" target="blank">INSTAGRAM</Link>
                            <Link href="https://m.facebook.com/profile.php?id=100072519471892" className="text-sm text-left text-white mx-7" target="blank">FACEBOOK</Link>
                            <Link href="https://www.tiktok.com/@libre_vivant" className="text-sm text-left text-white" target="blank">TIKTOK</Link>
                        </div>
                    </div>
                    <Separator className="my-5 lg:hidden" />
                    <div className="time py-5 flex justify-between lg:w-fit">
                        <div className="lg:pr-5">
                            <h2 className="text-xs text-gray-500 font-bold">Version</h2>
                            <p className="text-base font-semibold text-white">2024 Edition</p>
                        </div>
                        <div>
                            <h2 className="text-xs text-gray-500 font-bold">Heure actuelle</h2>
                            <p className="text-base font-semibold text-white">{moment().tz('Europe/Paris').format('HH:mm')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}