import { useEffect } from 'react'
import { useNavigate, useLocation  } from 'react-router-dom'
import { MainHeader, MainFooter, RegionList, ActivitiesList, TourDetails } from '../../../widgets'
import { Request } from './Request'
import { HeroBlock } from '../../../shared'
import { resetCustomTour } from '../model/CustomSlice'
import image from '../../../shared/assets/roomspage_hero.jpg'
import partyImg from '../../../shared/assets/Party.svg'
import s from './Custom.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRegion, stepUp } from '../model/CustomSlice'

export const Custom = () => {

    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const { step } = useSelector(state => state.customTours)


    const navigate = useNavigate(); 

    // Редирект через 2 секунды, если step === 4
    useEffect(() => {
        window.scrollTo(0, 0);
        if (step === 4) {
            const timer = setTimeout(() => {
                dispatch(resetCustomTour());
                navigate('/Home');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [step, dispatch, navigate, pathname]);


    return (
        <div className={s.custom}>

            <MainHeader />
            <HeroBlock image={image} heroTitle={"Индивидуальные туры"} heroDescript={"Для вас"} />


            <div className={s.content}>
                {step === 0 && <RegionList onClick={(region_id, region_name) => {
                    dispatch(setSelectedRegion({ id: region_id, name: region_name }))
                    dispatch(stepUp(1))
                }} children={"Выбрать регион"} />}
                {step === 1 && <ActivitiesList />}
                {step === 2 && <TourDetails className={s.TourDetails} />}
                {step === 3 && <Request />}
                {step === 4 &&
                    <div className={s.finish}>
                        <img src={partyImg} alt={partyImg} />
                        <h1>Заявка отправлена!</h1>
                    </div>}

            </div>


            <MainFooter />

        </div>
    )

}