const express = require("express");

// Config
const PORT = 1337;
const app = express();

const db = [
    {id: 1, title: "svamp soppa", 
ingrediens: ["svamp", "onion"], 
instruction: "skär svamp i bitar, koka, klart!"},
{id: 2, title: "tofu gryta", 
ingrediens: ["tofu", "gryta"], 
instruction: "skär tofu i bitar, koka, klart!"}

]


// Routes
// show all recipes
app.get("/recipes", (req,res) => {
    res.send(db);
});

// show one recipe by id
app.get("/recipes/:id", (req,res) => {
    // which id should be found?
    const { id } = req.params;

    // did we find the recipe?
    const foundRecipe = db.find(recipe => recipe.id === Number(id));

    if (!foundRecipe) {
        return res.send({message: "Recipe not found"})
    }

    // recipe found
    res.send(foundRecipe);
});

// create one recipe
app.post("/recipes", (req,res) => {
    res.send(`NOT IMPLEMENTED YET`);
});

// update one recipe by id
app.post("/recipes/:id", (req,res) => {
    res.send(`NOT IMPLEMENTED YET`);
});

// delete one recipe by id
app.delete("/recipes/:id", (req,res) => {
    // which recipe to delete?
    const { id } = req.params;

    // delete it ...
    const indexToDelete = db.findIndex(recipe => recipe.id === Number(id));
    
    if (indexToDelete < 0 ) { 
        return res.send(`No such recipe to delete`);
    }

    db.splice(indexToDelete, 1);

    res.send(`success`);
});



// Starting server..
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
