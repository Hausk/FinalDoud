import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import moment from "moment-timezone";

export default function Page() {
    return (
        <div className="w-screen flex bg-gradient-to-t from-violet-950 via-slate-950 to-red-950 bg-slate-500">
            <div className="mt-20 p-5">
                <h1 className="text-3xl mb-10">Commençons votre projet photo ensemble&nbsp;!</h1>
                <div className="flex w-full flex-col-reverse md:flex-row mb-20">
                    <div className="m-auto w-full md:w-2/3 relative">
                        <Separator className="my-5" />
                        <div className="1 flex">
                            <h5 className="mr-4 mt-1 text-xs font-bold text-gray-500 leading-[1]">01</h5>
                            <div className="w-full">
                                <div className="m-0 p-0 w-full">
                                    <span className="label-text m-0 leading-[1] text-lg font-semibold p-0 w-full">Quel&nbsp;est&nbsp;votre&nbsp;nom&nbsp;?</span>
                                </div>
                                <input type="text" placeholder="John Doe *" className="input p-0 outline-none focus-within:outline-0 outline-0 outline-offset-0 border-0 bg-transparent w-full max-w-xs mt-5 focus:none" />
                            </div>
                        </div>
                        <Separator className="my-5" />
                        <div className="2 flex">
                            <h5 className="mr-4 mt-1 text-xs font-bold text-gray-500 leading-[1]">02</h5>
                            <div className="w-full">
                                <div className="m-0 p-0 w-full">
                                    <span className="label-text m-0 leading-[1] text-lg font-semibold p-0 w-full">Quel&nbsp;est&nbsp;votre&nbsp;email&nbsp;?</span>
                                </div>
                                <input type="text" placeholder="john@doe.com *" className="input p-0 outline-none focus-within:outline-0 outline-0 outline-offset-0 border-0 bg-transparent w-full max-w-xs mt-5 focus:none" />
                            </div>
                        </div>
                        <Separator className="my-5" />
                        <div className="3 flex">
                            <h5 className="mr-4 mt-1 text-xs font-bold text-gray-500 leading-[1]">03</h5>
                            <div className="w-full">
                                <div className="m-0 p-0 w-full">
                                    <span className="label-text m-0 leading-[1] text-lg font-semibold p-0 w-full">Quel&nbsp;est&nbsp;l&apos;objet&nbsp;du&nbsp;message&nbsp;?</span>
                                </div>
                                <input type="text" placeholder="Informations, Rendez-vous ... *" className="input p-0 outline-none focus-within:outline-0 outline-0 outline-offset-0 border-0 bg-transparent w-full max-w-xs mt-5 focus:none" />
                            </div>
                        </div>
                        <Separator className="my-5" />
                        <div className="3 flex">
                            <h5 className="mr-4 mt-1 text-xs font-bold text-gray-500 leading-[1]">04</h5>
                            <div className="w-full">
                                <div className="m-0 p-0 w-full">
                                    <span className="label-text m-0 leading-[1] text-lg font-semibold p-0 w-full">Votre&nbsp;message&nbsp;?</span>
                                </div>
                                <textarea cols={5} placeholder="Bonjour, je souhaiterai avoir plus d'... *" className="input p-0 outline-none focus-within:outline-0 outline-0 outline-offset-0 border-0 bg-transparent w-full max-w-xs mt-5 focus:none" />
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
                            <h2 className="text-xs text-gray-500 pb-4">INFORMATIONS DE CONTACT</h2>
                            <a href="mailto:victoria@gmail.com">victoria@gmail.com</a>
                            <p>Paris IDF</p>
                        </div>
                    </div>
                </div>
                <div className="flex-col-reverse">
                    <div className="social py-5">
                    <h2 className="text-xs text-gray-500">Social</h2>
                    <div className="flex mt-2">
                        <Link href="https://www.instagram.com/libre_vivant_photographie/?igshid=YmMyMTA2M2Y%3D" className="text-sm text-left text-white" target="blank">INSTAGRAM</Link>
                        <Link href="https://m.facebook.com/profile.php?id=100072519471892" className="text-sm text-left text-white mx-7" target="blank">FACEBOOK</Link>
                        <Link href="https://www.tiktok.com/@libre_vivant" className="text-sm text-left text-white" target="blank">TIKTOK</Link>
                    </div>
                    </div>
                    <Separator className="my-5" />
                    <div className="time flex justify-between py-5">
                        <div>
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