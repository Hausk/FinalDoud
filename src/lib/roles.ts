export interface Role {
    name: string
    description: string
  }
  
  export const rolesList: Role[] = [
    {
      name: "Admin",
      description: 'Peux accéder à tout'
    },
    {
      name: "Co-Admin",
      description: 'Peux accéder à tout mais pas supprimer le compte Admin'
    },
    {
      name: "Modérateur",
      description: 'A tout les droits sur les catégories et images, peux voir les stats'
    },
    {
      name: "Consultant",
      description: 'Peux simplement voir les stats'
    },
  ]