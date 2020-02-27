module.exports = function(app) {
    const getApi = require('../controller/blogController');

    app.route('/blog')
    .get(getApi.getBlog)
    .post(getApi.postBlog);

    app.route('/blog/:username')
    .put(getApi.updBlog);
}