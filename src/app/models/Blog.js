const db = require('../../config/db')

module.exports = {
    create(data, callback) {
        const query = `
            INSERT INTO bible_study (
                name,
                email,
                phone,
                city,
                uf
            ) VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `

        const values = [
            data.name,
            data.email,
            data.phone,
            data.city,
            data.uf
        ]

        db.query(query, values, function(err, results) {
            if (err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    }
}