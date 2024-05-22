import "./App.css";
import { UserInfoProps } from "./models/User";
import UserInfo from "./components/UserInfo";
import Card from "./components/Card";

function App() {
    const users: UserInfoProps[] = [
        {
            name: "Mahrus",
            age: 28,
            email: "mahrus@email.com",
        },
        {
            name: "Savvy",
            age: 24,
            email: "savvy@email.com",
        },
        {
            name: "Mary",
            age: 23,
            email: "mary@email.com",
        },
    ];

    return (
        <div>
            {users.map((user) => (
                <UserInfo {...user} />
            ))}
            <Card>
                <h2>Title</h2>
                <p>This is the title</p>
                <button>Button</button>
            </Card>

            <Card>
                <img
                    src="https://th.bing.com/th/id/OIP.eXHvpMBf2HjPlMmGgJitGQAAAA?rs=1&pid=ImgDetMain"
                    alt="coding temple"
                />
            </Card>
            <Card>
                {users.map((user) => (
                    <UserInfo {...user} />
                ))}
            </Card>
        </div>
    );
}

export default App;
