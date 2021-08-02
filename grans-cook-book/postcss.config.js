

module.exports{
    plugins
    [
        "tailwindcss",
        "postcss-flexbugs-fixes",
        [
            "postcss-preset-env",
            {
                autoprefixer:
                {
                    flexbox:"no2009"
                },
                stage:3,
                features:
                {
                    "custom-properties":false
                }
            }
        ]
    ]
}