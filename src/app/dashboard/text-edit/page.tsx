'use client'
import { CldImage } from 'next-cloudinary';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CldUploadWidget } from 'next-cloudinary';

export default function Page() {
    const homepageContent = 'Bonjour, je suis Victoria, une photographe passionnée par la création de souvenirs heureux et émotionnels à travers mes photos. Je suis là pour immortaliser vos moments spéciaux et les rendre encore plus mémorables.'
    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Edition des textes</h2>
            </div>
            <Tabs defaultValue="homepage" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="homepage">Page d&apos;accueil</TabsTrigger>
                    <TabsTrigger value="hp-image">Photo de fond</TabsTrigger>
                </TabsList>
                <TabsContent value="homepage" className="space-y-4">
                    <p className="text-current text-pretty text-1xl" contentEditable="true">{homepageContent}</p>
                </TabsContent>
                <TabsContent value="hp-image" className="space-y-4">
                <CldImage
                    width="600"
                    height="600"
                    src="sample"
                    alt="tttt"
                />
 
                <CldUploadWidget 
                    uploadPreset="librevivant"
                    options={{
                        sources: ['local', 'url'],
                        multiple: true
                    }}>
                {({ open }) => {
                    return (
                    <button onClick={() => open()}>
                        Upload an Image
                    </button>
                    );
                }}
                </CldUploadWidget>
                </TabsContent>
            </Tabs>
        </>
    )

}