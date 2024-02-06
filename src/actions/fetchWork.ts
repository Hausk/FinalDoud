import { worksList } from "@/lib/works";

export async function fetchWork(slug: string) {
    const res = worksList.find((p) => p.slug === slug);
    if (!res) return undefined;
    return res;
}