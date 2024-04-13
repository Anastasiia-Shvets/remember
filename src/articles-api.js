import axios from "axios";

axios.defaults.baseURL = "<https://hn.algolia.com/api/v1>";
const fetchArticlesWithTopic = async topic => {
    const respons = axios.get(`/search?query=${topic}`);
    return respons.data.hits;
}
export default fetchArticlesWithTopic