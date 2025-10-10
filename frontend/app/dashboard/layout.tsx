import NavBar from "@/components/ui/NavBar";
import { verifySession } from "@/lib/schemas/dal";
import { redirect } from "next/navigation";
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

function DashboardRootLayout({children}: Props) {
    const session = verifySession();
    if (!session) {
        redirect('/signin');
    }
  return (
     <main
        className={`h-dvh grid lg:grid-cols-[auto_1fr] grid-cols-1 pb-12 lg:pb-0`}
      >
        {/* <SideBar /> */}
        <NavBar />
        <div className="relative overflow-y-scroll">{children}</div>
      </main>
  )
}

export default DashboardRootLayout;