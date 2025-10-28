module.exports = {
    // The entry point for the build process
    entry: './src/index.html',

    // Output configuration
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },

    // Development server configuration
    devServer: {
        contentBase: './dist',
        open: true,
        port: 3000,
    },

    // Module rules for processing files
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.tex$/,
                use: 'latex-loader',
            },
        ],
    },

    // Plugins for additional functionality
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],

    // Optimization settings
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    // Development mode settings
    mode: 'development',
};