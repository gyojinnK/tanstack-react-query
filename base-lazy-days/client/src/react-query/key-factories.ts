import { queryKeys } from "./constants";

export const generateUserKey = (userId: number, userToken: string) => {
  return [queryKeys.user, userId, userToken];
};

export const generateAppointmentKey = (userId: number, userToken: string) => {
  return [queryKeys.appointments, queryKeys.user, userId, userToken];
};
