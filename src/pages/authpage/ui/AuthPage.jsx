import { Authentication } from "../../../widgets"
import s from "./AuthPage.module.css"


export const AuthPage = (props) => {
    return (
        <div className={s.wrapper}>
            <Authentication className={s.r_form} />
        </div>
    )
}