import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PORT_APIS } from './instance';

export const apisRegister = createApi({
    reducerPath: "apisRegister",
    baseQuery: fetchBaseQuery({
        baseUrl: PORT_APIS,
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        
        // CREATED SIGN UP
        signup: builder.mutation<any, any>({
            query: (user: any) => ({
                url: '/signin',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['user']
        }),

    })
})

export const {
    useSignupMutation
} = apisRegister