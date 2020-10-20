import React, { useState } from 'react';

import { Container } from './styles';

function Input({ name, id, type, classes, value, setValue }) {
    const [error, setError] = useState(false);

    function handleOnBlur() {
        setError(value === '');
    }

    return (
        <Container className={classes}>
            <label htmlFor={id}>{name}</label>

            <input
                type={type}
                className={`form-control ${error ? 'is-invalid': ''}`}
                id={id}
                aria-describedby={`${id}Feedback`}
                required
                value={value}
                onChange={event => setValue(event.target.value)}
                onBlur={handleOnBlur}
            />

            <div id={`${id}Feedback`} className="invalid-feedback">
                Digite <span className="error-field-name" >{name}</span> válido por favor.
            </div>
        </Container>
    );
}

export default Input;