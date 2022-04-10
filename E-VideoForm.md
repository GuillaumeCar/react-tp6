<img src="images/readme/header-small.jpg" >

# E. Naviguer en programmation : VideoForm  <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [E.1. Principe](#e1-principe)
- [E.2. Mise en oeuvre de `history.push`](#e2-mise-en-oeuvre-de-historypush)


## E.1. Principe
On sait maintenant déclencher une navigation au clic sur un lien grâce au composant `<Link>` (ou `NavLink`). Mais parfois on a besoin de **changer de page en programmation, sans que l'utilisateur clique sur un lien**, comme par exemple après la soumission d'un formulaire (_exemple pris au hasard_ 😇 ).

Dans ce cas ce n'est pas un composant `<Link>` que l'on va utiliser mais **la méthode `history.push()`** fournie par le **hook [`useHistory()`](https://reactrouter.com/web/api/Hooks/usehistory)** de React Router.


## E.2. Mise en oeuvre de `history.push`
1. Comme il s'agit là aussi d'un hook, on va d'abord devoir convertir le `VideoForm` en function component.

	Vous aurez besoin de [useState()](https://reactjs.org/docs/hooks-reference.html#usestate) (_pour le state_ `isLoading`), et de [useRef()](https://reactjs.org/docs/hooks-reference.html#useref) (_pour les différents input du form_)

2. Une fois le composant converti, utilisez la méthode `history.push()` pour rediriger l'utilisateur après l'enregistrement d'une vidéo depuis le `VideoForm`.

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [F. Deep Linking](F-deeplinking.md)


