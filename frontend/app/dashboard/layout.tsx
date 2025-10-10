import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

function DashboardRootLayout({children}: Props) {
  return (
    <div>
        {children}
    </div>
  )
}

export default DashboardRootLayout;