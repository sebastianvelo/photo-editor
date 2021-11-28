import initialFilters from "app/shared/data/initialFilters";
import Filters, { FilterKeys } from "app/shared/model/filters/Filters";
import { FunctionComponent, useState } from "react";
import Canvas from "./canvas/Canvas";
import Toolbar from "./toolbar/Toolbar";

const Playground: FunctionComponent = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const updateFilter = (key: FilterKeys, value: number) => {
    const newFilter = {
      ...filters[key],
      value
    };
    setFilters({ ...filters, [key]: newFilter });
  };

  return (
    <div className="flex">
      <Toolbar filters={filters} updateFilter={updateFilter} />
      <Canvas filters={filters} img={"https://picsum.photos/600"} />
    </div>
  );
};

export default Playground;
