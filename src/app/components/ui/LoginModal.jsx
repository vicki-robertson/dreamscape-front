import React from 'react';

export default function LoginModal() {
  return (
    <section className='w-80 h-[225px] desktop:h-[200px] desktop:w-[500px] bg-light-yellow rounded-3xl flex flex-col items-center justify-center'>
        <h3 className='text-m text-blue w-[200px] desktop:w-80 text-center pb-7'>{response.data.message}</h3>
    </section>
  )
}

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(modalTimeout);
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
  };
  
  const cardRoles = ["PASADO", "PRESENTE", "FUTURO"];

  return (
    <main className="bg-purple-medium pt-10 px-10">
      <TarotDesk/>
      {showModal && <Modal onClose={handleModalClose} />}
    </main>
  );
};
