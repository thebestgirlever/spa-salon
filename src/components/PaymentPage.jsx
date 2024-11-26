import styles from './PaymentPage.module.css';

function PaymentPage () {
    return (
        <div className={styles.root}>
            На вашу почту высланны данные об оплате!
            <br/><br/>Спасибо!
            </div>
    );
}

export default PaymentPage;