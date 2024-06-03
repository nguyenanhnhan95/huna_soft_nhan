import "../../../css/admin/tableManage.css"
function TableManage(props) {
  const { nameColumn } = props;
  return (
    <div className="main-content-data pb-3">
      <div className="container-fluid container-content-data table-responsive">
        <table className="table table-hover ">
          <thead className="table-thead">
            <tr >
              {nameColumn.map((each, index) => (
                <th scope="col" style={{width:each.style.width}} key={index}>{each.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td className="table-action">
                <div className="dropdown">
                  <i className="fa-solid fa-ellipsis-vertical" data-bs-toggle="dropdown" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td className="table-action"><i className="fa-solid fa-ellipsis-vertical" /></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
              <td className="table-action"><i className="fa-solid fa-ellipsis-vertical" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between row container-content-data-page ">
        <div className="col-12 d-flex justify-content-end align-items-center">
          <div className="dataTables_info  container-content-data-page-item">
            [
            <span>1</span>-
            <span>20</span>/
            <span>356</span>]
          </div>
          <div className="table-selection-page container-content-data-page-item">
            <label>
              <select defaultValue={5} onChange={() => 5}>
                <option >5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
            </label>
          </div>
          <div className="table-items-page container-content-data-page-item">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TableManage;