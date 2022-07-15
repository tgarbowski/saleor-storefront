import React from "react";
import { FormattedMessage } from "react-intl";

import { Chip, DropdownSelect } from "@components/atoms";
import { FilterIcon } from "@styles/icons";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductListHeader: React.FC<IProps> = ({
  numberOfProducts = 0,
  openFiltersMenu,
  clearFilters,
  activeSortOption,
  activeFilters = 0,
  activeFiltersAttributes = [],
  sortOptions,
  onChange,
  onCloseFilterAttribute,
}: IProps) => {
  return (
    <S.Wrapper>
      <S.Bar>
        <S.LeftSide>
          <S.FiltersButton onClick={openFiltersMenu} data-test="filtersButton">
            <img src={FilterIcon} alt="" width="32" height="32" />
            <S.Filters>
              <FormattedMessage {...commonMessages.filterHeader} />{" "}
              {activeFilters > 0 && <span>({activeFilters})</span>}
            </S.Filters>
          </S.FiltersButton>
          {activeFilters > 0 && (
            <S.Clear onClick={clearFilters} data-test="clearFiltersButton">
              <FormattedMessage {...commonMessages.clearFilterHeader} />
            </S.Clear>
          )}
        </S.LeftSide>

        <S.RightSide>
          {/* <S.Element data-test="productsFoundCounter">
            <S.Label>
              <FormattedMessage defaultMessage="Liczba produktów:" />
            </S.Label>
            {numberOfProducts}
          </S.Element> */}
          <S.Element>
            <S.Sort>
              <DropdownSelect
                onChange={onChange}
                options={sortOptions}
                value={sortOptions.find(
                  option => option.value === activeSortOption
                )}
              />
            </S.Sort>
          </S.Element>
        </S.RightSide>
      </S.Bar>
      <S.FiltersChipsWrapper>
        {activeFilters > 0 ? (
          <>
            <S.FiltersChipsHeading>Aktywne filtry</S.FiltersChipsHeading>
            <>
              {activeFiltersAttributes.map(
                ({ attributeSlug, valueName, valueSlug }) => (
                  <Chip
                    key={valueSlug}
                    onClose={() =>
                      onCloseFilterAttribute(attributeSlug, valueSlug)
                    }
                  >
                    {valueName}
                  </Chip>
                )
              )}
            </>
          </>
        ) : null}
      </S.FiltersChipsWrapper>
    </S.Wrapper>
  );
};
