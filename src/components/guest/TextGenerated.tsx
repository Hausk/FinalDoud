"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Photographe passionnée par la création de souvenirs heureux et émotionnels à travers mes photos. Je suis là pour immortaliser vos moments spéciaux et les rendre encore plus mémorables`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
