import React, { useEffect } from 'react';
import styles from './LoginModal.css';

export default function LoginModal({ message, onClose }) {
  useEffect(() => {
    if (message) {
      const modalTimeout = setTimeout(() => {
        onClose();
      }, 4000); 

      return () => clearTimeout(modalTimeout);
    }
  }, [message, onClose]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`modal ${message ? 'modal--show' : ''}`} onClick={handleClose}>
      <section className={`${styles.modal__content} w-80 h-[225px] desktop:h-[200px] desktop:w-[500px] bg-light-yellow rounded-3xl flex flex-col items-center justify-center`} onClick={(e) => e.stopPropagation()}>
        <h3 className='text-m text-blue w-[200px] desktop:w-80 text-center pb-7'>{message}</h3>
      </section>
    </div>
  );
}