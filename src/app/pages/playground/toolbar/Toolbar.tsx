import Filters, { FilterKeys } from "app/shared/model/filters/Filters";
import { FunctionComponent } from "react";
import Range from "./range/Range";

interface ToolbarProps {
  filters: Filters;
  updateFilter: (key: FilterKeys, value: number) => void;
}

const Toolbar: FunctionComponent<ToolbarProps> = (props: ToolbarProps) => (
    <aside className="bg-black w-1/4 h-screen overflow-y-scroll text-light flex flex-col items-center">
      <h1 className="text-3xl bg-blue-900 w-full text-center p-4">
        Photoshopn't
      </h1>
      <div className="w-full  px-4">
        {Object.entries(props.filters).map((entry: any) => (
          <Range
            id={entry[0]}
            label={entry[1].label}
            initial={entry[1].initial}
            onChange={props.updateFilter}
            range={{ ...entry[1] }}
          />
        ))}
      </div>
    </aside>
  );

export default Toolbar;
