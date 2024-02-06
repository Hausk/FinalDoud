import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const paragraph = 'Photographe passionnée par la création de souvenirs heureux et émotionnels à travers mes photos. Je suis là pour immortaliser vos moments spéciaux et les rendre encore plus mémorables'

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <div className="m-auto w-full md:w-[80%] flex flex-col md:block justify-between h-full md:h-1/2">
        <div className="w-full h-1/2 md:h-full flex m-auto flex-col mt-16 md:mt-0">
          <div className="
            m-auto
            md:text-center text-8xl
            font-bold uppercase drop-shadow-xl shadow-gray-50
            w-full flex h-full flex-col md:flex-row overflow-hidden
            md:text-9xl justify-between
          ">
            <h1 className="left-0 md:relative w-100 text-left">
              Libre
            </h1>
            <h1 className="right-0 md:relative w-100 text-end">
              &nbsp;&amp;
            </h1>
            <h1 className="mx-auto w-100 text-left z-30">
              Vivant
            </h1>
            <h1 className="text-4xl mx-auto z-50 leading-[0.75] backdrop-blur-3xl">
              Photographie
            </h1>
            <Image
              className="absolute z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/3 rounded-[40%] top-[25%] md:hidden"
              src="/header.png"
              alt="Image de fond"
              width={400}
              height={500}
            />
            <Image
              className="absolute z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/3 rounded-[40%] top-[26%] blur-md md:hidden"
              style={{perspective: 500}}
              src="/header.png"
              alt="Image de fond"
              width={400}
              height={500}
            />
          </div>
        </div>
        <div className="w-[90%] m-auto md:w-1/3 flex flex-col h-fit z-50">
          <p className="w-fit md:border-white md:border md:py-2 overflow-hidden m-auto">
            <span className="md:px-5 md:py-3 flex text-lg">Bonjour,&nbsp;je&nbsp;suis&nbsp;<span className="font-semibold">Victoria</span></span></p>
            <TextGenerateEffect words={paragraph} />
          <div className="flex justify-between md:justify-normal">
            <Link href="/works" className="
              inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#b91c1c,45%,#f87171,55%,#b91c1c)]
              px-3 md:px-6 font-medium text-white bg-[length:200%_100%] transition-colors
              text-sm md:text-base w-1/2
            ">
              <ArrowDown className="hidden md:block"/>&nbsp;&nbsp;Voir&nbsp;mon&nbsp;travail
            </Link>
            <Link href="/contact" 
              className="ml-5 bg-slate-800 no-underline group cursor-pointer relative
                shadow-2xl shadow-zinc-900 rounded-md p-px text-xs font-semibold leading-6 text-white inline-block w-1/2">
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="h-full w-full relative flex space-x-2 items-center z-10 rounded-md glass bg-gradient-to-tr from-slate-700 to-slate-900 py-0.5 px-4 ring-1 ring-white/10 ">
                <p className="flex m-auto text-base md:text-base"><ArrowRight className="hidden md:block"/>&nbsp;&nbsp;Me&nbsp;contacter</p>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </Link>
          </div>
        </div>
      </div>
        <Image
          className="absolute z-30 left-1/2 transform -translate-x-1/2 -translate-y-1/3 rounded-[40%] top-1/4 md:top-auto md:bottom-0 md:translate-y-0 md:rounded-none hidden md:block"
          src="/header.png"
          alt="Image de fond"
          width={800}
          height={1000}
        />
        <Image
          className="absolute z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/3 rounded-[40%] top-1/4 blur-md md:top-auto md:bottom-0 md:translate-y-0 md:rounded-none hidden md:block"
          src="/header.png"
          alt="Image de fond"
          width={810}
          height={1000}
        />
    </BackgroundGradientAnimation>
  )
}
