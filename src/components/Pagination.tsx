type PaginationProps = {
    totalOfPages: number,
    pageNumber: number,
    handlePageSelection: (pageNumber: number) => void,
}

export default function Pagination({totalOfPages, pageNumber, handlePageSelection}: PaginationProps) {

  const pagesArray = Array.from({length: totalOfPages}, (_, i) => {return i+1});

  return (
    <>
      <nav className="mt-2" aria-label="...">
        <ul className="pagination">
          <li key={"previous"} className={pageNumber === 0 ? "page-item disabled": "page-item"}>
            <a onClick={() => handlePageSelection(pageNumber - 1)} className="page-link">Anterior</a>
          </li>

          {pagesArray.map(page => {
            return <li key={page} className={pageNumber === page-1 ? "page-item active" : "page-item"} >
            <a onClick={() => handlePageSelection(page-1)} className="page-link">
              {page}
            </a>
          </li>
          })}
          
          <li key={"next"} className={pageNumber === totalOfPages-1 ? "page-item disabled": "page-item"}>
            <a onClick={() => handlePageSelection(pageNumber + 1)} className="page-link">
              Próximo
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
