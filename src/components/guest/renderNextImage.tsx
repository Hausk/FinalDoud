import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
import { motion } from "framer-motion";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div className="overflow-hidden" style={{ ...wrapperStyle, position: "relative" }}>
        <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full h-full"
        >
        <Image
            fill
            src={`data:image/jpeg;base64,${(photo.src)}`}
            placeholder={"blurDataURL" in photo ? "blur" : undefined}
            {...{ alt, title, sizes, className, onClick }}
        />
        </motion.div>
    </div>
  );
}