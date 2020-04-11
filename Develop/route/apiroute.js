const data = require("../db/db.json");
const fs = require("fs");


module.exports = function(app){
    app.get('/api/notes', function (req, res){
        //making comment for later, might be two dots.
        fs.readFile("./db/db.json", "utf-8", (err, notesReponse) => {
            let allNotes = JSON.parse(notesReponse);
            res.json(allNotes)
            //log all notes
            console.log("allNotes");
            
        })
    })
    app.post('/api/notes', function (req, res){
        fs.readFile('./db/db.json', "utf-8", (err, notesReponse) => {
            let allNotes = JSON.parse(notesReponse);
            const newNote = req.body;
            if(allNotes.length > 0){
                newNote.id = allNotes[allNotes.length - 1].id + 1;
            }else{
                newNote.id = 1;
            }
            allNotes = [...allNotes, newNote];
            console.log("allNotes", allNotes);
            
            fs.writeFile("./db/db.json", JSON.stringify(allNotes), err => {
                if (err) throw res.status(500).json(err);
                res.json(allNotes);
            } ) 
    })
})

//delete
//app.delete
//path= api/note/:id --- :id is a string, convert to number
//loop through them, find id to delete
//once i delete/filter, use fs.writefile write updated variable allnotes.

app.delete('/api/notes/:id', function (req, res){
    fs.readFile('./db/db.json', "utf-8", (err, notesReponse) => {
        let allNotes = JSON.parse(notesReponse);
        const noteIndex = allNotes.findIndex(allNotes => allNotes.id === parseInt(req.params.id));
    if (noteIndex === -1 ){
        return res.sendStatus(404);
    }
    allNotes.splice(noteIndex, 1);
    fs.writeFile("./db/db.json", JSON.stringify(allNotes), err => {
        res.json(allNotes);
    } ) 
})
  
})
}
