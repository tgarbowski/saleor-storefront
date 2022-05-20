import { styled } from "@styles";

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const TableHead = styled.thead`
  background: #fafafa;
`;

export const Row = styled.tr`
  height: 5rem;
  cursor: pointer;
  width: 100%;
  text-align: center;

  border-bottom: 1px solid ${props => props.theme.colors.tableDivider};

  &:hover {
    background-color: #f2f2f2;
  }
`;
export const HeaderRow = styled(Row as any)`
  color: ${props => props.theme.colors.lightFont};
  cursor: default;
  &:hover {
    background: none;
  }
`;

export const IndexNumber = styled.td`
  white-space: nowrap;
  text-align: center;
`;
export const ProductsOrdered = styled.td`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  white-space: nowrap;

  img {
    max-width: 50px;
    max-height: 50px;
    height: auto;
  }
`;
export const DateOfOrder = styled.td`
  white-space: nowrap;
  text-align: center;
`;
export const Value = styled.td`
  white-space: nowrap;
  text-align: center;
`;
export const Status = styled.td`
  white-space: nowrap;
  text-align: center;
`;
