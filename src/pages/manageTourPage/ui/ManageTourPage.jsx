import s from './ManageTourPage.module.css'
import { MainFooter, MainHeader } from '../../../widgets'
import { ManageTours } from '../../../features'


export const ManageTourPage = () => {
    return (
        <div>
            <MainHeader />
            <ManageTours />
            <MainFooter />
        </div>
    )
}