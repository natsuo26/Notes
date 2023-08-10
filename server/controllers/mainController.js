
//get homepage
exports.homepage=async(req,res)=>{
    
    const locals={
        title: 'NodeJS Notes',
        desription: 'Free NodeJs Notes App'
    }
    res.render('index',{
        locals,
        layout:'../views/layouts/front-page'
    });
}
//get about
exports.about=async(req,res)=>{
    
    const locals={
        title: 'About-NodeJS page',
        desription: 'Free NodeJs Notes App'
    }
    res.render('about',locals);
}