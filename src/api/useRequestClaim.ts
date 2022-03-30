import { useState } from "react";
import axios from "axios";
import format from "date-fns/format";

export type ClaimDetail = {
  date: string;
  description: string;
  total: string;
};

export type ClaimPayloadPayload = {
  date: string;
  description: string;
  total: string;
  status: string;
  details: ClaimDetail[];
};

const api = process.env.REACT_APP_API;

export const useRequestClaim = (employeeId: string) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const requestClaim = (body: ClaimPayloadPayload) => {
    axios
      .post(`${api}/expense/${employeeId}`, { ...body, date: format(new Date(body.date), "yyyy-MM-dd"), })
      .then((data) => {
        console.log({data: data.data})
        setIsSuccess(true);
        setIsError(false);
        body.details.forEach(detail => {
          axios.post(`${api}/claimDetails/${data.data.data.expenseId}`, detail)
        })
      })
      .catch(() => {
        setIsError(true);
        setIsSuccess(false);
      });
  };

  return { isSuccess, isError, requestClaim };
};
