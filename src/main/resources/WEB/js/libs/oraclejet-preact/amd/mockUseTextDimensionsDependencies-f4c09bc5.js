define(['exports'], (function(e){"use strict";e.setupUseTextDimensionsDependenciesMock=e=>{e.document.fonts||Object.defineProperty(global.document,"fonts",{writable:!0,configurable:!0,value:{ready:Promise.resolve()}}),e.SVGTextElement||(e.SVGElement.prototype.getBBox=jest.fn().mockReturnValue({x:0,y:-15,width:18,height:18}))}}));
//# sourceMappingURL=mockUseTextDimensionsDependencies-f4c09bc5.js.map