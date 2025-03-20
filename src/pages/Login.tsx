import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost/api/login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ login: email, senha: password }),
            });

            const data = await response.json();

            if (data.success) {
                // Salvar usuário no localStorage ou contexto global
                localStorage.setItem("user", JSON.stringify(data));
                navigate("/home");
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("Erro ao conectar ao servidor.");
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: "#B8E0D2" }}>
            <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
                <div className="card-body text-center">
                    <img src="logo.png" alt="Logomarca" style={{ maxWidth: "150px", marginBottom: "20px" }} />
                    <h2 className="text-dark fw-bold mb-4">Login</h2>
                    {error && <p className="text-danger">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-3 text-start">
                            <label className="form-label fw-semibold">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label fw-semibold">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100 fw-bold" style={{ borderRadius: "8px", transition: "0.3s" }}>
                            Entrar
                        </button>
                    </form>
                    <p className="text-center mt-3">
                        Não tem uma conta? <a href="/#/register" className="text-success fw-bold">Cadastre-se</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
