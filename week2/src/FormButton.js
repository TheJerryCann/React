import { useState } from 'react';
import { Form } from './Form';

const FormButton = () => {
    const [showForm, setShowForm] = useState(false);

    const onDismissForm = () => {
        setShowForm(false);
    }
    return (
        <>
            <div class="card">
                <div class="card-content">
                    <h2>Create Form</h2>
                    <button onClick={() => setShowForm(true)} class="btn">Start</button>
                </div>
            </div>
            { showForm && <Form dismissForm={onDismissForm} />}
        </>
    );
};

export default FormButton;