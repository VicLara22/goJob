import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { configFilterUserPut } from '../../../redux/actions/users/profesionales';

const PaginationProfesional = () => {
  let configFilterUser = useSelector((state) => state.configFilterUser);
  const usersProfesionales = useSelector((state) => state.usersProfesionales);

  let dispatch = useDispatch()

  let [actualPage, setActualPage] = useState(1)

  const previusPage = (validation)=>{
    if(!validation) return false

    setActualPage(Number(actualPage) - 1)

    dispatch(configFilterUserPut({
      ...configFilterUser,
      page: Number(actualPage) - 1
    }))

  }

  const nextPage = (validation)=>{
    if(!validation) return false

    setActualPage(Number(actualPage) + 1)

    dispatch(configFilterUserPut({
      ...configFilterUser,
      page: Number(actualPage) + 1
    }))
  }


  return (
    <>
      {usersProfesionales && usersProfesionales.totalPages > 0? (
        <span class="text-sm text-gray-700 dark:text-gray-400 mb-1	">
          Pagina <span class="font-semibold text-gray-900 dark:text-white">{`${actualPage} de ${usersProfesionales.totalPages}`}</span>
        </span>
      ):""}

      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg onClick={()=>previusPage(usersProfesionales.previousPage)} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </li>


          <li>
            <a  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{actualPage}</a>
          </li>

  
          <li>
            <a className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span  className="sr-only">Next</span>
              <svg onClick={()=>nextPage(usersProfesionales.nextPage)} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </li>
        </ul>
      </nav>
    </>


  )
}

export default PaginationProfesional;
