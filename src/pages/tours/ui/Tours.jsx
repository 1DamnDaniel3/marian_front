import { MainHeader, MainFooter, ToursList } from '../../../widgets'
import image from '../../../shared/assets/image.png'
import { HeroBlock } from '../../../shared'

import s from './Tours.module.css'

export const Tours = () => {


    return (
        <div className={s.Tours}>
            <MainHeader />

            <HeroBlock image={image} heroTitle={"Готовые туры"} heroDescript={"Лучшие туры"}/>
            <ToursList/>

            <MainFooter />
        </div>
    )

}