import s from './Reviews.module.css'
import { MainHeader, Review, MainFooter } from '../../../widgets'
import { HeroBlock } from '../../../shared'
import image from '../../../shared/assets/roomspage_hero.jpg'


export const Reviews = () => {

    return (
        <div>
            <MainHeader/>
            <HeroBlock image={image} heroTitle={"Отзывы"} heroDescript={"Наши отзывы"}/>
            <Review/>
            <MainFooter/>
        </div>
    )

}