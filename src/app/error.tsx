'use client';

import { useDispatch } from "react-redux";
import { AppDispatch } from './redux/store';
import { ERRORS } from './helpers/errors';
import { setTechnicalError } from './redux/technical/technical-slice';

export default function HomePageError({ error }: { error: Error }) {
  const dispatch: AppDispatch = useDispatch();
  if (error.message === ERRORS.NOT_FOUND) {
    dispatch(setTechnicalError("Articles not found"));
    return null;
  }
  dispatch(setTechnicalError("Something went wrong"));
    return null;
}
