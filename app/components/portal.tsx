import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

/*
Here's an explanation of what is going on in this component:

  1. A function is defined that generates a div with an id. That element is then attached to the document's body.
  2. If an element with the provided id does not already exist, invoke the createWrapper function to create one.
  3. When the Portal component is un-mounted, this will destroy the element.
  4. Creates a portal to the newly generated div.

The result will be that any element or component wrapped in this Portal will be rendered as a direct child of the body tag, rather than in the current DOM branch as a child of its parent.
*/

interface props {
  children: React.ReactNode;
  wrapperId: string;
}

const createWrapper = (wrapperId: string) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
};

export const Portal: React.FC<props> = ({ children, wrapperId }: props) => {
  const [wrapper, setWrapper] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let created = false;

    if (!element) {
      created = true;
      element = createWrapper(wrapperId);
    }

    setWrapper(element);

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapper === null) return null;

  return createPortal(children, wrapper);
};
