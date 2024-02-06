'use client'

import { Button } from "@/components/ui/button"
import { CardMembers } from "@/components/dashboard/card-member"
import { CardRoles } from "@/components/dashboard/card-roles"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Gestion des utilisateurs</h2>
            </div>
            <Tabs defaultValue="members" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="members">Membres</TabsTrigger>
                    <TabsTrigger value="roles">Rôles</TabsTrigger>
                </TabsList>
                <TabsContent value="members" className="space-y-4">
                    <CardMembers />
                </TabsContent>
                <TabsContent value="roles" className="space-y-4">
                    <CardRoles />
                </TabsContent>
            </Tabs>
        </>
    )

}