import { MainHeader, MainFooter } from '../../../widgets'
import { SetUsers } from '../../../features'
import s from './ManageUsers.module.css'

export const ManageUsers = () => {

    return(
        <div className={s.ManageUsers}>
            <MainHeader/>
                <SetUsers/>
            <MainFooter/>
        </div>
    )

}