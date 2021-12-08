import { Router } from "./router/Router";
import "./style.css";

const user = {
    name: "jjtt",
    image: "https://source.unsplash.com/gKXKBY-C-Dk",
    email: "hogehoge@example.com",
    phone: "xxx-xxxx-xxxx",
    company: {
        name: "hoge株式会社"
    },
    website: "https://google.com"
};

function App() {

    return (
        <Router />
    );
}

export default App;
