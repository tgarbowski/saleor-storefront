import "./scss/index.scss";

import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../core/config";
import Button from "../Button";

interface NotFoundProps {
  message?: string;
}

const NotFound: React.FC<NotFoundProps> = () => (
  <div className="not-found-page">
    <h2 className="not-found-page__header">
      <FormattedMessage defaultMessage="404" />
    </h2>
    <div className="not-found-page__ruler" />
    <div className="not-found-page__message">
      <p>
        <FormattedMessage defaultMessage="Nie możemy znaleźć strony, której szukasz! " />{" "}
      </p>
      <p>
        <FormattedMessage defaultMessage="Być może błędnie wpisałeś adres lub strona mogła zostać przeniesiona. " />{" "}
      </p>
      <p>
        <FormattedMessage defaultMessage="Przepraszamy za błąd i życzymy dobrego dnia. " />
      </p>
    </div>
    <div className="not-found-page__button">
      <Link to={BASE_URL}>
        <Button testingContext="404pageGotoHomeButton" secondary>
          <FormattedMessage defaultMessage="Back to home" />
        </Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
