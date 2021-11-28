import Filters from "app/shared/model/filters/Filters";
import Utils from "app/shared/util/Util";
import { FunctionComponent, useEffect, useState } from "react";

const getValues = (filters: Filters) =>
  Object.entries(filters).map(([key, filter]) =>
    filter.value
      ? `${Utils.camelCaseToKebabCase(key)}(${filter.value}${filter.unit})`
      : ""
  );

const getStyle = (filters: Filters) => getValues(filters).join(" ");

interface CanvasProps {
  img: string;
  filters: Filters;
}

const Canvas: FunctionComponent<CanvasProps> = (props: CanvasProps) => {
  const [style, setStyle] = useState(getStyle(props.filters));

  useEffect(() => {
    setStyle(getStyle(props.filters));
  }, [props.filters]);

  return (
    <main className="flex w-full items-center justify-center bg-gray-900">
      <img src={props.img} style={{ filter: style }} />
    </main>
  );
};

export default Canvas;
