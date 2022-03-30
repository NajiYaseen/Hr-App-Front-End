import { useState, useEffect } from "react";
import { IEmployee } from "interfaces";
import axios from "axios";

const api = process.env.REACT_APP_API;

export const getEmployees = async (id?: string) => {
  const data = await axios.get(`${api}/employees/${id ? id : ''}`);
  return data;
};

export const useEmployees = (id?: string) => {
  const [employees, setEmployees] = useState<{ data: IEmployee[] }>({
    data: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getEmployees(id)
      .then((data) => {
        setEmployees(data.data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return { employees: employees.data, isLoading, isError };
};
