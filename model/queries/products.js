let queries = Object.create(null)

queries = {
    GET_PRODUCTS: `SELECT * FROM PRODUCTS`,

    GET_PRODUCTS_BY_CATEGORY_ID: `
        SELECT
            pro.p_id,
            pro.name,
            pri.price as price,
            cat.name as category
        FROM products pro
            INNER JOIN prices pri
                ON pro.p_id = pri.product_id
            INNER JOIN categories cat
                ON pro.category = cat.c_id
        WHERE cat.c_id = $1
        `,

    NEXT: 'TEXT'
}

module.exports = queries