import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Home = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState("mesas");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        navigate("/");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuOptionClick = (page: string) => {
        setActivePage(page);
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    const metallicButtonStyle = {
        background: 'linear-gradient(145deg, #C0C0C0, #E0E0E0)',
        border: '1px solid #A0A0A0',
        color: '#333',
        fontWeight: 'bold',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#B8E0D2", position: 'relative' }}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div style={{ position: 'relative', display: 'inline-block' }} ref={dropdownRef}>
                        <button className="btn btn-outline-dark" onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Alternar menu">
                            <FaBars /> Sistemas
                        </button>
                        {menuOpen && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    minWidth: '100%',
                                    backgroundColor: "#B8E0D2",
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                    zIndex: 1000,
                                    borderRadius: "5px",
                                    padding: "5px 0",
                                }}
                            >
                                <ul className="list-unstyled m-0">
                                    <li>
                                        <button
                                            className="btn btn-link text-dark fw-bold w-100 text-start px-3 py-1"
                                            onClick={() => handleMenuOptionClick("mesas")}
                                        >
                                            Mesas
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="btn btn-link text-dark fw-bold w-100 text-start px-3 py-1"
                                            onClick={() => handleMenuOptionClick("usuarios")}
                                        >
                                            Usuários
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="navbar-text me-3 fw-bold">Bem-vindo!</span>
                        <button onClick={handleLogout} className="btn" style={metallicButtonStyle}>
                            Sair
                        </button>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                {activePage === "mesas" && (
                    <div>
                        <h2 className="fw-bold">Mesas</h2>
                        <div className="row mt-3">
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
                )}
                {activePage === "usuarios" && (
                    <div>
                        <h2 className="fw-bold">Usuários</h2>
                        <p>Aqui serão exibidos os usuários cadastrados.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
