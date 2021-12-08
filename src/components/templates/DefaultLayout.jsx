import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLaout = (props) => {
    const { children } = props;

    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    );
};