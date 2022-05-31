import { Attribute } from "@graphql/gqlTypes/Attribute";
import { IFilterAttribute, IFilters } from "@types";

export interface IProps {
  attributes: Attribute[];
  filters: IFilters;
  hide: () => void;
  onAttributeFiltersChange: (attributeSlug: string, values: string) => void;
  show: boolean;
  target?: HTMLElement | null;
  name: string;
  values: IFilterAttribute[];
  onValueClick: (value: IFilterAttribute) => void;
  title?: React.ReactNode;
}