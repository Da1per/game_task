import './App.css';
import Main from './Main';
import Header from './Header/Header';
import PopUp from "./PopUp"
import { useSelector,useDispatch } from 'react-redux'
import   {toInicel} from "./reducer/reduceSlice" 
export default function App() {
  let names = useSelector((state) => state.reduceSlice.names)
  let tasks = localStorage.getItem('tasks')
  const dispatch = useDispatch()
  dispatch(toInicel([localStorage.getItem('test'),(tasks!==null)?JSON.parse( tasks ):[]]))
  return (
    <div className="App">
      {(!names)?<PopUp/>:null}
      <Header/>
      <Main/>
    </div>)}


