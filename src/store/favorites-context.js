import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) => { }
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => prevUserFavorites.concat(favoriteMeetup));
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(preUserFavorites => preUserFavorites.filter(favoriteMeetup => favoriteMeetup.id !== meetupId));
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(favoriteMeetup => favoriteMeetup.id === meetupId);
    }
    const context =     {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;