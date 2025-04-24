import { MainHeader, MainFooter, RegionList } from '../../../widgets'
import { HeroBlock } from '../../../shared'
import heroImg from '../../../shared/assets/servicespage_hero.jpg'
import s from './Regions.module.css'

export const Regions = () => {

    return(
        <div>
            <MainHeader/>
            <HeroBlock image={heroImg} heroTitle={"Регионы"} heroDescript={"Регионы"}/>
            <RegionList/>
            <MainFooter/>
        </div>
    )
}