import { GetStatus } from '@/domain/services/get-status';

export type StatusPagePros = {
  apiGetStatus: GetStatus;
};

export type Status = { id: string; ended: boolean; suspended: boolean } | undefined;
