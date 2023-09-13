import styles from "./home.module.css";

export const Home = () => {
  return (
    <section className={styles.sect}>
      <div className={styles.container}>
        <div className={styles.input_container}>
          <ul className={styles.ul_search}>
            <li className={styles.li_count}>
              <label htmlFor="carbrand" className={styles.label_select}>Car brand</label>
              <select name="carbrand" id="carbrand" className={styles.select_input}>
                <option value="HUMMER">HUMMER</option>
              </select>
            </li>
            <li className={styles.li_count}>
              <label htmlFor="price" className={styles.label_select}>Price/1 hour</label>
              <select name="price" id="price" className={styles.select_input}>
                <option value="20">20$</option>
              </select>
            </li>
            <li className={styles.li_input}>
              <label htmlFor="km" className={styles.label_select}>Сar mileage / km</label>
              <div className={styles.from_to_wrap}>
                <input type="text" placeholder="From" id="km" className={styles.input_from}/>
                <input type="text" placeholder="To" id="km" className={styles.input_to}/>
              </div>
            </li>
          </ul>
          <button className={styles.button_search}>Search</button>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
};
