import styles from './main.module.css'
import bugatti from '../../img/bugatti.png'
import bmw from '../../img/bmw.png'
import bmwBig from '../../img/BMW big.png'
import merc from '../../img/merc.png'
import tesla from '../../img/tesla.png'
export const Main = () => {
    return (
        <section className={styles.sect}>
            <div className={styles.container}>

<div className={styles.prezent}>
<h2 className={styles.name_company}>DriveShare</h2>
<div className={styles.list_auto}> 

    <img src={tesla} alt="bugatti" className={styles.img_auto_3}/>
    <img src={bmw} alt="bmw" className={styles.img_auto_2}/>
    <img src={bugatti} alt="car-bugatti" className={styles.img_bugatti}/>
    <img src={bmwBig} alt="bmw" className={styles.img_auto_2}/>
    <img src={merc} alt="mersedes" className={styles.img_auto_3}/>
      </div>

</div>
<h3 className={styles.main_text}> Innovative platform that offers a unique opportunity to rent cars from individuals around the world. <br /> 
Whether you need a car for a weekend out of town or a luxury car <br /> for a special occasion, we have the perfect option for everyone.</h3>
<button className={styles.button_catalog}>Go to catalog</button>
            </div>
        </section>
    )
}