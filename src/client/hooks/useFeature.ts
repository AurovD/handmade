import { useAppData } from 'src/client/ssr/useAppData';

const useFeature = (feature: string, defaultValue = false) => {
  return useAppData().features || defaultValue;
};

export { useFeature };
