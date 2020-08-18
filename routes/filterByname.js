const express = require('express');
const router = express.Router();

const courses = [
    {id: 1, name: 'Argentina', link: 'https://restcountries.eu/data/arg.svg', population:"1,00,0000", region:"america"},
    {id: 2, name: 'Australia', link: 'https://restcountries.eu/data/aus.svg', population:"1,00,0000", region:"australia"},
    {id: 3, name: 'Belgium', link: 'https://restcountries.eu/data/bel.svg', population:"1,00,0000", region:"europe"},
    {id: 4, name: 'Bhutan', link: 'https://restcountries.eu/data/btn.svg', population:"1,00,0000", region:"asia"},
    {id: 5, name: 'Malaysia', link: 'https://restcountries.eu/data/mys.svg', population:"1,00,0000", region:"asia"},
    {id: 6, name: 'Canada', link: 'https://restcountries.eu/data/can.svg', population:"1,00,0000", region:"america"},
    {id: 7, name: 'Columbia', link: 'https://restcountries.eu/data/col.svg', population:"1,00,0000", region:"america"},
    {id: 8, name: 'Croatia', link: 'https://restcountries.eu/data/hrv.svg', population:"1,00,0000", region:"europe"},
    {id: 9, name: 'Denmark', link: 'https://restcountries.eu/data/dnk.svg', population:"1,00,0000", region:"europe"},
]


 router.get('/:region', (req, res)=>{
     let result=[];  
     console.log(req.params);
     let course = courses.filter(c=> c.region == req.params.region);
     console.log(course);
  
     if(!course) res.status(404).send('course not found')
  
       result.push(course);
       res.send(result);
   });

   module.exports = router;