const { Blog } = require ('../models/blogModels');

const postBlog = async (req, res) => {
    const { userName, image, blogName, blogDescription } = req.body;
    console.log('post dataaaaa')

    try{
        // if (!userName || !image || !blogName || !blogDescription) {
        //   return  res.status(400).json({
        //         "message":"fields are required",
        //         "success": false
        //     });
        // }

            const newBlog = new Blog(req.body);
            await newBlog.save(
                // function(e){
                //     if(e){
                //         console.log(e);
                //         // res.redirect(e.message);
                //     }else {
                //         res.redirect('/blog');
                //     }
                // }
            );
            // res.status(200).json({
            //     "message":"blog is created",
            //     "success": true,
            //     "data":newBlog
            // });
            res.redirect('/blog');
        
    }catch(e){
        console.log(e.message);
        // res.render(e.message);
        res.redirect(e.message);
        // res.status(500).json(e.message);
    //   return  res.send(e.message);
    }
};

const getBlog = async (req, res) => {

    const getDetails = [];
    try {
        const getBlog = await Blog.find({});
        // res.status(200).json({
        //     "message":"get all blogs",
        //     "success":true,
        //     "data": getBlog
        // });
        res.render('index', { getDetails: getBlog})
    }catch(e){
        console.log(e);
        res.send(e);
        res.status(500).json({statusCode:500})
    }
}

const updBlog = async (req, res) => {
    const cond = {userName: req.body.userName};
    const upd = req.body;
    try {
        const updtBlog = await Blog.findOneAndUpdate(cond, upd, { new:true });
        res.status(200).json({
            "message":"updated successfully",
            "success":true,
            "data":updtBlog
        });
    }catch(e){
        console.log(e);
        res.send(e);
        res.status(500).json({statusCode:500});
    }
}

module.exports = { postBlog, getBlog, updBlog };

