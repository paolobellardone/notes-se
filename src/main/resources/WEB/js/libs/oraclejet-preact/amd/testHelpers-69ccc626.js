define(['exports', '@testing-library/preact'], (function(e,n){"use strict";e.getContents=async(e="gridcell")=>n.screen.findAllByRole(e),e.getItems=async(e="row")=>n.screen.findAllByRole(e),e.getRoot=async(e="grid")=>n.screen.findByRole(e),e.mouseCheckboxSelection=(e,t)=>{const i=n.screen.getAllByRole("img",{hidden:!0})[e];if(!i)throw new Error("Cannot find checkbox!");"undefined"!=typeof jest?n.fireEvent.click(i,t):setTimeout((()=>{n.fireEvent.click(i,t)}),100)},e.mouseItemSelection=(e,t)=>{n.fireEvent.click(e,t)}}));
//# sourceMappingURL=testHelpers-69ccc626.js.map