import { useState } from "react";
import axios from "axios";

type Employee = {
  name: string;
  email: string;
  address: string;
  departmentId: string;
};

const api = process.env.REACT_APP_API;

export const useCreateOrUpdateEmployee = (id?: string) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  console.log({id})
  const createOrUpdateEmployee = (body: Employee) => {
    if (id) {
      axios
        .put(`${api}/employees/${id}`, body)
        .then(() => {
          setIsSuccess(true);
          setIsError(false);
        })
        .catch(() => {
          setIsError(true);
          setIsSuccess(false);
        });
    } else {
      axios
        .post(`${api}/employees/`, body)
        .then(() => {
          setIsSuccess(true);
          setIsError(false);
        })
        .catch(() => {
          setIsError(true);
          setIsSuccess(false);
        });
    }
  };

  return { isSuccess, isError, createOrUpdateEmployee };
};
