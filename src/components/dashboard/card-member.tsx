import { usersList } from "@/lib/users";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ChevronDownIcon, PlusIcon } from "@radix-ui/react-icons";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { rolesList } from "@/lib/roles";

export function CardMembers() {
    return (
        <Card>
            <CardHeader className="flex justify-between flex-row space-x-4">
                <div>
                    <CardTitle>Membres</CardTitle>
                    <CardDescription>Gérez les accès des membres.</CardDescription>
                </div>
                <Button className="ml-auto">
                    Ajouter{" "}
                    <PlusIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                </Button>
            </CardHeader>
            <CardContent className="grid gap-6">
                {usersList.map((user) => (
                    <div key={user.email} className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={user.avatar} alt={"Image de " + user.name}/>
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">{user.name}</p>
                                    <p className="text-sm text-muted-foreground">{user.email}</p>
                                </div>
                            </div>
                            <Popover>
                                <PopoverTrigger asChild>
                                <Button variant="outline" className="ml-auto">
                                    {user.role}{" "}
                                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                                </Button>
                                </PopoverTrigger>
                                <PopoverContent className="p-0" align="end">
                                    <Command>
                                        <CommandInput placeholder="Select new role..." />
                                        <CommandList>
                                            <CommandEmpty>No roles found.</CommandEmpty>
                                            <CommandGroup>
                                                 {rolesList.map((role, index) => (
                                                     <CommandItem
                                                        key={index}
                                                        className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                        <p>{role.name}</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {role.description}
                                                        </p>
                                                     </CommandItem>
                                                 ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                    ))}
            </CardContent>
        </Card>
    )
}