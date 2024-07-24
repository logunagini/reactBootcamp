
import bird from './bird.jpeg';
import bird_2 from './bird_2.jpeg';
import bird_3 from './bird_3.jpeg';

export const CORE_CONCEPTS = [
  {
    image: bird,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: bird_2,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: bird_3,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },

];
export const Examples = {
    bird: {
        title: 'Components',
        description:
          'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.'
      },
      bird_2: {
        title: 'JSX',
        description:
          'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).'
      },
      bird_3: {
        title: 'Props',
        description:
          'Components accept arbitrary inputs called props. They are like function arguments.',
    
}
}