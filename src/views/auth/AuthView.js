import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../store/user/userThunk";
const AuthView = (props) => {
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state) => state.user);
    console.log(user);

    return (
        <>
            <h2 className="text-3xl">Auth View</h2>
            <button
                onClick={() =>
                    dispatch(
                        login({ id: 123, first_name: "abc", last_name: "def" })
                    )
                }
                className="p-2 m-4 border"
            >
                Login
            </button>
            {isLoading && <p className="p-4">Loading...</p>}
            <button className="p-2 m-4 border">Logout</button>
            <Link to="/main">Main View</Link>
        </>
    );
};

export default AuthView;
