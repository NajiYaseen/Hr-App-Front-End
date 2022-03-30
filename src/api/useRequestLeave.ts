import { useState } from "react";
import axios from "axios";

export type LeavePayload = {
  from: string;
  to: string;
  type: string;
  note: string;
};

const api = process.env.REACT_APP_API;

export const useRequestLeave = (employeeId: string) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const requestLeave = (body: LeavePayload) => {
    axios
      .post(`${api}/leaves/${employeeId}`, {
        leaveFrom: body.from,
        leaveTo: body.to,
        note: body.note,
      })
      .then(() => {
        setIsSuccess(true);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
        setIsSuccess(false);
      });
  };

  return { isSuccess, isError, requestLeave };
};
