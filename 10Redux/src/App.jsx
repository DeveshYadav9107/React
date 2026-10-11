// Redux isliye use hota hai kyuki  usme state management kaafi easy ho jata hai. Agar aapke application me multiple components hai aur unke beech me data share karna hai to Redux use karna best practice hai. Redux ek predictable state container provide karta hai jisse aap easily state ko manage kar sakte ho aur application ke different parts me data ko share kar sakte ho.

// Redux ke 3 main components hai:
// 1. Store: Store me application ka state hota hai jisse aap easily manage kar sakte ho.
// 2. Action: Action ek plain JavaScript object hota hai jisme type property hoti hai jisse aap state ko modify kar sakte ho.
// 3. Reducer: Reducer ek pure function hota hai jisme aap state ko modify karte ho aur new state return karte ho.

// Redux ke use karne ke liye aapko redux aur react-redux package install karna padta hai. Redux me aapko store create karna padta hai aur usme reducer pass karna padta hai. Uske baad aapko action create karna padta hai jisse aap state ko modify kar sakte ho. Uske baad aapko component me connect function use karke state ko access karna padta hai aur action dispatch karna padta hai.

// Dispatch function ke through aap action ko dispatch karte ho jisse reducer me state modify hoti hai aur new state return hoti hai. Uske baad aapko component me state ko access karna padta hai jisse aap easily state ko manage kar sakte ho.

// Provider component ke through aap store ko application ke different parts me share kar sakte ho. Provider component ko aapko application ke root component me wrap karna padta hai jisse aap easily state ko manage kar sakte ho.


import { Provider } from 'react-redux'
import store from './components/Store'
import Counting from './components/Counting.jsx'
import './App.css'
function App() {
    return (
        <Provider store={store}>
            <Counting />
        </Provider>
    )
}

export default App
