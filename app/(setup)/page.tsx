import { redirect } from "next/navigation"
import { initialProfile } from "@/lib/initial-profile"
import db from "@/lib/db"
import IntialModal from "@/components/IntialModal"

const Setup = async () => {

  const profile = await initialProfile()

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })

  if (server) {
    redirect(`/servers/${server.id}`)
  }

  return (
    <IntialModal />
  )
}

export default Setup 
