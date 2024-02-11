import { NavBar } from "@/components/guest/NavBar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const paragraph = 'Photographe passionnée par la création de souvenirs heureux et émotionnels à travers mes photos. Je suis là pour immortaliser vos moments spéciaux et les rendre encore plus mémorables'

export default function Home() {
  return (
    <>
    <NavBar />
    <BackgroundGradientAnimation className="flex">
      <div className="m-auto w-full lg:w-[80%] flex flex-col lg:block justify-between h-full lg:h-auto">
        <div className="w-full h-1/2 lg:h-auto flex m-auto flex-col mt-16 lg:mt-0">
          <div className="
            m-auto
            lg:text-center text-8xl
            font-bold uppercase drop-shadow-xl shadow-gray-50
            w-full flex h-full flex-col overflow-hidden
            lg:text-9xl justify-between lg:block
          ">
            <div className="flex flex-col lg:flex-row w-full m-auto lg:mb-0 lg:w-fit">
              <h1 className="lg:relative w-100 text-left pl-5 lg:pl-0">
                Libre
              </h1>
              <h1 className="pr-5 lg:relative w-100 text-end lg:m-auto lg:pr-0">
                &nbsp;&amp;
              </h1>
              <h1 className="mx-auto lg:mx-0 w-100 text-left z-30">
                Vivant
              </h1>
            </div>
            <h1 className="text-4xl lg:text-7xl mx-auto z-50 leading-[0.75] backdrop-blur-3xl">
              Photographie
            </h1>
            <Image
              className="absolute z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/3 rounded-[40%] top-[25%] lg:hidden"
              src="/header.png"
              alt="Image de fond"
              width={400}
              height={500}
            />
            <Image
              className="absolute z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/3 rounded-[40%] top-[26%] blur-md lg:hidden"
              style={{perspective: 500}}
              src="/header.png"
              alt="Image de fond"
              width={400}
              height={500}
            />
          </div>
        </div>
        <div className="hidden lg:block py-5 mb-0"></div>
        <div className="w-[90%] m-auto lg:w-1/3 flex flex-col h-auto z-50 lg:ml-0">
          <p className="w-fit lg:border-white lg:border lg:glass overflow-hidden m-auto lg:m-0">
            <span className="lg:px-4 lg:py-2 flex text-lg">Bonjour,&nbsp;je&nbsp;suis&nbsp;<span className="font-semibold">Victoria</span></span>
          </p>
          <TextGenerateEffect words={paragraph} className="lg:text-xl lg:my-4"/>
          <div className="flex justify-between lg:justify-normal">
            <Link href="/works" className="
              inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#b91c1c,45%,#f87171,55%,#b91c1c)]
              px-3 lg:px-6 font-medium text-white bg-[length:200%_100%] transition-colors
              text-sm lg:text-base w-1/2
            ">
              <ArrowDown className="hidden lg:block"/>&nbsp;&nbsp;Voir&nbsp;mon&nbsp;travail
            </Link>
            <Link href="/contact" 
              className="ml-5 bg-slate-800 no-underline group cursor-pointer relative
                shadow-2xl shadow-zinc-900 rounded-md p-px text-xs font-semibold leading-6 text-white inline-block w-1/2">
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="h-full w-full relative flex space-x-2 items-center z-10 rounded-md glass bg-gradient-to-tr from-slate-700 to-slate-900 py-0.5 px-4 ring-1 ring-white/10 ">
                <p className="flex m-auto text-base lg:text-base"><ArrowRight className="hidden lg:block"/>&nbsp;&nbsp;Me&nbsp;contacter</p>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </Link>
          </div>
        </div>
      </div>
        <Image
          className="absolute z-30 lg:z-40 right-2 transform -translate-x-1/2 top-auto bottom-0 lg:translate-y-0 lg:rounded-none hidden lg:block h-auto w-1/3 bg-transparent"
          src="/header.png"
          alt="Image de fond"
          width={800}
          height={1000}
        />
        <Image
          className="absolute z-20 lg:z-30 right-0 transform -translate-x-1/2 blur-md top-auto -bottom-1 lg:translate-y-0 lg:rounded-none hidden lg:block h-auto w-[34%] brightness-80"
          src="/header.png"
          alt="Image de fond"
          width={810}
          height={1000}
        />
    </BackgroundGradientAnimation>
    </>
  )
}
