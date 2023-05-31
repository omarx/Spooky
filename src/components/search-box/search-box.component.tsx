import SearchInput from "./search-box.styles.tsx";
import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  className?: string;
  placeHolder?: string;
  Change: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ placeHolder, Change, className }: SearchBoxProps) => {
  return (
    <div>
      <SearchInput
        className={`${className}`}
        type={`search`}
        placeholder={placeHolder}
        onChange={Change}
      />
    </div>
  );
};

export default SearchBox;
