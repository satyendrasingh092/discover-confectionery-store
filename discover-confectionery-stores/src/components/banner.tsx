

import Styles from './banner.module.css';
import { BannerPropsInterface } from './banner.types';

export default function Banner(props:BannerPropsInterface){
    const {buttonText,btnClickHandler} = props;
    return( 
        <div className={Styles.container}> 
            <h1 className={Styles.title}>
                <span className={Styles.title1}>Cake</span>{" "}
                <span className={Styles.title2}>Connoisseur</span>
            </h1>
            <p className={Styles.subtitle}>
                Discover your local bakeries!
            </p>
            <div>
                <button className={Styles.btn} onClick={btnClickHandler}>{buttonText}</button>
            </div>
        </div>
    )
}