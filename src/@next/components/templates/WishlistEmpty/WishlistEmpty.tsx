import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "@components/atoms";
import { paths } from "@paths";

import { Container } from "../Container";
import * as S from "./styles";

/**
 * Template for empty wishlist page.
 */
const WishlistEmpty = () => {
  return (
    <Container>
      <S.Wrapper>
        <S.TitleFirstLine>
          <FormattedMessage defaultMessage="Twoja lista życzeń" />
        </S.TitleFirstLine>
        <S.TitleSecondLine>
          <FormattedMessage defaultMessage="jest pusta" />
        </S.TitleSecondLine>
        <S.HR />
        <S.Subtitle>
          <FormattedMessage defaultMessage="Może jeszcze nie dokonałeś wyboru" />
        </S.Subtitle>
        <Link href={paths.home}>
          <a>
            <Button testingContext="wishlistbutton" aria-label="wishlistbutton">
              <FormattedMessage defaultMessage="Wróć na stronę główną" />
            </Button>
          </a>
        </Link>
      </S.Wrapper>
    </Container>
  );
};

export { WishlistEmpty };
