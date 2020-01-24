          
const layer = activeDocument.activeLayer; //Grab the currently selected layer
    
// Calculate length and width based on the rectangular bounds of the selected layer
const oriHeight = layer.bounds[3].value - layer.bounds[1].value; //Grab the original width
const oriWidth = layer.bounds[2].value - layer.bounds[0].value; //Grab the original width
const desWidth = 2240; //Desired width
const diffWidth = oriWidth - desWidth; //Difference to rest 

const per  = (desWidth *100) /oriWidth;

if(oriWidth > desWidth) {
layer.resize(per,100, AnchorPosition.BOTTOMCENTER);


}

const newHeight =  layer.bounds[3].value - layer.bounds[1].value;

const heightReduction=  newHeight*100/oriHeight;