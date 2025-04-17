import s from './HeroBlock.module.css'


export const HeroBlock = ({image, heroName}) => {
    return (
        <div className={s.HeroBlock}>
            <span>{heroName}</span>
            <h1>{heroName}</h1>
            <img src={image} alt="" />
        </div>
    )
}
