import styles from "./home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCars,
  setData,
  setFavor,
  setFirma,
  setPrice,
  setProbeg,
  setStartProbeg,
} from "../../store/collectSlice";
export const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const priceSearch = useSelector((state) => state.price);
  const firmaSearch = useSelector((state) => state.firma);
  const probegSearch = useSelector((state) => state.probeg);
  const probegStartSearch = useSelector((state) => state.startProbeg);
  let dataRender = data;
  const favorites = useSelector((state) => state.favorites);

  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (evt) => {
    const id = Number(evt.currentTarget.dataset.modal);
    const cardModal = data.find((el) => el.id === id);
    setModalData(cardModal);
    setShowModal(true);
  };

  const funcSearching = () => {
    const searchMassive = data.filter((el) => el.make === firmaSearch);
    const searchMassiveTwo = searchMassive.filter(
      (el) => el.rentalPrice === priceSearch
    );
    const searchMassiveThree = searchMassiveTwo.filter(
      (el) => el.mileage >= probegStartSearch && el.mileage <= probegSearch
    );
    dispatch(setData(searchMassiveThree));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  useEffect(() => {
    dispatch(setData([]))
    setPage(1)
    dispatch(getCars({ page: page }));
    setPage((prevPage) => prevPage + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.sect}>
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
      <div className={styles.container}>
        <div className={styles.input_container}>
          <button
            className={data.length === 0 ? styles.return_button : styles.return_none}
            onClick={() => {
              dispatch(getCars({ page: "1" }));
              setPage(2)
            }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/006/095/886/small/undo-icon-style-free-vector.jpg"
              alt="return"
              className={styles.img_return}
            />
          </button>
          <ul className={styles.ul_search}>
            <li className={styles.li_count}>
              <label htmlFor="carbrand" className={styles.label_select}>
                Car brand
              </label>
              <select
                name="carbrand"
                id="carbrand"
                className={styles.select_input}
                onChange={(evt) => {
                  dispatch(setFirma(evt.currentTarget.value));
                }}
              >
                <option value="HUMMER">HUMMER</option>
                <option value="Reno">Reno</option>
                <option value="BMW">BMW</option>
              </select>
            </li>
            <li className={styles.li_count}>
              <label htmlFor="price" className={styles.label_select}>
                Price/1 hour
              </label>
              <select
                name="price"
                id="price"
                className={styles.select_input}
                onChange={(evt) => {
                  dispatch(setPrice(evt.currentTarget.value));
                }}
              >
                <option value="$25">25$</option>
                <option value="$35">35$</option>
                <option value="$40">40$</option>
                <option value="$45">45$</option>
                <option value="$50">50$</option>
                <option value="$55">55$</option>
                <option value="$75">75$</option>
                <option value="$100">100$</option>
                <option value="$150">150$</option>
                <option value="$200">200$</option>
                <option value="$250">250$</option>
                <option value="$300">300$</option>
                <option value="$500">500$</option>
              </select>
            </li>
            <li className={styles.li_input}>
              <label htmlFor="km" className={styles.label_select}>
                Сar mileage / km
              </label>
              <div className={styles.from_to_wrap}>
                <input
                  type="text"
                  placeholder="From"
                  id="km"
                  className={styles.input_from}
                  onChange={(evt) => {
                    dispatch(setStartProbeg(Number(evt.currentTarget.value)));
                  }}
                />
                <input
                  type="text"
                  placeholder="To"
                  id="km"
                  className={styles.input_to}
                  onChange={(evt) => {
                    dispatch(setProbeg(Number(evt.currentTarget.value)));
                  }}
                />
              </div>
            </li>
          </ul>
          <button className={styles.button_search} onClick={funcSearching}>
            Search
          </button>
        </div>
        <div className={styles.catalog_container}>
          {dataRender.map((el) => (
            <div key={el.id} className={styles.card_car}>
              <button
                data-id={el.id}
                className={styles.like_img_button}
                onClick={(evt) => {
                  dispatch(setFavor(Number(evt.currentTarget.dataset.id)))
                  console.log(favorites);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={
                    favorites.includes(el.id)
                      ? styles.fill_blue
                      : styles.fill_none
                  }
                >
                  <path
                    d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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
        <button
          onClick={() => {
            dispatch(getCars({ page: page }));
            setPage((prevPage) => prevPage + 1);
          }}
          className={styles.load__btn}
        >
          Load more
        </button>
      </div>
    </section>
  );
};
