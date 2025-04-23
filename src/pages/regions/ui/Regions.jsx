import { MainHeader, MainFooter, RegionList } from '../../../widgets'
import { HeroBlock } from '../../../shared'
import heroImg from '../../../shared/assets/servicespage_hero.jpg'
import s from './Regions.module.css'

export const Regions = () => {

    return(
        <div>
            <MainHeader/>
            <HeroBlock image={heroImg} heroName={"Регионы"}/>
            <RegionList/>
            <MainFooter/>
        </div>
    )
}