import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

    //Extraer los datos
    const {urlToImage, url, title, description, source} = noticia;

    const imagen = (urlToImage) ?
    <div className="card text-dark bg-light mb-3">
        <img src={urlToImage} className="card-img-top" alt={title}/>
        <span className="source-name">{source.name}</span>
        <div className="card-body">
            <h5 className="card-title fs-3">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Ver Noticia Completa</a>
        </div>
    </div>
    : null; 


    return (
        <div className="col-sm-4 col-sm-4 col-sm-4 contenedor-noticias">
            {imagen}
      </div>
      
    );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}


export default Noticia
