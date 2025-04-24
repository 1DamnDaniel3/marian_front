import s from './HeroBlock.module.css'


export const HeroBlock = ({image, heroTitle, heroDescript}) => {
    return (
        <div className={s.HeroBlock}>
            <span>{heroTitle}</span>
            <h1>{heroDescript}</h1>
            <img src={image} alt="" />
        </div>
    )
}
