import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice/userSlice";
import conf from './confSlice/confSlice';

export default configureStore({
	reducer: { user, conf },
});
