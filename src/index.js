import Reveal from "reveal.js";
import Notes from "reveal.js/plugin/notes/notes.esm";
import Highlight from "reveal.js/plugin/highlight/highlight.esm";

const deck = new Reveal();

deck.initialize({
  plugins: [Notes, Highlight],
});
