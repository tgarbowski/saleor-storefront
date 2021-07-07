import * as React from "react";
import { FormattedMessage } from "react-intl";

export const NothingFound: React.FC<{ search: string }> = ({ search }) => {
  return (
    <div className="search__products--not-found">
      <p className="u-lead u-lead--bold u-uppercase">
        <FormattedMessage
          defaultMessage="Przepraszamy, ale nie udało się dopasować żadnych wyników wyszukiwania dla:  {search}"
          values={{ search }}
        />
      </p>
      <p>
        <FormattedMessage defaultMessage="Nie poddawaj się – sprawdź pisownię, wymyśl coś mniej konkretnego, a następnie skorzystaj z wyszukiwarki powyżej. " />
      </p>
    </div>
  );
};

export default NothingFound;
