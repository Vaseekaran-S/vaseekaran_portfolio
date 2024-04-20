import { ReactElement } from "react"
import { Footer } from "../components/Footer"
import NavBar from "../components/NavBar"

export const Layout = ({children}:{children: ReactElement}) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}