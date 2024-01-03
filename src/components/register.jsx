import Card from "./Card";

const Register = () => {
    return (
        <div className="container">
            <Card>
                <form className="form-container">
                    <h1>Register User</h1>
                    <label>
                        <input type="text" placeholder="Name"/>
                    </label>
                    <label>
                        <input type="text" placeholder="Email"/>
                    </label>
                    <label>
                        <input type="text" placeholder="Password"/>
                    </label>
                    <button className="btn">
                        <p>Register</p>
                    </button>
                </form>
            </Card>
        </div>
    );
};

export default Register;