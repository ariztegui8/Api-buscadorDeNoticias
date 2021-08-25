import React from 'react';
import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'business' , label: 'Negocios'},
        {value: 'entertainment' , label: 'Entretenimiento'},
        {value: 'health' , label: 'Salud'},
        {value: 'general' , label: 'General'},
        {value: 'science' , label: 'Ciencia'},
        {value: 'sports' , label: 'Deportes'},
        {value: 'technology' , label: 'Tecnologia'},
    ]

    //Utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //Submit al form, pasar categoria a app.js
    const buscarNoticias = (e) => {
        e.preventDefault();

        guardarCategoria(categoria);
    }


    return (
        <div className={`${styles.buscador_form} row`}>
            <div className="col-sm-12">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.titulo_form}>Encuentra Noticias por Categoria</h2>

                    <SelectNoticias />

                    <div className="container_form">
                        <input 
                            type="submit"
                            className={`${styles.input_form} btn btn-success`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}   

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario
