import { MEDIA_QUERY_ACTIONS } from '../constants/media-query-constants';

export const handleMediaQueryResult = data => ({
  type: MEDIA_QUERY_ACTIONS.HANDLE_MEDIA_QUERY_RESULT,
  data,
});
