import {useContext} from 'react'
import { StoreContext } from './StoreProvider';


// custom hook to use store
export const useStore = () => useContext(StoreContext);