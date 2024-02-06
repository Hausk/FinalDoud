import { rolesList } from "@/lib/roles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ChevronDownIcon, PlusIcon } from "@radix-ui/react-icons";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";

export function CardRoles() {
    return (
        <Card>
            <CardHeader className="flex justify-between space-x-4 flex-row">
                <div>
                    <CardTitle>Roles</CardTitle>
                    <CardDescription>Gérez les roles du dashboard.</CardDescription>
                </div>
                <Button className="ml-auto">
                    Ajouter{" "}
                    <PlusIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                </Button>
            </CardHeader>
            <CardContent className="grid gap-6">
                {rolesList.map((role) => (
                    <div key={role.name} className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarFallback>{role.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">{role.name}</p>
                                    <p className="text-sm text-muted-foreground">{role.description}</p>
                                </div>
                            </div>
                            {role.name != 'Admin' ? (
                                <Popover>
                                    <PopoverTrigger asChild>
                                    <Button variant="outline" className="ml-auto">
                                        Action{" "}
                                        <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                                    </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-0" align="end">
                                        <Command>
                                            <CommandInput placeholder="Select new role..." />
                                            <CommandList>
                                                <CommandEmpty>Aucun rôle trouvé.</CommandEmpty>
                                                <CommandGroup>
                                                    <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                    <p>Modifier</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Modifier le role.
                                                    </p>
                                                    </CommandItem>
                                                    <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                    <p>Supprimer</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Supprimer le role.
                                                    </p>
                                                    </CommandItem>
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            ): (<></>)}
                        </div>
                    ))}
            </CardContent>
        </Card>
    )
}