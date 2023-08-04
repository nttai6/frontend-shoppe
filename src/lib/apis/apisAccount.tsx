import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Iaccount } from '../interface/account';
import { PORT_APIS } from './instance';

export const apisAccount = createApi({
    reducerPath: "apisAccount",
    baseQuery: fetchBaseQuery({
        baseUrl: PORT_APIS,
    }),
    tagTypes: ['account'],
    endpoints: (builder) => ({
        
        // GET ACCOUNT
        getAccounts: builder.query<Iaccount[], void>({
            query: () => `/accounts`,
            providesTags: ['account']
        }),

        // CREATED NEW ACCOUNT
        createAccount: builder.mutation<Iaccount, Omit<Iaccount, "id">>({
            query: (account) => ({
                url: '/account',
                method: 'POST',
                body: account
            }),
            invalidatesTags: ['account']
        }),

        // REMODE NEW ACCOUNT
        removedAccount: builder.mutation<Iaccount, Iaccount>({
            query: (id) => ({
                url: `/account/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['account']
        }),

    })
})

export const {
    useGetAccountsQuery,
    useCreateAccountMutation,
    useRemovedAccountMutation
} = apisAccount