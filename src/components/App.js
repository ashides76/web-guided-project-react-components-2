// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { Component, useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import friendsData, { hello } from '../dummy-data/friends'

export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [friends, setFriends] = useState(friendsData);

  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [searchVal, setSearchVal] = useState('');
  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  function changeStatus(id) {
    const updateFriend = friends.map((val) => {
      if (val.id === id) {
        return { ...val, married: !val.married};
      } else {
        return val;
      }
    })
    console.log(id)
    setFriends(updateFriend)
  }
  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  const getFilteredFriends = () => {
    if (!searchVal) return friends;
    return friends.filter(val => {
     return val.name.toLowerCase().includes(searchVal)
    })
  }

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      <Search setSearchVal={setSearchVal} getFilteredFriends={getFilteredFriends}/>
      {/* STRETCH - Changes to the input should update the search term */}

      {/* 👉 7- Render the FriendsList component */}
      {/* <FriendsList friends={friends} changeStatus={changeStatus}/> */}
      <FriendsList friends={getFilteredFriends()} changeStatus={changeStatus}/>
      {/* What prop/props does FriendsList need? */}
    </div>
  )
}
