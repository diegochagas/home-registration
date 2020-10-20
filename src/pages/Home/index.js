import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Home() {
    return (
        <div>
            <h1>Cadastro de residências</h1>

            <p>
                <span>Vá para a página de </span>
                <Link to="/register">cadastro</Link> 
                <span> para adicionar uma nova residência ou vá para a página </span>
                <Link to="/heatmap">mapa de calor</Link>
                <span> para ver todas as residências cadastradas.</span>
            </p>
        </div>
    );
}

export default Home;