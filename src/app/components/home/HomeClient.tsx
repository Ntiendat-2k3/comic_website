'use client'

import { useSearchParams } from 'next/navigation'
import ComicGrid from './ComicGrid'
import Pagination from '@/app/utils/Pagination'
import { HomeParams } from '@/app/types/common'

export default function HomeClient({ 
  data 
}: { 
  data: {
    items: any[]
    params: HomeParams
    seoOnPage: any
  }
}) {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  
  const pageCount = Math.ceil(
    data.params.pagination.totalItems / 
    data.params.pagination.totalItemsPerPage
  )

  return (
    <>
      <ComicGrid comics={data.items} />
      <Pagination 
        pageCount={pageCount}
        currentPage={currentPage}
        basePath="/"
      />
    </>
  )
}