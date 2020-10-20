import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// import { Container } from './styles';
import Input from '../../components/Input';
import { postHome } from '../../store/modules/home/actions';

function Register() {
    const [cep, setCEP] = useState('');
    const [number, setNumber] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [residents, setResidents] = useState('');
    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();

        await dispatch(postHome({ cep, number, latitude, longitude, residents }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>

            <div className="form-row">
                <Input
                    name="CEP"
                    id="cep"
                    type="text"
                    classes="col-md-6 mb-3"
                    value={cep}
                    setValue={setCEP}
                />

                <Input
                    name="Número"
                    id="number"
                    type="text"
                    classes="col-md-6 mb-3"
                    value={number}
                    setValue={setNumber}
                />
            </div>

            <div className="form-row">
                <Input
                    name="Latitude"
                    id="latitude"
                    type="number"
                    classes="col-md-3 mb-3"
                    value={latitude}
                    setValue={setLatitude}
                />

                <Input
                    name="Longitude"
                    id="longitude"
                    type="number"
                    classes="col-md-3 mb-3"
                    value={longitude}
                    setValue={setLongitude}
                />

                <Input
                    name="Quantidade de residentes"
                    id="residents"
                    type="number"
                    classes="col-md-6 mb-6"
                    value={residents}
                    setValue={setResidents}
                />
            </div>

            <button className="btn btn-primary" type="submit">Cadastrar</button>
        </form>
    );
}

export default Register;