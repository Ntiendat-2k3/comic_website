// 'use client'

// import { useQuery } from '@tanstack/react-query'
// import OTruyenService from '../services/otruyen.service'
// import { HomeResponse } from '../types/response'

// export const useComics = (page: number) => {
//   return useQuery<HomeResponse, Error>({
//     queryKey: ['comics', page],
//     queryFn: () => OTruyenService.getHomeData(page, 15),
//     keepPreviousData: true,
//     staleTime: 1000 * 60 * 5
//   })
// }