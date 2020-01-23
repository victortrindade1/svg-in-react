# Svg no React

Fonte: https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

Vc pode usar SVG de duas formas:

- renderizando pela própria tag <svg>
- como source da tag <img>

O melhor jeito é renderizando a própria tag, pois assim manipulamos as props,
que são cores, nomes de classes, estilos.

## Exemplo

SVG original:

```html
<svg
  width="121"
  height="24"
  viewBox="0 0 121 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2.47155 4.13135H11.0443V0.0465679H7.77707 ... "
    fill="white"
  />
</svg>
```

Modificando para JS:

```javascript
import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  height = "",
  className = "",
  viewBox = "0 0 121 24"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill={fill} d="M2.47155 4.13135H11.0443V0.0465679H7.77707 ... " />
  </svg>
);

export default SVG;
```

Não precisa se preocupar em mudar o estilo neste arquivo, apenas exporte deste
jeito. O css vc vai pegar das props que está construindo aqui.

## Chamando como componente

```javascript
import FooBar from "./FooBar";

const App = () => {
  return (
    <>
      <FooBar
        width={200}
        fill="#fa2"
        className="my-foobar-class"
        style={{ background: "#333", padding: "16px" }}
      />
    </>
  );
};

export default App;
```

## Estilizando CSS

Repare que quando modificou pra JS, criou um className
`` className={`svg-icon ${className || ""}`} ``, ou seja, posso chamar como
`.svg-icon`, ou dar nome de classe no arquivo JS qnd chama como componente, e no
css chamar como `.svg-icon.<nome da classe>`.

Outra observação é para o nome `path`, q deve aparecer no css por estarmos
estilizando dentro da tag path. Fica assim:

```css
.svg-icon path {
  transition: 250ms;
}

.svg-icon:hover path {
  fill: #292;
}

.svg-icon.my-class-name-in-component:hover path {
  fill: #49c;
}
```
