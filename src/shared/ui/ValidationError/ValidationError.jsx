import s from "./ValidationError.module.css";

export const ValidationError = (props) => { // warningText - string    isChanging - boolean     warningMessages - integer
    return (
        <span className={`${s.warningText} ${props.warningText ? s.show : ''} ${props.isChanging ? s.changing : ''}`}>
            {props.warningText ? props.warningMessages[props.warningText] : ""}
        </span>
    )
}