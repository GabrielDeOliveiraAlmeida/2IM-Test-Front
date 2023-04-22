import { StatusPage } from '@/app/pages/status';
import { makeGetStatus } from '@/main/factories/use-case';

export function makeStatusPage() {
  return <StatusPage apiGetStatus={makeGetStatus()} />;
}
