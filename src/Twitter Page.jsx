import { useNavigate } from "react-router-dom"

export const Twitter = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate("/")}>Back</button>
            <p>Welcome </p>
        </div>
    )
}