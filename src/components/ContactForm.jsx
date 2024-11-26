import styles from './ContactForm.module.css';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveOrder } from '../api/api';

const ContactForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedProduct = location.state?.selectedProduct;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const orderData = {
                certificateId: selectedProduct?.ID, 
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
            };
            console.log('Отправляемые данные:', orderData); 
            const result = await saveOrder(orderData);
            console.log('Данные успешно сохранены:', result);
            navigate('/PaymentPage');
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    return (
        <div className={styles.root}>
            <div className={styles.title}>Введите ваши данные и мы свяжемся с вами</div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.text}
                    type="text"
                    name="name"
                    placeholder='  Ваше имя'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input className={styles.text}
                    type="tel"
                    name="phone"
                    placeholder='  Ваш телефон'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="\+?\d{10,15}"
                />
                <input className={styles.text}
                    type="email"
                    name="email"
                    placeholder='  Ваша почта'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <div className={styles.buttons}>
                    <button className={styles.back} type="button" onClick={() => navigate('/')}>Назад</button>
                    <button className={styles.toPay}type="submit">Оплатить</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

