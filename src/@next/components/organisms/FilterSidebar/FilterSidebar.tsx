import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import { IconButton } from "@components/atoms";
import { AttributeValuesChecklist } from "@components/molecules";
import { useHandlerWhenClickedOutside } from "@hooks";
import { commonMessages } from "@temp/intl";

import { IFilterAttribute, IFilters } from "../../../types";
import { Overlay } from "..";
import * as S from "./styles";
import { IProps } from "./types";

const checkIfAttributeIsChecked = (
  filters: IFilters,
  value: IFilterAttribute,
  slug: string
) => {
  if (filters!.attributes && filters.attributes.hasOwnProperty(slug)) {
    if (filters.attributes[slug].find(filter => filter === value.slug)) {
      return true;
    }
    return false;
  }
  return false;
};

export const FilterSidebar: React.FC<IProps> = ({
  hide,
  filters,
  show,
  attributes,
  target,
  onAttributeFiltersChange,
  title,
  name,
  values,
  onValueClick
}: IProps) => {
  const { setElementRef } = useHandlerWhenClickedOutside(() => {
    hide();
    setSearchFilter("");
  });

  const [searchFilter, setSearchFilter] = useState<string>("");

  return (
    <Overlay
      duration={0}
      position="left"
      show={show}
      hide={hide}
      transparent
      target={target}
    >
      <S.Wrapper ref={setElementRef()} data-test="filterSidebar">
        <S.Header>
          <S.HeaderName>
            <span>
              <FormattedMessage {...commonMessages.filterHeader} />
            </span>
            <IconButton
              testingContext="hideFilters"
              onClick={hide}
              name="x"
              size={18}
              color="000"
            />
          </S.HeaderName>
          <S.SearchWrapper>
            <S.Search
              name="Szukaj"
              placeholder="Szukaj"
              type="text"
              onChange={(event: any) => {
                setSearchFilter(event.target.value);
              }}
            />
          </S.SearchWrapper>
        </S.Header>
        { searchFilter === "" ? (
             attributes.map(({ id, slug, name, choices }) => {
              const values = (choices?.edges.map(({ node }) => node) ||
                []) as IFilterAttribute[];
              return (
                <AttributeValuesChecklist
                  key={id}
                  title={name}
                  name={slug!}
                  values={values.map(value => ({
                    ...value,
                    selected: checkIfAttributeIsChecked(filters, value, slug!),
                  }))}
                  valuesShowLimit
                  onValueClick={value =>
                    onAttributeFiltersChange(slug!, value.slug)
                  }
                />
              );
            })
        ) : (
          attributes.map(({ id, slug, name, choices }) => {
            const values = (choices?.edges.map(({ node }) => node) ||
              []) as IFilterAttribute[];

            return (
              <AttributeValuesChecklist
                key={id}
                title={name}
                name={slug!}
                values={
                  values
                  .filter((val) => {
                    if ( searchFilter === "") {
                      return val;
                    } 
                    if (val.name.toLowerCase().includes(searchFilter.toLowerCase())) return val;

                  })
                  .map(value => ({
                  ...value,
                  selected: checkIfAttributeIsChecked(filters, value, slug!),
                }))}
                valuesShowLimit
                onValueClick={value =>
                  onAttributeFiltersChange(slug!, value.slug)
                }
              />
            );
          })
        )}
      </S.Wrapper>
    </Overlay>
  );
};
