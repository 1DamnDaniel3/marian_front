import { HeroBlock } from "../../../shared";
import { MainHeader, Advantages, MainFooter } from "../../../widgets";
import { Info } from "./Info";
import { Team } from "./Team";
import {aboutAdvantages, otherAdvantages} from '../model/advantagesData'

import heroImg from '../../../shared/assets/aboutpage_hero.jpg'
import s from './About.module.css'


export const About = () => {

    return(
        <div className={s.AboutPage}>
            <MainHeader/>
            <HeroBlock image={heroImg} heroName={"О нас"}/>
            <Info/>
            <h1 className={s.whyUs}> Почему выбирают нас </h1>
            <Advantages items={aboutAdvantages} className={s.advantages}/>
            <Team/>
            <Advantages items={otherAdvantages} className={s.otherAdv} cardClassName={s.card}/>
            <MainFooter/>
        </div>
    )
}