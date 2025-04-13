import s from './Button.module.css'

export const Button = (props) => {
    return (
        <button
            className={`${s.defaultButton} ${props.className || ""}`}
            onClick={props.onClick}
            style={props.style}
        >
            {props.children}
            {props.image && (
                <img style={{
                    width: props.imgWidth,
                    height: props.imgHeight,
                }}
                    src={props.image}
                    alt={props.alt} />
            )}
        </button>
    )

}