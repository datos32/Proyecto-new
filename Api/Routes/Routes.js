const ERoutes = require('express');
const Routes = ERoutes.Router();
const Register = require('../Schema/Register');
const Categoria =  require('../Schema/Categoria');
const Noticias = require('../Schema/Noticias');
const xss = require('xss');

Routes.get("/",(req,res)=>
{
    
    res.status(500).json({work :"ad"});
});

Routes.post('/api/login',(req,res)=>
{
   let {correo,password} = req.body;

   
     const mailVerif = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

     const passVerif = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;


    if(mailVerif.test(correo) && passVerif.test(password))
    {

    Register.findOne({correo:correo},(err,date)=>
     {
         if(date != null)
         {
            if(date.correo == correo && date.password == password)
            {
                res.status(200).json({state:date.state,range:date.range,nombre : date.nombre,error : 'Connected!'});
                
            }else
            {
                res.status(200).json({state : false,error : 'Error de autenticacion!'});
                
            }
         }
         else
         {
             res.status(200).json({state : false,error : 'Error de autenticacion!'});
             
         }
         
     });
   
    }
    else
    {
        res.status(200).json({state : false,error : 'Error de autenticacion!'});
                
    }
   
});

Routes.post('/api/register',(req,res)=>
{
   let {nombre,apellido,correo,password} = req.body;

   let register = new Register();
   register.nombre = nombre;
   register.apellido = apellido;
   register.correo = correo;
   register.password = password;
   register.state = false;
   register.range = 0;

    register.save(register,(err,date)=>{
        console.log(date);
    });

    res.status(200).json({Registro:"Exitoso!"});

});

Routes.post('/api/create-notice',(req,res)=>
{
   let {tituloNoticia,
    categoria,
    descripcionBreve,
    descripcionDetallada,
    imagenPrincipal,
    autor,
    fecha,
    principalPortada,
    principalCategoria} = req.body;

    Noticias.find({tituloNoticia:tituloNoticia},(error,date)=>
    {


        if(date[0] != null && (tituloNoticia == date[0].tituloNoticia))
        {
            
            res.status(200).json({
                status :true,
                message : "Noticia Existente!"
            });

        }else
        {

            let new_noticia = new Noticias();
            new_noticia.tituloNoticia = tituloNoticia;
            new_noticia.descripcionBreve = descripcionBreve;
            new_noticia.descripcionDetallada = descripcionDetallada;
            new_noticia.imagenPrincipal = imagenPrincipal;
            new_noticia.categoria= categoria;
            new_noticia.autor = autor;
            new_noticia.fecha = fecha;
            new_noticia.viewport = principalPortada;
            new_noticia.viewindex = principalCategoria;
        
        
        
            new_noticia.save(new_noticia,(err,date)=>
            {
                if(date != null)
                {
                    res.status(200).json({
                        status :true,
                        message : "Noticia Agregada!"
                    });
                }else
                {
                    res.status(200).json({
                        message : "Error al agregar noticia!"
                    });
                }
            });

        }
    });
});

Routes.post('/api/list-notice',(req,res)=>
{
    Noticias.find({},(error,date)=>
    {
        date.map(date=>console.log(date.tituloNoticia));
        res.status(200).json(date);
    });
});

Routes.post('/api/notice/:id',(req,res)=>
{
    Noticias.find({_id:req.params.id},(error,date)=>
    {
        date.map(date=>console.log(date.tituloNoticia));
        res.status(200).json(date[0]);
    });
});

Routes.post('/api/list-categoria',(req,res)=>
{

    
    Categoria.find({},(err,date)=>
    {
        res.status(200).json(date);

    })
});

Routes.post('api/delete-notice/:id',(req,res)=>
{
   let {usuario,password} = req.body;

    console.log(usuario);

    res.status(200).json({name:"teste"});

});

Routes.post('api/update-notice',(req,res)=>
{
   let {usuario,password} = req.body;

    console.log(usuario);

    res.status(200).json({name:"teste"});

});

Routes.post('api/create-category',(req,res)=>
{
   let {categoria,descripcion} = req.body;

    console.log(categoria);
    console.log(descripcion);
   if(categoria != null && descripcion != null)
   {
       new_categoria =  new Categoria();

       new_categoria.categoria = categoria;
       new_categoria.descripcion = descripcion;


       new_categoria.save(new_categoria,(err,data)=>
       {
           console.log(data);
           console.log(err);

           res.status(200).json({name:"teste"});
       });
   }



});

Routes.post('api/delete-category',(req,res)=>
{
   let {usuario,password} = req.body;

    console.log(usuario);

    res.status(200).json({name:"teste"});

});

Routes.post('api/update-category',(req,res)=>
{
   let {usuario,password} = req.body;

    console.log(usuario);

    res.status(200).json({name:"teste"});

});

Routes.post('api/list-notice-category/:categoria',(req,res)=>
{

    console.log(req.params);

    Noticias.find({categoria:req.params.categoria},(err,data)=>
    {
        res.status(200).json({date:data});
    });


});

module.exports =  Routes;