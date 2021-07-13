import tippy from 'tippy.js';
import 'tippy.js/animations/shift-away-subtle.css';

export default function (node: Element, props) {
  tippy(node, {
    allowHTML: true,
    placement: 'top',
    appendTo: document.querySelector('#tooltips'),
    animation: 'shift-away-subtle',
    arrow: true,
    ...props
  });
}