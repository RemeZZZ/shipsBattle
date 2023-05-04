export class DOMController {
  createElements(object, $container = document) {
    const entries = Object.entries(object);

    const elements = entries.reduce((acc, item) => {
      const [name, tagName] = item;

      const $element = document.createElement(tagName);

      acc[name] = $element;

      $container.appendChild($element);

      return acc;
    }, {});

    return elements;
  }
  setAttributes(array) {
    array.forEach((item) => {
      const { $element, attributes } = item;

      Object.entries(attributes).forEach((item) => {
        const [name, value] = item;

        $element.setAttribute(name, value);
      });
    });
  }
  getAttributes($element) {
    const attributes = {};

    for (const item of $element.attributes) {
      attributes[item.nodeName] = item.nodeValue;
    }

    return attributes;
  }
}

export default new DOMController();
