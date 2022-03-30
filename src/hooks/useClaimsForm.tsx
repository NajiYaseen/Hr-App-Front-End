import { ClaimDetail } from "api";
import { useReducer, createContext, useContext } from "react";

export type CaimDetailData = {
  date: string;
  description: string;
  total: string;
};

export type ClaimsState = {
  date: string;
  description: string;
  total: string;
  status: string;
  details: CaimDetailData[];
};

export enum FormAction {
  CHANGE_CLAIM_DATA = "CHANGE_CLAIM_DATA",
  ADD_CLAIM_DETAILS = "ADD_CLAIM_DETAILS",
  CHANGE_CLAIM_DETAILS = "CHANGE_CLAIM_DETAILS",
}

export type Payload = {
  type: FormAction;
  payload?: any;
};

export const newDetail: CaimDetailData = {
  date: "",
  description: "",
  total: "",
};

export const initialFormsState = {
  date: "",
  description: "",
  total: "",
  status: "",
  details: [],
};

const modifyMainState = (state: ClaimsState, key: string, val: any) => {
  return Object.assign({}, state, { [key]: val });
};

const addDetail = (state: ClaimsState) => {
  const { details } = state;
  const newDetails = [...details, newDetail];

  return Object.assign({}, state, { details: newDetails });
};

const modifyDetails = (
  state: ClaimsState,
  detail: CaimDetailData,
  index: number
) => {
  const { details } = state;
  const newDetails = [...details];
  newDetails[index] = detail;
  return Object.assign({}, state, { details: newDetails });
};

const claimsFormReducer = (state: ClaimsState, action: Payload) => {
  const { type, payload } = action;

  switch (type) {
    case FormAction.CHANGE_CLAIM_DATA: {
      return modifyMainState(state, payload.key, payload.val);
    }
    case FormAction.ADD_CLAIM_DETAILS: {
      return addDetail(state);
    }
    case FormAction.CHANGE_CLAIM_DETAILS: {
      return modifyDetails(state, payload.details, payload.index);
    }
    default: {
      return state;
    }
  }
};

export const useClaimsReducer = () => {
  const [state, dispatch] = useReducer(claimsFormReducer, initialFormsState);

  const setState = (type: FormAction, payload?: any) =>
    dispatch({ type, payload });

  const changeClaimData = (key: string, val: any) =>
    setState(FormAction.CHANGE_CLAIM_DATA, { key, val });

  const changeClaimDetails = (details: ClaimDetail, index: number) =>
    setState(FormAction.CHANGE_CLAIM_DETAILS, { details, index });

  const addClaimDetails = () => setState(FormAction.ADD_CLAIM_DETAILS);

  return {
    state,
    changeClaimData,
    addClaimDetails,
    changeClaimDetails,
  };
};

export const ClaimsFormContext = createContext<any>(null);

export const useClaimsForm = () => {
  const context = useContext(ClaimsFormContext);
  if (!context) {
    throw new Error("Form components should be wrapped by ClaimsFormProvider ");
  }
  return context;
};

export const ClaimsFormProvider: React.FC = ({ children }) => {
  const value = useClaimsReducer();

  return (
    <ClaimsFormContext.Provider value={value}>
      {children}
    </ClaimsFormContext.Provider>
  );
};
