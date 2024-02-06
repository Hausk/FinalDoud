import { TextGenerateEffectDemo } from "@/components/guest/TextGenerated";
import { MovingBorderDemo } from "@/components/guest/hpButton";
import { SparklesPreview } from "@/components/guest/sparkle";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowDown, ArrowDownCircle, ArrowLeftIcon, ArrowRight, CameraIcon, Contact2Icon, HandIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const paragraph = 'Photographe passionnée par la création de souvenirs heureux et émotionnels à travers mes photos. Je suis là pour immortaliser vos moments spéciaux et les rendre encore plus mémorables'

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <div className="m-auto w-full md:w-[80%] flex flex-col md:block justify-between h-dvh md:h-1/2">
        <div className="w-full h-[60dvh] md:h-full flex m-auto flex-col mt-16 md:mt-0">
          <h1 className="
            m-auto
            md:text-center text-9xl
            font-bold uppercase drop-shadow-xl shadow-gray-50
            w-full flex h-full flex-col md:flex-row z-50
          ">
            <span className="left-0 md:relative w-100 text-left">
              Libre
            </span>
            <span className="right-0 md:relative w-100 text-end">
              &nbsp;&amp;
            </span>
            <span className="left-2 flex flex-col w-100 text-left leading-[0.75]">
              Viv
            </span>
            <span className="w-100 text-right">
              ant
            </span>
            <span className="text-5xl mx-auto">
              Photographie
            </span>
          </h1>
        </div>
        <div className="w-[90%] m-auto md:w-1/3 flex flex-col">
          <p className="w-fit md:border-white md:border md:py-2 overflow-hidden m-auto">
            <span className="md:px-5 md:py-3 flex text-lg">Bonjour,&nbsp;je&nbsp;suis&nbsp;<span className="font-semibold">Victoria</span></span></p>
            <TextGenerateEffect words={paragraph} />
          <div className="flex justify-between md:justify-normal">
            <Link href="/works" className="
              inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#b91c1c,45%,#f87171,55%,#b91c1c)] px-6 font-medium text-white bg-[length:200%_100%] transition-colors
              text-sm md:text-base
            ">
              <ArrowDown/>&nbsp;&nbsp;Voir mon travail
            </Link>
            <Link href="/contact" className="ml-5 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-md p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="h-full w-full relative flex space-x-2 items-center z-10 rounded-md glass bg-gradient-to-tr from-slate-700 to-slate-900 py-0.5 px-4 ring-1 ring-white/10 ">
                <p className="flex m-auto text-sm md:text-base"><ArrowRight/>&nbsp;&nbsp;Me contacter</p>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </Link>
          </div>
        </div>
      </div>
        <Image
          className="absolute z-30 left-1/2 transform -translate-x-1/2 -translate-y-1/3 rounded-[40%] top-1/4 md:top-auto md:bottom-0 md:translate-y-0 md:rounded-none"
          src="/header.png"
          alt="Image de fond"
          width={800}
          height={1000}
        />
        <Image
          className="absolute z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/3 rounded-[40%] top-1/4 blur-md md:top-auto md:bottom-0 md:translate-y-0 md:rounded-none"
          src="/header.png"
          alt="Image de fond"
          width={810}
          height={1000}
        />
    </BackgroundGradientAnimation>
  )
}
