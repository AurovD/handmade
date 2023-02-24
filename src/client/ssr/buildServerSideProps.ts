import { ParsedUrlQuery } from 'querystring';
import { Config } from 'src/shared/types/config';
import { AppData } from 'src/shared/types/app-data';
import { filterUnserializable } from './filterUnserializable';
import { extractAppData } from './extractAppData';

import {
  GetServerSideProps,
  GetServerSidePropsContext,
} from 'src/shared/types/next';

type StaticProps = {
  appData: Partial<AppData>;
};

export type StaticQuery = {
  config: Config;
};

const buildServerSideProps = <P, Q extends ParsedUrlQuery = ParsedUrlQuery>(
  getServerSideProps: (ctx: GetServerSidePropsContext<Q>) => Promise<P>,
): GetServerSideProps<Partial<StaticProps> & P, Partial<StaticQuery> & Q> => {
  return async (ctx) => {
    const props = await getServerSideProps(ctx);

    return {
      props: {
        ...props,
        appData: extractAppData(ctx),
      },
    };
  };
};

export { buildServerSideProps };
