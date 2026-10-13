import './Input.scss';

export const Input = (props) => {
    return (
        <input
            className={`input ${props.className}`}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
        />
    )
}