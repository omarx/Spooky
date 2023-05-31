import "./App.css";
import CardList from "./components/card-list/card-list.component.tsx";
import SearchBox from "./components/search-box/search-box.component.tsx";
import { useState, useMemo, ChangeEvent } from "react";
import { getData } from "./utils/data.utils.ts";

export type Monster = {
  id: string;
  name: string;
  email: string;
};
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useMemo(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  useMemo(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className={"App"}>
      <h1 className={"app-title"}>Spooky Rolodex</h1>
      <SearchBox
        className={`monsters-search-box`}
        placeHolder={"Search Monsters"}
        Change={handleChange}
      />
      <CardList monster={filteredMonsters} />
    </div>
  );
};

export default App;
