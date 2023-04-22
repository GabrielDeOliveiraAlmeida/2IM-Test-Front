import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { StatusPagePros, Status } from '../types/status-types';

export const useStatusPage = ({ apiGetStatus }: StatusPagePros) => {
  const { processId } = useParams();
  const [status, setStatus] = useState<Status>(undefined);
  const [statusErr, setStatusErr] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const callGetStatus = useCallback(
    async (processId: string) => {
      try {
        setLoading(true);
        const status = await apiGetStatus({ processId });
        setStatus(status);
      } catch (e) {
        const error = e as Error;
        setStatusErr(error.message);
      } finally {
        setLoading(false);
      }
    },
    [apiGetStatus],
  );

  useEffect(() => {
    if (processId !== undefined) {
      callGetStatus(processId);
    }
  }, [apiGetStatus, callGetStatus, processId]);

  return {
    status,
    statusErr,
    loading,
    processId,
  };
};
