import './Select.scss';

export const Select = (props) => {
    return (
        <select className={`select ${props.className}`} value={props.value} onChange={props.onChange}>
            {props.options.map((item) => (
                <Option key={item.value} value={item.value} label={item.label} />
            ))}
        </select>
    );
};

const Option = ({ value, label }) => {
    return (
        <option value={value}>
            {label}
        </option>
    );
};