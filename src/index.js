import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

let width = getScrollbarWidth();
// width.toString();

document.getElementsByTagName("body")[0].style.paddingRight = `${width}px`;

root.render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>
);

