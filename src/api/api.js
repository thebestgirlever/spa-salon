import axios from 'axios';

const BASE_URL = '/service/api/api';
const API_KEY = '011ba11bdcad4fa396660c2ec447ef14';

export const getGoodList = async () => {
    try {
        const response = await axios.post(BASE_URL, {
            ApiKey: API_KEY,
            MethodName: 'OSGetGoodList',
        });
        if (response.data.result === 0) {
            return response.data.data; 
        } else {
            console.error(response.data.resultdescription);
            return [];
        }
    } catch (error) {
        console.error('Ошибка при получении списка сертификатов:', error);
        return [];
    }
};

export const saveOrder = async (orderData) => {
    try {
        const response = await axios.post(BASE_URL, {
            ApiKey: API_KEY,
            MethodName: 'OSSale',
            CertificateId: orderData.certificateId,
            Name: orderData.name,
            Phone: orderData.phone,
            Email: orderData.email,
        });
        if (response.data.result === 0) {
            console.log('Заказ успешно сохранён:', response.data);
            return response.data;
        } else {
            console.error('Ошибка при сохранении заказа:', response.data.resultdescription);
            throw new Error(response.data.resultdescription);
        }
    } catch (error) {
        console.error('Ошибка при выполнении запроса saveOrder:', error);
        throw error;
    }
};
