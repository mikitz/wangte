// Function to calculate the output resolution
function calculateResolution(){
    // Get the width
    var width = document.getElementById("width").value
    // Get the height
    var height = document.getElementById("height").value
    // Get the PPI
    var PPI = document.getElementById("resolution").value
    // Format the Numbers
    var w = (width * PPI).toLocaleString()
    var h = (height * PPI).toLocaleString()
    // Set up the message to print
    var mResolution = `${w} x ${h} pixels`
    // Push the resolution to the output element
    document.getElementById("image_size").innerHTML = `<b>Output:</b> <i>${mResolution}</i>`
}

// Function to generate a random battle map from a seed
function generateBattleMap(){
    // GET USER INPUTS
        // Get the width
        var width = document.getElementById("width").value
        // Get the height
        var height = document.getElementById("height").value
        // Get the PPI
        var PPI = document.getElementById("resolution").value
    // CALCULATE DIMENSIONS
        var h = height * PPI
        var w = width * PPI
    // GENERATE IMAGE
        // GROUND
            // Define our canvas on which to "draw"
            var canvas = document.getElementById('floor')
            // Set the dimensions of the canvas
            canvas.height = h
            canvas.width = w
            // Get context for image manipulation
            var context = canvas.getContext('2d')
            // Change the color
            context.fillStyle = "#0000FF";
            // Draw the ground
            context.fillRect(0, 0, w, h)
        // SHRUB LAYER
            // Define our canvas on which to "draw"
            var canvas = document.getElementById('shrub')
            // Set the dimensions of the canvas
            canvas.height = h
            canvas.width = w
            // Get context for image manipulation
            var context = canvas.getContext('2d')
            // Change the color
            context.fillStyle = "#FF69B4";
            // Draw a shrub
            context.fillRect(w / 3, h / 3, w / 4, h / 4)
        // UNDERSTOREY

        // CANOPY

        // EMERGENT LAYER
        
        // GRID LAYER

        // MERGE ALL CANVASES TO ONE AND SAVE AS IMAGE
            // Set context for final image
            var c = document.getElementById('download')
            var context = c.getContext('2d')
            // Get all the layers
            var floor = document.getElementById('floor')
            var shrubs = document.getElementById('shrub')
            var understory = document.getElementById('under_storey')
            var canopy = document.getElementById('canopy')
            var emergentLayer = document.getElementById('emergent_layer')
            var grid = document.getElementById('grid')
            // Draw each canvas onto the final canvas
            context.drawImage(floor, 0, 0)
            context.drawImage(shrubs, 0, 0)
            context.drawImage(understory, 0, 0)
            context.drawImage(canopy, 0, 0)
            context.drawImage(emergentLayer, 0, 0)
            context.drawImage(grid, 0, 0)
            // Create an image
            var dataURL = c.toDataURL()
            // Create image object
            var img = new Image()
            img.onload = function(){
                document.getElementById('image').appendChild(img)
            }
            img.src = dataURL

        /* CIRCLE
        // Determine where to place the circle
        var centerX = w / 2;
        var centerY = h / 2;
        if (w < h) {
            var radius = w / 2;
        } else {
            var radius = h / 2;
        }

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        // Context stuff
        context.fillStyle = "#FF69B4";
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = "black";
        context.stroke();
        // Define the image
        var img = canvas.toDataURL("image/png") */
}

// Function to get the number from the seed
function getRandomSeed(){
    // Get the user's seed input
    var seedUser = document.getElementById("seed").value
    // Get a random seed
    var seed = new Math.seedrandom(seedUser)
    // Print it to the page
    document.getElementById('output').innerHTML = seed()
}

// Function to clear the canvas
function clearCanvas(){
    var canvas = document.getElementById('myCanvas')
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
}