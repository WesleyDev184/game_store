import { apiKey, apiBase } from '../../lib/rawg';

const games = async (req, res) => {
    const result = await fetch(`${apiBase}/games?key=${apiKey}&page_size=10`);
    const json = await result.json();

    res.status(200).json({
        list: json.results
    });
};

export default games;