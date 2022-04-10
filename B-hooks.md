<img src="images/readme/header-small.jpg" >

# B. Hooks  <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [B.1. useState()](#b1-usestate)
- [B.2. useEffect()](#b2-useeffect)

## B.1. useState()
**À l'aide du pdf du cours, convertissez la classe `CommentForm` en function component** en utilisant le hook **[useState](https://reactjs.org/docs/hooks-reference.html#usestate)** pour remplacer le `state` local et les instructions `this.setState()`.

> _**NB :** comme le state de `CommentForm` contient 2 valeurs indépendantes, je vous recommande d'utiliser 2 `useState()` distincts : 1 pour `content` et 1 autre pour `isLoading`._

Vous devriez en principe remarquer rapidement que le nouveau code est beaucoup plus léger que le précédent alors que pourtant on n'a rien perdu en fonctionnalité ! C'est l'un des avantages majeurs des function components avec les hooks : un code moins verbeux et où le code "important" est mieux mis en avant.

## B.2. useEffect()
**Convertissez ensuite `VideoList` en function component**.

Vous aurez là aussi besoin du hook [useState()](https://reactjs.org/docs/hooks-reference.html#usestate) vu précédemment pour remplacer `this.state.videos`.

**Mais pour remplacer le `componentDidMount()` vous aurez aussi besoin d'un autre hook fourni de base par React : [useEffect()](https://reactjs.org/docs/hooks-reference.html#useeffect)**

> _**NB : souvenez vous,** dans un function component, les props sont passées en paramètre à la fonction au lieu d'être dans le `this` (qui n'est plus utilisable, puisqu'on n'est plus dans une classe !) :_
> ```jsx
> function MyComponent(props) {
> 	return `My name is ${props.name}`;
> }
> ```
> _Je vous conseille surtout d'utiliser le **destructuring** des props directement dans la signature de la fonction, ça fera gagner beaucoup en lisibilité à votre code et surtout l'IDE pourra vous offrir l'auto complétion des props du composant quand vous allez l'instancier en JSX :_
> ```jsx
> function MyComponent( {name} ) {
> 	return `My name is ${name}`;
> }
> ```

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [C. Navigation simple](C-navigation-simple.md)
