import { ReactElement } from "react"
import { Footer } from "../components/Footer"
import NavBar from "../components/NavBar"
import { Container } from "@mui/material"

export const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <div className="bg-black">
            <Container maxWidth="xl">
                <NavBar />
                <div className="pt-20">
                    {children}
                </div>
                <Footer />
            </Container>
        </div>
    )
}