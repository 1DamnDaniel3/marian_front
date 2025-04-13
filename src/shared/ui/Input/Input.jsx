import s from './Input.module.css'

export const Input = (props) => {
    return (
        <input
            className={`${s.input} ${props.className || ""}`}
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            style={props.style}
            />
    )
}