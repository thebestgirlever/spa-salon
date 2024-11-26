import styles from './ProductList.module.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGoodList } from '../api/api';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getGoodList();
            console.log('Данные с сервера:', data);
            setProducts(data);
        };
        fetchData();
    }, []);

    const handleSelectProduct = (product) => {
        navigate('/ContactForm', { state: { selectedProduct: product } });
    };

    return (
        <div className={styles.root}>
            <div className={styles.title}>Наши сертификаты</div>
            <div className={styles.block}>
                {products.map((product) => (
                    <div className={styles.item} key={product.ID}>
                        <div className={styles.container}>
                            <div className={styles.name}>{product.NAME}</div>
                            <div className={styles.price}>Цена: {`${product.PRICE} ₽`}</div>
                            <div className={styles.discount}>Скидка: {`${product.DISCOUNT}%`}</div>
                        </div>
                        <button className={styles.button} onClick={() => handleSelectProduct(product)}>
                            <div className={styles.endPrice}>
                                Купить за {`${product.REC_SUM} ₽`}
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
