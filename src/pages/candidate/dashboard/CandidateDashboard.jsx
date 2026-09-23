import {useEffect, useState} from 'react';
import useHireHubService from "../../../services/HireHubHttpService.js";

function CandidateDashboard() {

    const [vacancies, setVacancies] = useState([]);
    const {getVacancies} = useHireHubService();

    const loadVacancies = () => {
        getVacancies()
            .then(onVacanciesLoaded);
    }

    const onVacanciesLoaded = (vacancies) => {
        setVacancies(vacancies);
    }

    useEffect(() => {
       loadVacancies();
    }, [])

    const vacanciesView = vacancies.map(item => <View key={item.id} {...item} />);

    return (
        <div>
            {vacanciesView}
        </div>
    )
}

const View = ({id, title, description, localization, type}) => {
    return (
        <div key={id}>
            <h2>{title}</h2>
            <div>{type}: {localization}</div>
            <div>{description}</div>
        </div>
    )
}

export default CandidateDashboard;