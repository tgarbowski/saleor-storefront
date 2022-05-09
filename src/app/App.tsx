import { useAuth } from '@saleor/sdk';
import { useRouter } from 'next/router';
import React from 'react';

import { Loader } from '@components/atoms';
import { UnderConstruction } from '@components/organisms/UnderConstruction/UnderConstruction';
import { useDynamicRouteRedirect } from '@hooks';
import CookiesBar from '@temp/components/CookiesBar';
import { demoMode, shopName, underConstruction } from '@temp/constants';
import { ShopConfig } from '@utils/ssr';

import { Footer, MainMenu, MetaConsumer, OverlayManager, OverlayProvider } from '../components';
import ShopProvider from '../components/ShopProvider';
import Notifications from './Notifications';

import '../globalStyles/scss/index.scss';

type AppProps = ShopConfig;

const App: React.FC<AppProps> = ({
  footer,
  mainMenu,
  shopConfig,
  children,
}) => {
  const { pathname } = useRouter();
  const willRedirect = useDynamicRouteRedirect();
  const { tokenRefreshing, tokenVerifying } = useAuth();
  const loading = tokenRefreshing || tokenVerifying || willRedirect;

  if (underConstruction === "true" && shopName === "FASHION4YOU") {
    return <UnderConstruction />;
  }

  return (
    <ShopProvider shopConfig={shopConfig}>
      <OverlayProvider pathname={pathname}>
        <MetaConsumer />
        <MainMenu loading={loading} demoMode={demoMode} menu={mainMenu} />
        {loading ? <Loader fullScreen /> : children}
        <Footer menu={footer} />
        <CookiesBar />
        <OverlayManager />
        <Notifications />
      </OverlayProvider>
    </ShopProvider>
  );
};

export default App;
