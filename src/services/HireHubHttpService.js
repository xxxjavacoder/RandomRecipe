import {useHttp} from '../hooks/useHttp.js';

const API_URL = 'http://localhost:3000';

const useHireHubService = () => {
    const {loading, request, error} = useHttp();

    const getVacancies = async () => {
        const url = `${API_URL}/vacancies`;
        const response = await request(url);
        return await response;
    }

    const postVacancy = async (body) => {
        const url = `${API_URL}/vacancies`;
        const response = await request(url, body, "POST",{'Accept': 'application/json', 'Content-Type': 'application/json'});
        return await response;
    }

    return {
        getVacancies,
        postVacancy,
        loading,
        request,
        error
    }
}

export default useHireHubService;
