import './App.css'
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {useState,useEffect} from "react";

const App =()=>{
    const [searchField,setSearchField]=useState('');
    const [monsters,setMonsters]=useState([]);
    const [filteredMonsters,setFilteredMonsters]=useState(monsters);

    useEffect(()=>{
        const newFilteredMonsters=monsters.filter(monster=>{
        return monster.name.toLocaleLowerCase().includes(searchField)
    });
        setFilteredMonsters(newFilteredMonsters);
        }, [monsters, searchField]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>setMonsters(users));
        },
        []);
   const handleChange=(event)=>{
       const searchFieldString=event.target.value.toLocaleLowerCase();
       setSearchField(searchFieldString);
   }
       return( <div className={'App'}>
            <h1 className={"app-title"}>Spooky Rolodex</h1>
            <SearchBox className={`monsters-search-box`} placeHolder={'Search Monsters'} Change={handleChange} />
               <CardList monster={filteredMonsters}/>

           </div>

    )
};
 export default App;
