import { getQuery } from '@redux-requests/core';
import { useSelector } from 'react-redux';
import { common } from 'store/mutationAction';

export const useCommon = (key, defaultValue) => {
  return useSelector((state) => getQuery(state, { type: common })?.data?.[key] ?? defaultValue);
};
