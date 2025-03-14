import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    const metallicButtonStyle = {
        background: 'linear-gradient(145deg, #C0C0C0, #E0E0E0)',
        border: '1px solid #A0A0A0',
        color: '#333',
        fontWeight: 'bold',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#B8E0D2" }}>
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">Menu</a>
                    <div className="d-flex align-items-center">
                        <span className="navbar-text me-3 fw-bold">Bem-vindo à Home!</span>
                        <button onClick={handleLogout} className="btn" style={metallicButtonStyle}>
                            Sair
                        </button>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <div className="row">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Opção {index + 1}</h5>
                                    <p className="card-text">Descrição da opção de cardápio.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
