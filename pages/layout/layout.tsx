import { Footer } from "./footer"
import { Header } from "./header"

export const Layout = ({children}:{children:JSX.Element}) => {
    return (
        <>
        <Header/>
        <main className="main-space">
            {children}
        </main>
        <Footer/>
        </>
    )

}