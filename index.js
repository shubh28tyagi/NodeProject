const express = require('express');
const app = express();

const briefs=[
    {   'id':1,
        'title':'Elections in 5 states',
        'details':'Elections are around in 5 states which are Uttar Pradesh, Uttarakhand, Punjab, Goa and Manipur'
    },
    {   'id':2,
        'title':'Upcoming Budget',
        'details':'Budget for AY 2022-2023 will be announced on Febraury 1, 2022.'
    },
    {   'id':3,
        'title':'Corona Virus spreading',
        'details':'Corona Virus is spreading in the nation.'
    },
    {   'id':4,
        'title':'Cold wave grips North India',
        'details':'Severe cold conditions are prevailing in north India.'
    },
    {   'id':5,
        'title':'Indian Cricket team announced for WI tour',
        'details':'Indian team for WI tour has been announced'
    }
]

app.get('/api/briefs', (req, res)=>{
    console.log("inside briefs")
    res. setHeader("Access-Control-Allow-Origin", "*")
    res.status(201).send([briefs]);
})

app.get('/api/briefs/:id', (req, res)=>{
    const brief = briefs.filter(b=> b.id === parseInt(req.params.id));
    if(brief.length ==0) res.status(404).send('The breif corrosponding to requested id is not found');
    res.status(201).send(brief);
})

app.listen(3500, ()=> console.log("Node app is running on port 3500"));