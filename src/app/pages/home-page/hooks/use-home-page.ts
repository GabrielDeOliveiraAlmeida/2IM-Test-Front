import { useCallback, useEffect, useState } from 'react';

import { Applicant } from '@/domain/model';

import { HomeProps } from '../types/home-types';

export const useHomePage = ({ getAllApplicant }: HomeProps) => {
  const [allApplicant, setAllApplicant] = useState<Applicant[]>([]);
  const [err, setErr] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const loadAllApplicant = useCallback(async () => {
    try {
      setLoading(true);
      const allApplicant = await getAllApplicant();
      setAllApplicant(allApplicant);
    } catch (e) {
      const error = e as Error;
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  }, [getAllApplicant]);

  useEffect(() => {
    loadAllApplicant();
  }, [loadAllApplicant]);

  return { allApplicant, err, loading };
};
