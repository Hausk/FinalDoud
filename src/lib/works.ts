export interface Image {
    id: number
    uploadedAt: string
    src: string
    width: number,
    height: number,
    path: string
    workId: number
}
export interface Work {
    id: number
    title: string
    pinnedImage: string
    slug: string
    images: Image[]
}
export const worksList: Work[] = [
    {
        id: 1,
        title: 'France',
        pinnedImage: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
        slug: 'france-2023',
        images: [
            {
                id: 1,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 1
            },
            {
                id: 2,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 1
            },
            {
                id: 3,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 1
            },
            {
                id: 4,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 1
            },
        ]
    },
    {
        id: 2,
        title: 'Portugal',
        pinnedImage: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
        slug: 'portugal-2023',
        images: [
            {
                id: 1,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 2
            },
            {
                id: 2,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 2
            },
            {
                id: 3,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 2
            },
            {
                id: 4,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 2
            },
        ]
    },
    {
        id: 3,
        title: 'Portugal',
        year: '2022',
        pinnedImage: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
        slug: 'portugal-2022',
        images: [
            {
                id: 1,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 3
            },
            {
                id: 2,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 3
            },
            {
                id: 3,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 3
            },
            {
                id: 4,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 3
            },
        ]
    },
    {
        id: 4,
        title: 'Espagne',
        pinnedImage: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
        slug: 'espagne-2023',
        images: [
            {
                id: 1,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 4
            },
            {
                id: 2,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 4
            },
            {
                id: 3,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 4
            },
            {
                id: 4,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 4
            },
        ]
    },
    {
        id: 5,
        title: 'Italie',
        pinnedImage: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
        slug: 'italie-2023',
        images: [
            {
                id: 1,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 5
            },
            {
                id: 2,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 5
            },
            {
                id: 3,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 5
            },
            {
                id: 4,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 5
            },
        ]
    },
    {
        id: 6,
        title: 'Royaumes-unis',
        pinnedImage: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
        slug: 'royaumes-unis-2023',
        images: [
            {
                id: 1,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 6
            },
            {
                id: 2,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 6
            },
            {
                id: 3,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 6
            },
            {
                id: 4,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 6
            },
        ]
    },
    {
        id: 7,
        title: 'Suisse',
        year: '2022',
        pinnedImage: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
        slug: 'suisse-2023',
        images: [
            {
                id: 1,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 7
            },
            {
                id: 2,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 7
            },
            {
                id: 3,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 7
            },
            {
                id: 4,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 7
            },
        ]
    },
    {
        id: 8,
        title: 'Allemagne',
        pinnedImage: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
        slug: 'allemagne-2023',
        images: [
            {
                id: 1,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 8
            },
            {
                id: 2,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 8
            },
            {
                id: 3,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 8
            },
            {
                id: 4,
                uploadedAt: '2023',
                src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                width: 300,
                height: 600,
                path: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                workId: 8
            },
        ]
    },
  ]