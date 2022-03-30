import { useState, useEffect } from "react";
import axios from "axios";
import { ILeave } from "interfaces";
import { format } from 'date-fns'
type Params = {
  from?: string;
  to?: string;
  id?: string;
};

const api = process.env.REACT_APP_API;

export const getLeaves = async (params?: Params) => {
  const data = await axios.get(`${api}/leaves/`, {
    params: {
      from: params?.from ? format(new Date(params?.from), "yyyy-MM-dd") : undefined,
      to: params?.to ? format(new Date(params?.to), "yyyy-MM-dd") : undefined,
      id: params?.id
    }
  });
  return data;
};

export const useLeaves = (params: Params) => {
  const { from, to, id } = params;
  const [leaves, setLeaves] = useState<{ data: ILeave[] }>({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getLeaves({ from, to, id })
      .then((data) => {
        setLeaves(data.data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, [from, to, id]);
  const parsedLeaves = leaves.data.map(leave => ({
    from: format(new Date(leave.leaveFrom), "yyyy-MM-dd"),
    to: format(new Date(leave.leaveTo), "yyyy-MM-dd"),
    leaveId: leave.leaveID,
    leaveType: leave.type,
    ...leave
  }))
  return { leaves: parsedLeaves, isLoading, isError };
};
