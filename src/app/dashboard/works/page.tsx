'use client'
import { ModeToggle } from '@/components/dashboard/darkmode'
import { Menu } from '@/components/dashboard/menu'
import { MenubarDemo } from '@/components/dashboard/navbar'
import { Profil } from '@/components/dashboard/profil'
import { Sidebar } from '@/components/dashboard/sidebar'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { TabsContent } from '@/components/ui/tabs'
import { playlists } from '@/lib/playlists'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import Image from 'next/image'
import { listenNowAlbums, madeForYouAlbums } from "@/lib/albums"
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { AlbumArtwork } from '@/components/dashboard/album-artwork'
import { PodcastEmptyPlaceholder } from '@/components/dashboard/podcast-empty-placeholder'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { worksList } from '@/lib/works'
import Link from 'next/link'

export default function Page() {
    return (
      <>
        <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Gestion des Catégories</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {worksList.map((work) => (
            <Link key={work.id} href={'/dashboard/works/' + work.slug}>
              <AlbumArtwork
                work={work}
                className="w-full"
                aspectRatio="square"
                width={2000}
                height={2000}
              />
            </Link>
        ))}
        </div>
    </>
  )
}
