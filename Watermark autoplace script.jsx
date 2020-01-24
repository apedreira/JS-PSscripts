//Setting rule units
    const defaultRulerUnits = app.preferences.rulerUnits;  
           app.preferences.rulerUnits = Units.PIXELS;
    
//Setting canvas and watermark (active layer) constiables
    const doc = app.activeDocument;  
    const layer = doc.activeLayer;  
    const width = doc.width.as('px');  
    const height =doc.height.as('px');  
    const bounds = app.activeDocument.activeLayer.bounds;  
    const layerWidth = bounds[2].as('px')-bounds[0].as('px');  
    const layerHeight = bounds[3].as('px')-bounds[1].as('px');  
    const layerRatio = layerWidth / layerHeight;  
           const newWidth = width;  
           const newHeight = ((1.0 * width) / layerRatio); 

//Resizing watermark (active layer) acording to canvas size
  const resizeWidthPercent = newWidth/layerWidth*35;  
  const resizeHeightPercent = newHeight/layerHeight*35;
        app.activeDocument.activeLayer.resize(resizeWidthPercent,resizeHeightPercent,AnchorPosition.BOTTOMLEFT);  
        
//Setting watermark (active layer) opacity
  const Opacity = 69; 
         activeDocument.activeLayer.opacity=Opacity;
       
//Slightly separating watermark from canvas edges
   const OffsetX = 100; 
   const OffsetY = -100; 
         layer.translate (OffsetX, OffsetY);
    
//Setting default unit tules
app.preferences.rulerUnits = defaultRulerUnits;  