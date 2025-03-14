import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Removendo a requisição para login.php
        navigate("/home"); // Redireciona diretamente
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: "#B8E0D2" }}>
            <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
                <div className="card-body">
                    <h2 className="text-center text-dark fw-bold mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
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
                        <div className="mb-3">
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
                        Não tem uma conta? <a href="/register" className="text-success fw-bold">Cadastre-se</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
