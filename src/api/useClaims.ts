import { useState, useEffect } from "react";
import { IClaim } from "interfaces";
import axios from "axios";

const api = process.env.REACT_APP_API;

export const getClaims = async (id?: string) => {
  const data = await axios.get(`${api}/expense/${id ? id : ''}`);
  return data;
};

export const useClaims = (id?: string) => {
  const [claims, setClaims] = useState<{ data: IClaim[] }>({
    data: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getClaims(id)
      .then((data) => {
        setClaims(data.data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  const parsedClaims = claims?.data.map(claim => ({
      id: claim.expenseId,
      details: claim.expenseClaimDetail,
      ...claim
  }))
  return { claims: parsedClaims, isLoading, isError };
};