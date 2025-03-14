import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://klinger.tecnologia.ws/api/register.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nome: name, login: email, senha: password })
            });

            if (!response.ok) {
                throw new Error('Erro no servidor');
            }

            const data = await response.json();

            if (data.success) {
                alert(data.message);
                navigate("/");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Erro ao tentar cadastrar o usuário:", error);
            alert("Erro ao tentar cadastrar o usuário. Verifique o console para mais detalhes.");
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: "#B8E0D2" }}>
            <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
                <div className="card-body">
                    <h2 className="text-center text-dark fw-bold mb-4">Cadastro</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
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
                            Cadastrar
                        </button>
                    </form>
                    <p className="text-center mt-3">
                        Já tem uma conta? <a href="/" className="text-success fw-bold">Entrar</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
