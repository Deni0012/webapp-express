const connection = require('../data/movies_db');

function index(req, res) {

    const sql = 'SELECT * FROM movies_db.movies';

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                errorMessage: "Database disconnected!"
            });

        };


        res.json(results);


    });

};

function show(req, res) {
    const { id } = req.params;

    const sqlMovie = 'SELECT * FROM movies_db.movies WHERE id = ?';

    conn.query(sqlMovie, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                errorMessage: "Database diconnected!"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                errorMessage: 'Record Not Found!',
                id
            });
        }

        const movie = results[0];

        const sqlReviews = 'SELECT * FROM movies_db.reviews WHERE movie_id = ?';

        conn.query(sqlReviews, [id], (err, reviewResults) => {
            if (err) {
                return res.status(500).json({
                    errorMessage: "Database diconnected!"
                });
            }

            movie.reviews = reviewResults;
            res.json(movie);
        });
    });
};




module.exports = { index, show };