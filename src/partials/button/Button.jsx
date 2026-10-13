import './Button.scss';

export const Button = (props) => {
    return (
        <button
            className={`btn ${props.className ?? 'btn-primary'}`}
            disabled={props.isDisabled}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}