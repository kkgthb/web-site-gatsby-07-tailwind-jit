module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
		`gatsby-transformer-remark`,
        `gatsby-plugin-postcss`,
    ]
};
