'use client'

import { useRouter } from 'next/navigation'
import ReactPaginate from 'react-paginate'

interface PaginationProps {
  pageCount: number
  currentPage: number
  basePath?: string
}

const Pagination = ({ 
  pageCount, 
  currentPage, 
  basePath = '/' 
}: PaginationProps) => {
  const router = useRouter()

  const handlePageChange = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected + 1
    const query = newPage > 1 ? `?page=${newPage}` : ''
    router.push(`${basePath}${query}`)
  }

  if (pageCount <= 1) return null

  return (
    <ReactPaginate
      previousLabel="‹"
      nextLabel="›"
      breakLabel="..."
      pageCount={pageCount}
      forcePage={currentPage - 1} 
      onPageChange={handlePageChange}
      containerClassName="flex justify-center items-center gap-2 mt-8"
      pageClassName="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-600 text-gray-200"
      pageLinkClassName="w-full h-full flex items-center justify-center"
      activeClassName="bg-blue-500 text-white border-blue-500"
      previousClassName="flex items-center justify-center w-8 h-8 rounded bg-gray-100 hover:bg-gray-100"
      nextClassName="flex items-center justify-center w-8 h-8 rounded bg-gray-100 hover:bg-gray-100"
      disabledClassName="opacity-50 cursor-not-allowed"
    />
  )
}

export default Pagination