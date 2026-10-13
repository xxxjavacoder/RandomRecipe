import './Select.scss';

export const Select = ({className, value, onChange, options, defaultText}) => {
    return (
        <select className={`select ${className}`} value={value} onChange={onChange}>
            <option value="default">{defaultText}</option>
            {options.map((item) => (
                <Option key={item.id} value={item.value} label={item.label} />
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