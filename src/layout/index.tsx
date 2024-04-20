import { ReactElement } from "react"
import { Footer } from "../components/Footer"
import NavBar from "../components/NavBar"
import { Container } from "@mui/material"

export const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <div className="bg-black">
            <Container maxWidth="xl">
                <NavBar />
                {children}
                <Footer />
            </Container>
        </div>
    )
}