import { fetchWorksList } from '@/actions/fetchWork'
import WorksList from '@/components/dashboard/worksList'

export default async function Page() {
  const works = await fetchWorksList()
    return (
      <WorksList/>
  )
}
