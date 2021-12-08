import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLaout } from "./components/templates/DefaultLayout";
import { Router } from "./router/Router";
import "./style.css";

const user = {
    name: "jjtt",
    image: "https://source.unsplash.com/gKXKBY-C-Dk",
    email: "asdfasdf@asdf.com",
    phone: "090-1234-5678",
    company: {
        name: "asdf株式会社"
    },
    website: "https://google.com"
};

function App() {

    return (
        <Router />
    );
}

export default App;
