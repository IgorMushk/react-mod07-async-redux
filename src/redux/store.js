import { configureStore } from "@reduxjs/toolkit";
import { tasksReduser } from "./taskSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReduser,
    },
})