import React, { useState } from 'react';

function ContactForm() {
    const [state, setState] = useState({
        Nom: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Utilisez l'API de Formspree pour envoyer l'email
        const formUrl = "https://formspree.io/f/xnqedbda"; // Remplacez {votreID} par votre ID Formspree
        const response = await fetch(formUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        });
        if (response.ok) {
            // Gérer la réussite de l'envoi
            alert("Merci pour votre message. Je vous contacterai bientôt !");
            // Réinitialiser le formulaire ou rediriger l'utilisateur
            setState({ Nom: '', Email: '', Objet: '', Message: '' });
        } else {
            // Gérer l'erreur
            alert("Une erreur s'est produite. Veuillez réessayer.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nom</label>
            <input type="text" name="name" value={state.name} onChange={handleChange} />

        
            <label>Email</label>
            <input type="email" name="email" value={state.email} onChange={handleChange} />

            <label>Sujet</label>
            <input type="text" name="subject" value={state.subject} onChange={handleChange} />

            <label>Message</label>
            <textarea name="message" value={state.message} onChange={handleChange}></textarea>

            <button type="submit">Envoyer</button>
        </form>
    );
}

export default ContactForm;
