import { SearchIcon } from "@/components/icons/Search";
import { SelectButton } from "./styles";

export function Button() {
  return (
    <SelectButton type="submit">
      <SearchIcon />
    </SelectButton>
  );
}
