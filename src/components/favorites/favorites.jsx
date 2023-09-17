import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import stylesFav from "./favorites.module.css";
import styles from "../home/home.module.css";
export const Favorit = () => {
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (evt) => {
    const id = Number(evt.currentTarget.dataset.modal);
    const cardModal = data.find((el) => el.id === id);
    setModalData(cardModal);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
  };


  const [dataFavorites, setDataFavorites] = useState(null);
  const data = useSelector((state) => state.data);
  const favorites = useSelector((state) => state.favorites);



  useEffect(() => {
    const favoritesMassive = data.filter((el) => favorites.includes(el.id));
    console.log(favoritesMassive)
    setDataFavorites(favoritesMassive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <section className={stylesFav.sect}>
         {showModal && (
        <div className={styles.bg_modal}>
          <div className={styles.modalka}>
            <div className={styles.cont_modal}>
              <img
                src={
                  modalData.img ||
                  "https://www.iphones.ru/wp-content/uploads/2015/03/foto-big.jpg"
                }
                alt={modalData.make}
                className={styles.img_car_modal}
              />
              <div className={styles.cont_for_main_text_modal}>
                <h2 className={styles.main_text_modal}>{modalData.make}.</h2>
                <span className={styles.main_text_modal_span}>
                  {modalData.type},
                </span>
                <h2 className={styles.main_text_modal}>{modalData.year}</h2>
              </div>
              <div className={styles.cont_for_punkts_modal}>
                <p className={styles.punkts_modal}>{modalData.address}</p>
                <p className={styles.punkts_modal}>id:{modalData.id}</p>
                <p className={styles.punkts_modal}>year:{modalData.year}</p>
                <p className={styles.punkts_modal}>Type:{modalData.type}</p>
                <p className={styles.punkts_modal}>
                  fuelConsumption:{modalData.fuelConsumption}
                </p>
                <p className={styles.punkts_modal}>
                  engineSize:{modalData.engineSize}
                </p>
              </div>
              <h3 className={styles.description_text_modal}>
                {modalData.description}
              </h3>
              <div className={styles.cont_for_accesories}>
                <h2 className={styles.accesories_main_text}>
                  Accessories and functionalities:
                </h2>
                <div className={styles.cont_wrap_punkts}>
                  <p className={styles.accesories_punkts}>
                    {modalData.functionalities[1]}
                  </p>
                  <p className={styles.accesories_punkts}>
                    {modalData.functionalities[2]}
                  </p>
                  <p className={styles.accesories_punkts}>
                    {modalData.functionalities[3]}
                  </p>
                  <p className={styles.accesories_punkts}>
                    {modalData.functionalities[4]}
                  </p>
                </div>
              </div>
              <div className={styles.rental_conditions_cont}>
                <h2 className={styles.rental_conditions_main_text}>
                  Rental Conditions:{" "}
                </h2>
                <div className={styles.wrap_rental_conditions_punkts_container}>
                  <p className={styles.rental_conditions_punkts}>
                    {modalData.rentalConditions}
                  </p>
                  <p className={styles.rental_conditions_punkts}>
                    Mileage:<span>{modalData.mileage}</span>
                  </p>
                  <p className={styles.rental_conditions_punkts}>
                    Price:<span>{modalData.rentalPrice}</span>
                  </p>
                </div>
              </div>
              <span onClick={handleCloseModal} className={styles.close_btn}>
                X
              </span>
              <button className={styles.button_zwonok}>Rental Car</button>
            </div>
          </div>
        </div>
      )}
      <div className={stylesFav.container_favorites}>
        {dataFavorites && dataFavorites.map((el) => (
          <div key={el.id} className={styles.card_car}>
            <div className={styles.cont_for_img}>
              <img
                src={
                  el.img ||
                  "https://www.iphones.ru/wp-content/uploads/2015/03/foto-big.jpg"
                }
                alt={el.make}
                className={styles.img_card}
              />
            </div>
            <div className={styles.cont_for_sell}>
              <div className={styles.triple_info_car}>
                <h2 className={styles.text_model_car}>{el.make}</h2>
                <h2 className={styles.text_model_car_span}>{el.model},</h2>
                <h2 className={styles.text_model_car}>{el.year}</h2>
              </div>
              <h2 className={styles.text_model_car}>{el.rentalPrice}</h2>
            </div>
            <div className={styles.cont_for_description}>
              <p>{el.address}</p>
              <p>{el.rentalCompany}</p>
              <p>{el.type}</p>
              <p>{el.make}</p>
              <p>{el.id}</p>
            </div>
            <button
              className={styles.button_learnmore}
              data-modal={el.id}
              onClick={handleOpenModal}
            >
              Learn More{" "}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
